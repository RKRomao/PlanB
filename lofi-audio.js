/* ==========================================================================
   PLAN B // LO-FI AUDIO ENGINE (WEB AUDIO API)
   Guitarra jazz com tape delay, bateria lo-fi com swing, ruído de vinil,
   progressão harmónica jazz e osciloscópio visualizador em tempo real
   ========================================================================== */

let audioCtx = null;
let masterGain = null;
let vinylGainNode = null;
let vinylSource = null;
let isAudioPlaying = false;
let chordTimer = null;

let analyser = null;
let animFrameId = null;

let canvas = null;
let ctx = null;

const config = {
    bpm: 60,
    master: 0.8,
    chords: 0.03,
    bass: 0.085,
    kick: 0.14,
    snare: 0.055,
    hat: 0.02,
    guitar: 0.09,
    vinyl: 0.22,
    filter: 850,
    swing: 35 // ms
};

function initConfigAndOscilloscope() {
    canvas = document.getElementById('oscilloscope');
    if (canvas) {
        ctx = canvas.getContext('2d');
        drawIdleLine();
    }

    Object.keys(config).forEach(key => {
        const input = document.getElementById(key);
        const label = document.getElementById(`val-${key}`);
        if (!input) return;
        input.addEventListener('input', e => {
            const val = parseFloat(e.target.value);
            config[key] = val;
            if (label) label.textContent = e.target.value;

            if (key === 'master' && masterGain && audioCtx) {
                masterGain.gain.setTargetAtTime(val, audioCtx.currentTime, 0.05);
            }
            if (key === 'vinyl' && vinylGainNode && audioCtx) {
                vinylGainNode.gain.setTargetAtTime(val, audioCtx.currentTime, 0.05);
            }
        });
    });

    // Buttons Play / Stop
    const toggleBtn1 = document.getElementById('toggleBtn');
    if (toggleBtn1) toggleBtn1.addEventListener('click', handleToggleAudio);

    const toggleBtn2 = document.getElementById('toggle-lofi-btn');
    if (toggleBtn2) toggleBtn2.addEventListener('click', handleToggleAudio);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConfigAndOscilloscope);
} else {
    initConfigAndOscilloscope();
}

function playLofiChordProgression() {
    const chords = [
        { root: 87.31, notes: [174.61, 220.00, 261.63, 329.63, 392.00] }, // Fmaj9
        { root: 82.41, notes: [164.81, 196.00, 246.94, 293.66, 392.00] }, // Em7
        { root: 73.42, notes: [146.83, 174.61, 220.00, 261.63, 329.63] }, // Dm9
        { root: 98.00, notes: [196.00, 246.94, 293.66, 349.23, 440.00] }, // G13
        { root: 65.41, notes: [130.81, 164.81, 196.00, 246.94, 293.66] }, // Cmaj9
        { root: 110.00, notes: [220.00, 277.18, 329.63, 392.00, 466.16] }, // A7b9
        { root: 73.42, notes: [146.83, 174.61, 220.00, 261.63, 329.63] }, // Dm9
        { root: 98.00, notes: [196.00, 261.63, 293.66, 349.23, 440.00] }  // G9sus4
    ];

    // Pentatónica de Dó Maior + 9ª (sempre consonante e chill)
    const jazzScale = [
    261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
        523.25, 587.33, 659.25, 783.99          // C5, D5, E5, G5
    ];

    let chordIdx = 0;
    let lastGuitarIdx = 4; // começa na zona média da escala

    // --- BUS DE DELAY DE FITA PARA A GUITARRA ---
    const guitarBus = audioCtx.createGain();
    const delayNode = audioCtx.createDelay(1.0);
    const delayFeedback = audioCtx.createGain();
    const delayFilter = audioCtx.createBiquadFilter();
    const delayWet = audioCtx.createGain();

    delayNode.delayTime.value = 0.375; // eco em colcheia pontuada
    delayFeedback.gain.value = 0.32;
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 1200; // repetições mais escuras
    delayWet.gain.value = 0.35;

    guitarBus.connect(masterGain); // som seco
    guitarBus.connect(delayNode);
    delayNode.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delayNode);
    delayFilter.connect(delayWet);
    delayWet.connect(masterGain);

    // Buffer de ruído para bateria
    const drumNoiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.5, audioCtx.sampleRate);
    const drumData = drumNoiseBuffer.getChannelData(0);
    for (let i = 0; i < drumData.length; i++) drumData[i] = Math.random() * 2 - 1;

    // Ruído de vinil em loop
    const startVinylNoise = () => {
        const bufferSize = audioCtx.sampleRate * 3;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const crackle = Math.random() > 0.9992 ? (Math.random() * 0.4 - 0.2) : 0;
            output[i] = (Math.random() * 2 - 1) * 0.008 + crackle;
        }

        vinylSource = audioCtx.createBufferSource();
        vinylSource.buffer = noiseBuffer;
        vinylSource.loop = true;

        const bandpass = audioCtx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 1800;
        bandpass.Q.value = 0.7;

        vinylGainNode = audioCtx.createGain();
        vinylGainNode.gain.value = config.vinyl;

        vinylSource.connect(bandpass);
        bandpass.connect(vinylGainNode);
        vinylGainNode.connect(masterGain);
        vinylSource.start();
    };

        // --- GUITARRA JAZZ (SÍNTESE DE CORDA KARPLUS-STRONG) ---
        const playGuitarNote = (freq, startTime, duration, vol) => {
            if (vol <= 0) return;

            const sampleRate = audioCtx.sampleRate;
            const totalSamples = Math.floor(sampleRate * duration);
            const buffer = audioCtx.createBuffer(1, totalSamples, sampleRate);
            const data = buffer.getChannelData(0);

            // Tamanho da onda (comprimento da corda)
            const period = Math.round(sampleRate / freq);
            // Damping mais alto = corda mais abafada/quente (jazz)
            const damping = 0.994;

                // 1. Excitação inicial (palheta suave = ruído filtrado)
                let lastNoise = 0;
                for (let i = 0; i < period; i++) {
                    const white = Math.random() * 2 - 1;
                    // Filtro passa-baixo simples no ataque para tirar o som metálico
                    lastNoise = 0.5 * white + 0.5 * lastNoise;
                    data[i] = lastNoise;
                }

                    // 2. Vibração da corda ao longo do tempo
                    for (let i = period; i < totalSamples; i++) {
                        data[i] = damping * 0.5 * (data[i - period] + data[i - period + 1]);
                    }

                    const source = audioCtx.createBufferSource();
                    source.buffer = buffer;

                    // Simulação de amplificador jazz (quente e redondo)
                    const ampFilter = audioCtx.createBiquadFilter();
                    ampFilter.type = 'lowpass';
                    ampFilter.frequency.value = 1100;

                    const gain = audioCtx.createGain();
                    gain.gain.setValueAtTime(vol * 1.4, startTime);
                    gain.gain.setValueAtTime(vol * 1.4, startTime + duration - 0.08);
                    gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

                    source.connect(ampFilter);
                    ampFilter.connect(gain);
                    gain.connect(guitarBus);

                    source.start(startTime);
                };

                    // Fraseado mais relaxado e melódico
                    const scheduleJazzGuitar = (startTime, beatDur) => {
                        if (config.guitar <= 0) return;

                        // 30% de silêncio para a música respirar
                        if (Math.random() < 0.3) return;

                        const swingSec = config.swing / 1000;
                        const patterns = [
                            [0.5, 1.5, 2.5],
                            [0.0, 1.5, 2.0],
                            [1.0, 1.5, 2.5, 3.0],
                            [0.5, 2.0]
                        ];
                        const pattern = patterns[Math.floor(Math.random() * patterns.length)];

                        pattern.forEach((beatPos, i) => {
                            // Passos curtos (máximo 1 ou 2 notas de distância)
                            const step = Math.floor(Math.random() * 3) - 1;
                            lastGuitarIdx = Math.max(0, Math.min(jazzScale.length - 1, lastGuitarIdx + step));
                            const freq = jazzScale[lastGuitarIdx];

                            const isOffbeat = (beatPos % 1) !== 0;
                            const noteTime = startTime + (beatPos * beatDur) + (isOffbeat ? swingSec : 0);
                            const nextBeat = pattern[i + 1] !== undefined ? pattern[i + 1] : 4.2;
                            const noteDur = Math.max(0.5, (nextBeat - beatPos) * beatDur * 1.1);

                            const vel = config.guitar * (0.8 + Math.random() * 0.25);
                            playGuitarNote(freq, noteTime, noteDur, vel);
                        });
                    };

                    // --- BATERIA ---
                    const playKick = (time, vol) => {
                        if (vol <= 0) return;
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        const filter = audioCtx.createBiquadFilter();

                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(115, time);
                        osc.frequency.exponentialRampToValueAtTime(42, time + 0.11);

                        filter.type = 'lowpass';
                        filter.frequency.value = 160;

                        gain.gain.setValueAtTime(vol, time);
                        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

                        osc.connect(filter);
                        filter.connect(gain);
                        gain.connect(masterGain);
                        osc.start(time);
                        osc.stop(time + 0.3);
                    };

                    const playSnare = (time, vol) => {
                        if (vol <= 0) return;
                        const noise = audioCtx.createBufferSource();
                        noise.buffer = drumNoiseBuffer;

                        const filter = audioCtx.createBiquadFilter();
                        filter.type = 'bandpass';
                        filter.frequency.value = 1400;
                        filter.Q.value = 0.8;

                        const noiseGain = audioCtx.createGain();
                        noiseGain.gain.setValueAtTime(vol, time);
                        noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);

                        noise.connect(filter);
                        filter.connect(noiseGain);
                        noiseGain.connect(masterGain);

                        const body = audioCtx.createOscillator();
                        const bodyGain = audioCtx.createGain();
                        body.type = 'triangle';
                        body.frequency.setValueAtTime(185, time);
                        body.frequency.exponentialRampToValueAtTime(120, time + 0.08);

                        bodyGain.gain.setValueAtTime(vol * 0.6, time);
                        bodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

                        body.connect(bodyGain);
                        bodyGain.connect(masterGain);

                        noise.start(time);
                        noise.stop(time + 0.18);
                        body.start(time);
                        body.stop(time + 0.12);
                    };

                    const playHiHat = (time, vol) => {
                        if (vol <= 0) return;
                        const noise = audioCtx.createBufferSource();
                        noise.buffer = drumNoiseBuffer;

                        const filter = audioCtx.createBiquadFilter();
                        filter.type = 'highpass';
                        filter.frequency.value = 6500;

                        const gain = audioCtx.createGain();
                        gain.gain.setValueAtTime(vol, time);
                        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.045);

                        noise.connect(filter);
                        filter.connect(gain);
                        gain.connect(masterGain);
                        noise.start(time);
                        noise.stop(time + 0.05);
                    };

                    const scheduleDrumBar = (startTime, beatDur) => {
                        const swingSec = config.swing / 1000;

                        for (let i = 0; i < 8; i++) {
                            const isOffbeat = i % 2 === 1;
                            const hatTime = startTime + (i * beatDur * 0.5) + (isOffbeat ? swingSec : 0);
                            playHiHat(hatTime, isOffbeat ? config.hat * 0.6 : config.hat);
                        }

                        playKick(startTime, config.kick);
                        playKick(startTime + (beatDur * 2.5) + swingSec, config.kick * 0.85);
                        if (Math.random() > 0.4) {
                            playKick(startTime + (beatDur * 1.75), config.kick * 0.5);
                        }

                        playSnare(startTime + beatDur + 0.015, config.snare);
                        playSnare(startTime + (beatDur * 3) + 0.015, config.snare);
                    };

                    // --- ACORDES & BAIXO ---
                    const playWarmNote = (freq, startTime, duration, volume) => {
                        if (volume <= 0) return;
                        const osc1 = audioCtx.createOscillator();
                        const osc2 = audioCtx.createOscillator();
                        const lfo = audioCtx.createOscillator();
                        const lfoGain = audioCtx.createGain();
                        const filter = audioCtx.createBiquadFilter();
                        const gain = audioCtx.createGain();

                        osc1.type = 'triangle';
                        osc2.type = 'sine';
                        osc1.frequency.setValueAtTime(freq, startTime);
                        osc2.frequency.setValueAtTime(freq * 2, startTime);
                        osc2.detune.setValueAtTime((Math.random() - 0.5) * 8, startTime);

                        lfo.frequency.setValueAtTime(0.4 + Math.random() * 0.4, startTime);
                        lfoGain.gain.setValueAtTime(4, startTime);
                        lfo.connect(lfoGain);
                        lfoGain.connect(osc1.detune);

                        filter.type = 'lowpass';
                        filter.frequency.setValueAtTime(config.filter, startTime);
                        filter.frequency.exponentialRampToValueAtTime(Math.max(150, config.filter * 0.33), startTime + duration);

                        gain.gain.setValueAtTime(0.0001, startTime);
                        gain.gain.linearRampToValueAtTime(volume, startTime + 0.15 + Math.random() * 0.15);
                        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

                        const osc2Gain = audioCtx.createGain();
                        osc2Gain.gain.value = 0.2;

                        osc1.connect(filter);
                        osc2.connect(osc2Gain);
                        osc2Gain.connect(filter);
                        filter.connect(gain);
                        gain.connect(masterGain);

                        osc1.start(startTime);
                        osc2.start(startTime);
                        lfo.start(startTime);
                        osc1.stop(startTime + duration);
                        osc2.stop(startTime + duration);
                        lfo.stop(startTime + duration);
                    };

                    const playBass = (freq, startTime, duration) => {
                        if (config.bass <= 0) return;
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        const filter = audioCtx.createBiquadFilter();

                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, startTime);

                        filter.type = 'lowpass';
                        filter.frequency.value = 180;

                        gain.gain.setValueAtTime(0.0001, startTime);
                        gain.gain.linearRampToValueAtTime(config.bass, startTime + 0.25);
                        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

                        osc.connect(filter);
                        filter.connect(gain);
                        gain.connect(masterGain);
                        osc.start(startTime);
                        osc.stop(startTime + duration);
                    };

                    const playBar = () => {
                        if (!isAudioPlaying || !audioCtx) return;

                        const current = chords[chordIdx];
                        const now = audioCtx.currentTime;
                        const beatDur = 60 / config.bpm;
                        const barDuration = beatDur * 4;

                        scheduleDrumBar(now, beatDur);
                        playBass(current.root, now, barDuration + 0.2);

                        current.notes.forEach((freq, i) => {
                            const strumDelay = i * (0.04 + Math.random() * 0.02);
                            playWarmNote(freq, now + strumDelay, barDuration - strumDelay + 0.2, config.chords);
                        });

                        // Guitarra jazz a improvisar por cima
                        scheduleJazzGuitar(now, beatDur);

                        chordIdx = (chordIdx + 1) % chords.length;
                        chordTimer = setTimeout(playBar, barDuration * 1000);
                    };

                    startVinylNoise();
                    playBar();
                }

                // --- OSCILOSCÓPIO ---
                function drawIdleLine() {
                    if (!ctx || !canvas) return;
                    ctx.fillStyle = '#0d0d0d';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.strokeStyle = 'rgba(200, 168, 130, 0.25)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(0, canvas.height / 2);
                    ctx.lineTo(canvas.width, canvas.height / 2);
                    ctx.stroke();
                }

                function drawOscilloscope() {
                    if (!isAudioPlaying || !analyser || !ctx || !canvas) return;

                    animFrameId = requestAnimationFrame(drawOscilloscope);

                    const bufferLength = analyser.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);
                    analyser.getByteTimeDomainData(dataArray);

                    ctx.fillStyle = 'rgba(13, 13, 13, 0.35)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.strokeStyle = 'rgba(200, 168, 130, 0.12)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(0, canvas.height / 2);
                    ctx.lineTo(canvas.width, canvas.height / 2);
                    ctx.stroke();

                    ctx.lineWidth = 1.8;
                    ctx.strokeStyle = '#c8a882';
                    ctx.shadowColor = '#c8a882';
                    ctx.shadowBlur = 6;

                    ctx.beginPath();
                    const sliceWidth = canvas.width / bufferLength;
                    let x = 0;

                    for (let i = 0; i < bufferLength; i++) {
                        const v = dataArray[i] / 128.0;
                        const y = (v * canvas.height) / 2;

                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);

                        x += sliceWidth;
                    }

                    ctx.lineTo(canvas.width, canvas.height / 2);
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }

                // --- BOTÃO PLAY / STOP ---
                function handleToggleAudio() {
                    const toggleBtn1 = document.getElementById('toggleBtn');
                    const toggleBtn2 = document.getElementById('toggle-lofi-btn');

                    if (!isAudioPlaying) {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                        masterGain = audioCtx.createGain();
                        masterGain.gain.value = config.master;

                        analyser = audioCtx.createAnalyser();
                        analyser.fftSize = 1024;

                        masterGain.connect(analyser);
                        analyser.connect(audioCtx.destination);

                        isAudioPlaying = true;
                        window.isAudioPlaying = true;

                        if (toggleBtn1) {
                            toggleBtn1.textContent = '■ STOP';
                            toggleBtn1.classList.add('active');
                        }
                        if (toggleBtn2) {
                            toggleBtn2.innerHTML = '<span class="btn-icon">■</span> LO-FI PLAYING';
                            toggleBtn2.classList.add('sys-btn-active');
                        }

                        playLofiChordProgression();
                        drawOscilloscope();
                    } else {
                        isAudioPlaying = false;
                        window.isAudioPlaying = false;
                        clearTimeout(chordTimer);
                        cancelAnimationFrame(animFrameId);
                        if (vinylSource) {
                            try { vinylSource.stop(); } catch (e) { }
                        }
                        if (audioCtx) {
                            try { audioCtx.close(); } catch (e) { }
                        }

                        drawIdleLine();

                        if (toggleBtn1) {
                            toggleBtn1.textContent = '▶ PLAY';
                            toggleBtn1.classList.remove('active');
                        }
                        if (toggleBtn2) {
                            toggleBtn2.innerHTML = '<span class="btn-icon">▶</span> LO-FI CHILL';
                            toggleBtn2.classList.remove('sys-btn-active');
                        }
                    }
                }

                // Global exports
                window.initLofiAudio = initConfigAndOscilloscope;
                window.handleToggleAudio = handleToggleAudio;
                window.playLofiChordProgression = playLofiChordProgression;
                window.config = config;
                window.isAudioPlaying = false;
