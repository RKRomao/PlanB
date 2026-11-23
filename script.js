/**
 * PLAN B // CYBERCAFÉ & HACKER LOUNGE
 * Interactive Engine: Lo-Fi Web Audio Synthesizer, Terminal CLI,
 * Dynamic Menu Filtering, ASCII Animations, Merch Handlers and Booking.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSteamAnimation();
    initMenu();
    initMerchTabs();
    initMousepadToggle();
    initTerminal();
    initLofiAudio();
    initCrtToggle();
    initTelemetrySimulation();
    initGlitchTransition();
    initBunkerLogs();
});

/* ==========================================================================
   1. ASCII STEAM ANIMATION (CHÁVENA DE CAFÉ FUMEGANTE)
   ========================================================================== */
function initSteamAnimation() {
    const steamCup = document.getElementById('steaming-cup');
    if (!steamCup) return;

    const steamFrames = [
        `       (  )   (   )  )
        ) (   )  (  (
        ( )  (    ) )
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`,

        `        ) (   )  (  (
       (   ) (  )  ) )
        ) (   (    (
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`,

        `       (   )  ( )  ( )
        ( (    ) (   )
         ) )  (   ) (
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`,

        `         ) )   (   ( )
        ( (   ( )   ) )
         ) )   ) (   (
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`,

        `        (   (   )   (
         ) ) ) ( ) ( )
        ( ( (   ( ( (
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`,

        `       ( )   ( )   ) )
        ) (   ) ( ( (
       (   ) (   ) ) )
       ._____________.
      <_______________> ===.
      |               |  | |
      |   P L A N   B |  | |
      |   CYBERCAFÉ   |__/_/
      |   ESPRESSO    |===='
      \\_______________/
       \`-------------'`
    ];

    let currentFrame = 0;
    setInterval(() => {
        currentFrame = (currentFrame + 1) % steamFrames.length;
        steamCup.textContent = steamFrames[currentFrame];
    }, 420);
}

/* ==========================================================================
   2. LO-FI WEB AUDIO SYNTHESIZER (MOVIDO PARA FICHEIRO AUTÓNOMO: lofi-audio.js)
   ========================================================================== */
// Ver lofi-audio.js para a progressão harmónica, bateria e emulador de vinil.

/* ==========================================================================
   3. BASE DE DADOS E RENDERIZAÇÃO DO MENU
   ========================================================================== */
const menuData = [
    {
        id: "m1",
        category: "pastry",
        title: "Pão de Ló Tradicional (Sem Recheio)",
        price: "€ 4.20",
        desc: "Massa pura, incrivelmente fofa, leve e arejada, sem qualquer recheio. Receita clássica secular com ovos, açúcar e farinha.",
        badge: "ESPECIALIDADE",
        tech: "BAKED_DAILY: 08h | 14h"
    },
    {
        id: "m2",
        category: "pastry",
        title: "Mil-Folhas de Café Especial",
        price: "€ 4.80",
        desc: "Camadas ultracrocantes caramelizadas com creme pasteleiro de infusão arábica e cacau 80%. Especialidade da casa.",
        badge: "ASSINATURA",
        tech: "INFUSÃO: 24h cold-steep"
    },
    {
        id: "m3",
        category: "coffee",
        title: "Terminal Espresso (Single Origin)",
        price: "€ 1.80",
        desc: "Grãos arábica etíopes torrados semanalmente. Notas de jasmim, mirtilo e acidez equilibrada.",
        badge: "ESPRESSO",
        tech: "EXTRACTION: 9 bar / 27s"
    },
    {
        id: "m4",
        category: "coffee",
        title: "Cold Brew [DAEMON] 18h",
        price: "€ 3.60",
        desc: "Café extraído lentamente em água filtrada a frio. Doce, sedoso, corpo denso sem amargor.",
        badge: "SLOW BREW",
        tech: "SLOW_PROCESS: 18 HORAS"
    },
    {
        id: "m5",
        category: "coffee",
        title: "Lo-Fi Flat White (127.0.0.1)",
        price: "€ 3.20",
        desc: "Ristretto duplo coberto com microespuma sedosa de leite gordo biológico ou leite de aveia barista.",
        badge: "LATTE ART",
        tech: "STEAM_TEMP: 62°C"
    },
    {
        id: "m6",
        category: "coffee",
        title: "Chemex / V60 Pour Over",
        price: "€ 3.90",
        desc: "Método de filtro limpo para destacar as notas florais mais subtis dos nossos micro-lotes.",
        badge: "SLOW DRIP",
        tech: "RATIO: 1:16 / 93°C"
    },
    {
        id: "m7",
        category: "tea",
        title: "Matcha Matrix Cerimonial",
        price: "€ 4.00",
        desc: "Matcha biológico de Uji batido com chasen tradicional e servido com leite de aveia aveludado.",
        badge: "UJI JAPAN",
        tech: "ANTIOXIDANT: MAX"
    },
    {
        id: "m8",
        category: "tea",
        title: "Earl Grey & Lavanda [ROOT]",
        price: "€ 2.80",
        desc: "Chá preto encorpado perfumado com óleo natural de bergamota da Calábria e botões de alfazema.",
        badge: "INFUSÃO",
        tech: "STEEP_TIME: 4 MIN"
    },
    {
        id: "m9",
        category: "pastry",
        title: "Biscoitos ASCII Cardamomo",
        price: "€ 2.50",
        desc: "Dueto de bolachas amanteigadas artesanais carimbadas com caracteres ASCII e canela do Ceilão.",
        badge: "SNACK",
        tech: "CRUNCH_LEVEL: 100%"
    },
    {
        id: "m10",
        category: "bites",
        title: "Tosta Hacker Sourdough & Avocado",
        price: "€ 6.50",
        desc: "Pão de fermentação lenta de 48h, pasta de abacate fresco, dukkah artesanal e azeite virgem transmontano.",
        badge: "LIGHT MEAL",
        tech: "FERMENTAÇÃO: 48 HORAS"
    },
    {
        id: "m11",
        category: "bites",
        title: "Sandwich Focaccia & Queijo Curado",
        price: "€ 6.90",
        desc: "Focaccia de alecrim grelhada com queijo da Serra curado, rúcula selvagem e pasta de tomate seco.",
        badge: "HOT TOAST",
        tech: "SERVIDO: QUENTE"
    },
    {
        id: "m12",
        category: "pastry",
        title: "Brownie Fudge Café & Nozes",
        price: "€ 3.50",
        desc: "Chocolate belga 70%, infusão de café expresso e nozes tostadas com textura húmida e rica.",
        badge: "CHOCOLATE",
        tech: "CACAO: 70% PUR"
    }
];

function initMenu() {
    const grid = document.getElementById('menu-items-grid');
    const tabs = document.querySelectorAll('.menu-tab-btn');
    if (!grid) return;

    function renderItems(filter = 'all') {
        grid.innerHTML = '';
        const filtered = filter === 'all'
            ? menuData
            : menuData.filter(item => item.category === filter);

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div>
                    <div class="menu-card-top">
                        <h4 class="menu-item-title">${item.title}</h4>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                </div>
                <div class="menu-card-bottom">
                    <span class="item-badge">&gt; ${item.badge}</span>
                    <span class="item-tech-note">${item.tech}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderItems('all');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderItems(tab.getAttribute('data-category'));
        });
    });
}

/* ==========================================================================
   4. EMULADOR DE TERMINAL CLI
   ========================================================================== */
function initTerminal() {
    const termScreen = document.getElementById('terminal-screen');
    const termInput = document.getElementById('terminal-input');
    const termForm = document.getElementById('terminal-form');
    const quickBtns = document.querySelectorAll('.quick-btn');

    if (!termScreen || !termInput || !termForm) return;

    function appendLine(text, type = 'output') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.innerHTML = text;
        termScreen.appendChild(line);
        termScreen.scrollTop = termScreen.scrollHeight;
    }

    const commandRegistry = {
        help: () => {
            return `Comandos disponíveis no PLAN B Terminal:<br>
  - <span class="highlight-cmd">covilha</span>   : Espaços e detalhes do Hub UBI na Covilhã<br>
  - <span class="highlight-cmd">spaces</span>    : Arquitetura e detalhes visuais dos espaços do cybercafé<br>
  - <span class="highlight-cmd">specials</span>  : Revela as duas grandes especialidades doces<br>
  - <span class="highlight-cmd">paodelo</span>   : Detalhes do Pão de Ló tradicional (sem recheio)<br>
  - <span class="highlight-cmd">milfolhas</span> : Detalhes do Mil-Folhas de Café de Especialidade<br>
  - <span class="highlight-cmd">merch</span>     : Catálogo da linha de vestuário e acessórios geek<br>
  - <span class="highlight-cmd">locations</span> : Levantamento de espaços para aluguer (Covilhã, Porto, Lisboa)<br>
  - <span class="highlight-cmd">budget</span>    : Orçamento de investimento inicial (CapEx & OpEx)<br>
  - <span class="highlight-cmd">menu</span>      : Listagem rápida dos destaques da cafetaria<br>
  - <span class="highlight-cmd">wifi</span>      : Informações de rede e conectividade<br>
  - <span class="highlight-cmd">lofi</span>      : Estado e ativação do som ambiente lo-fi<br>
  - <span class="highlight-cmd">matrix</span>    : Visualização de telemetria das estações hacker<br>
  - <span class="highlight-cmd">bastidores</span>: Acesso direto ao bunker de hacking e formações<br>
  - <span class="highlight-cmd">clear</span>     : Limpa a tela do terminal`;
        },
        bastidores: () => {
            const btn = document.getElementById('btn-bastidores');
            if (btn) {
                setTimeout(() => btn.click(), 400);
                return `<span style="color:#ff5555;font-weight:bold;">[!] SEQUÊNCIA DE BREACH INICIADA... Aceder aos bastidores.</span>`;
            } else {
                return `Aceder a: <a href="bastidores.html" style="color:var(--amber-bright);">&gt; bastidores.html</a>`;
            }
        },
        bunker: () => commandRegistry.bastidores(),
        spaces: () => {
            return `=== ARQUITETURA & VISUAL DOS ESPAÇOS PLAN B ===<br>
[01] <strong>BALCÃO DE CAFÉ & PASTELARIA</strong>: Nogueira maciça, latão, La Marzocco Linea PB e vitrine doce.<br>
[02] <strong>HACKER WORKSTATIONS</strong>: Monitores 4K foscos, teclados mecânicos compactos e tomadas USB-C PD 100W.<br>
[03] <strong>LO-FI VINYL LOUNGE</strong>: Poltronas em couro conhaque, gira-discos Pro-Ject, fones Sennheiser e ecrã CRT âmbar.<br>
[04] <strong>BASTIDORES (BUNKER)</strong>: Estilo industrial & street, betão cru, War Room Red Team, bancada maker e racks de servidores.`;
        },
        visual: () => commandRegistry.spaces(),
        specials: () => {
            return `=== DUAS GRANDES ESPECIALIDADES DO PLAN B ===<br>
[01] <strong>PÃO DE LÓ TRADICIONAL (SEM RECHEIO)</strong> (€ 4.20)<br>
     Receita clássica secular, massa pura, fofa, leve e arejada, sem recheio.<br>
[02] <strong>MIL-FOLHAS DE CAFÉ DE ESPECIALIDADE</strong> (€ 4.80)<br>
     Massa folhada caramelizada estaladiça com creme pasteleiro de café Arábica 24h e cacau puro.`;
        },
        paodelo: () => {
            return `[DOCE_01] <strong>PÃO DE LÓ TRADICIONAL (SEM RECHEIO)</strong><br>
Ingredientes: Ovos inteiros bem batidos, açúcar fino e farinha de trigo peneirada. Sem recheio nem cremes.<br>
Ponto: Massa extremamente leve, fofa, arejada e dourada à moda tradicional.<br>
Harmonização ideal: Expresso duplo etíope ou Flat White quente.`;
        },
        milfolhas: () => {
            return `[DOCE_02] <strong>MIL-FOLHAS DE CAFÉ</strong><br>
Ingredientes: Folhado com manteiga DOP dos Açores, infusão a frio de café Bourbon Vermelho, vagem de baunilha.<br>
Ponto: Máxima crocância e creme aveludado sem excesso de açúcar.<br>
Harmonização ideal: Cold brew de 18 horas ou Chemex.`;
        },
        merch: () => {
            return `--- CATÁLOGO OFICIAL DE MERCHANDISING PLAN B (15 ITENS) ---<br>
&bull; <strong>Hoodies 450 gsm:</strong> Castanho Torrado &middot; Preto Obsidiana (€ 58.00)<br>
&bull; <strong>T-Shirts 240 gsm:</strong> HTTP 418 Teapot &middot; Stack Overflow (€ 28.00)<br>
&bull; <strong>Cerâmica Artesanal:</strong> Caneca "Spec Brew" Barcelos 350ml (€ 19.00)<br>
&bull; <strong>Desk Mat XXL:</strong> Terminal Grid 900x400 (Vista interativa: limpo vs com setup) (€ 32.00)<br>
&bull; <strong>Tech & Audio:</strong> Teclado Mecânico Hot-Swap (€ 120.00) &middot; Auscultadores Lo-Fi (€ 85.00)<br>
&bull; <strong>Pins & Broches:</strong> Pack Café & Lo-Fi &middot; Pack Hacker Edition (€ 14.00)<br>
&bull; <strong>Papelaria & Leituras:</strong> Caderno Linho &middot; Lab Notes Dark &middot; Livro "Sobrevivência Tecnológica & Foco" (€ 18 - € 22)<br>
&bull; <strong>Autocolantes Vinil Mate:</strong> Pack Café &middot; Pack Hacker Terminal (€ 6.00)`;
        },
        covilha: () => {
            return `=== PLAN B // POLO COVILHÃ (UBI TECH HUB) ===<br>
[01] <strong>PÓLO I UBI / MARQUÊS D'ÁVILA</strong> (€ 750/mês &middot; 160 m²)<br>
     Em frente à Reitoria e Dep. de Informática da UBI.<br>
     Paredes de cantaria de granito, pé-direito alto, chaminé desobstruída.<br>
     Contrato: 3-5 anos &middot; Caução: 2 meses (€ 1.500) &middot; 3 meses de carência.<br>
     &gt; <a href="https://maps.google.com/?q=Rua+Marqu%C3%AAs+d%27%C3%81vila+e+Bolama+Covilh%C3%A3" target="_blank" style="color:var(--amber-bright);">[📍 Ver no Google Maps]</a><br>
[02] <strong>COMPLEXO DA GOLDRA / AV. UNIVERSIDADE</strong> (€ 850/mês &middot; 180 m²)<br>
     Junto ao elevador da Goldra e residências da UBI.<br>
     Montra panorâmica sobre o vale da serra, estacionamento amplo.<br>
     &gt; <a href="https://maps.google.com/?q=Avenida+da+Universidade+Elevador+da+Goldra+Covilh%C3%A3" target="_blank" style="color:var(--amber-bright);">[📍 Ver no Google Maps]</a><br>
<strong>Vantagem estratégica na Covilhã:</strong> Rendas 65% mais baixas que Porto/Lisboa, invernos com neve na serra que criam enorme procura por café quente e pão de ló morno, e milhares de futuros engenheiros de software da UBI!`;
        },
        locations: () => {
            return `--- ESTUDO DE LOCALIZAÇÕES PARA ALUGUER ---<br>
[COVILHÃ] <strong>Pólo I UBI</strong>: 160 m² &middot; € 750/mês &middot; <a href="https://maps.google.com/?q=Rua+Marqu%C3%AAs+d%27%C3%81vila+e+Bolama+Covilh%C3%A3" target="_blank" style="color:var(--amber-bright);">[📍 Maps]</a><br>
[COVILHÃ] <strong>Goldra / UBI</strong>: 180 m² &middot; € 850/mês &middot; <a href="https://maps.google.com/?q=Avenida+da+Universidade+Elevador+da+Goldra+Covilh%C3%A3" target="_blank" style="color:var(--amber-bright);">[📍 Maps]</a><br>
[PORTO] <strong>Bonfim / 24 de Agosto</strong>: 165 m² &middot; € 2.100/mês &middot; <a href="https://maps.google.com/?q=Rua+do+Bonfim+Campo+24+de+Agosto+Porto" target="_blank" style="color:var(--amber-bright);">[📍 Maps]</a><br>
[PORTO] <strong>Asprela (FEUP/ISEP)</strong>: 160 m² &middot; € 1.950/mês &middot; <a href="https://maps.google.com/?q=Rua+Dr.+Roberto+Frias+Paranhos+Porto" target="_blank" style="color:var(--amber-bright);">[📍 Maps]</a><br>
[LISBOA] <strong>Hub Beato / Marvila</strong>: 180 m² &middot; € 3.200/mês &middot; <a href="https://maps.google.com/?q=Hub+Criativo+do+Beato+Rua+da+Manuten%C3%A7%C3%A3o+Lisboa" target="_blank" style="color:var(--amber-bright);">[📍 Maps]</a>`;
        },
        locais: () => commandRegistry.locations(),
        budget: () => {
            return `--- AUDITORIA DE INVESTIMENTO (CAPEX ESPAÇO 150m²) ---<br>
1. Obras, Fit-Out & Acústica Nogueira : € 39.700<br>
2. Cafetaria Especialidade (La Marzocco): € 31.790<br>
3. Infraestrutura Tech & Monitores 4K  : € 24.480<br>
4. Mobiliário Lo-Fi & Sofás Couro     : € 21.040<br>
5. Stock Inicial, Embalagens & Merch   : € 10.150<br>
6. Fundo de Reserva / Contingência     : € 10.170<br>
-------------------------------------------------<br>
<strong>TOTAL CAPEX: € 137.330</strong> | OpEx Mensal: ~€ 10.520/mês | Payback: 18-24 meses`;
        },
        orcamento: () => commandRegistry.budget(),
        capex: () => commandRegistry.budget(),
        menu: () => {
            return `--- CARTA RÁPIDA PLAN B ---<br>
&bull; Terminal Espresso: € 1.80 | Cold Brew 18h: € 3.60<br>
&bull; Lo-Fi Flat White: € 3.20 | Matcha Matrix: € 4.00<br>
&bull; Pão de Ló Artesanal: € 4.20 | Mil-Folhas de Café: € 4.80<br>
&bull; Tosta Sourdough &amp; Avocado: € 6.50 | Biscoitos ASCII: € 2.50`;
        },
        wifi: () => {
            return `[NET_CONFIG]<br>
SSID: <strong>PLAN_B_GUEST_5GHZ</strong><br>
Banda: 10 Gbps simétrica fibra óptica direta<br>
Isolamento: Client Isolation ativo (AP isolation)<br>
DNS: 1.1.1.1 / 9.9.9.9 com DNS over HTTPS (DoH)`;
        },
        lofi: () => {
            const btn = document.getElementById('toggle-lofi-btn');
            if (btn) btn.click();
            const playing = window.isAudioPlaying || (typeof isAudioPlaying !== 'undefined' && isAudioPlaying);
            return playing ? `[AUDIO] Lo-Fi Beats & Vinyl Crackle ATIVADO.` : `[AUDIO] Lo-Fi soundscape PAUSADO.`;
        },
        matrix: () => {
            return `+-----------------------------------------+<br>
| WORKSTATION TELEMETRY                   |<br>
+-----------------------------------------+<br>
| [NODE_01] Dell 4K 32" / Keychron Q1 : OCUPADO   |<br>
| [NODE_02] Dell 4K 32" / HHKB Pro 2  : LIVRE     |<br>
| [NODE_03] Apple Studio Display      : LIVRE     |<br>
| [NODE_04] Bancada Soldar TS101      : LIVRE     |<br>
| [LOUNGE]  Sofás de Veludo / Vinil   : 4 LUGARES |<br>
+-----------------------------------------+`;
        },
        clear: () => {
            termScreen.innerHTML = '';
            return null;
        }
    };

    function executeCommand(rawCmd) {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        appendLine(`guest@planb:~$ ${rawCmd}`, 'command');

        if (commandRegistry[cmd]) {
            const out = commandRegistry[cmd]();
            if (out) appendLine(out, 'output');
        } else {
            appendLine(`Comando não reconhecido: "${rawCmd}". Digita <span class="highlight-cmd">help</span> para ajuda.`, 'output text-muted');
        }
    }

    termForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = termInput.value;
        if (val) {
            executeCommand(val);
            termInput.value = '';
        }
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            if (cmd) {
                termInput.value = cmd;
                executeCommand(cmd);
            }
        });
    });
}

/* ==========================================================================
   5. CRT TOGGLE
   ========================================================================== */
function initCrtToggle() {
    const btn = document.getElementById('toggle-crt-btn');
    const status = document.getElementById('crt-status');
    if (!btn || !status) return;

    btn.addEventListener('click', () => {
        const body = document.body;
        if (body.classList.contains('crt-effect')) {
            body.classList.remove('crt-effect');
            status.textContent = 'OFF';
        } else {
            body.classList.add('crt-effect');
            status.textContent = 'ON';
        }
    });
}

/* ==========================================================================
   6. TELEMETRIA SIMULADA (PING & UPTIME)
   ========================================================================== */
function initTelemetrySimulation() {
    const pingEl = document.getElementById('ping-display');
    if (!pingEl) return;

    setInterval(() => {
        const randomPing = Math.floor(Math.random() * 8) + 9;
        pingEl.textContent = `${randomPing}ms`;
    }, 4000);
}

/* ==========================================================================
   7. MERCHANDISING TABS FILTERING
   ========================================================================== */
function initMerchTabs() {
    const tabs = document.querySelectorAll('.merch-tab-btn');
    const cards = document.querySelectorAll('#merch-container .merch-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const selectedCat = tab.getAttribute('data-merch-cat');
            cards.forEach(card => {
                if (selectedCat === 'all' || card.getAttribute('data-category') === selectedCat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   8. MOUSE PAD DUAL-VIEW TOGGLE (VAZIO VS. C/ SETUP)
   ========================================================================== */
function initMousepadToggle() {
    const btns = document.querySelectorAll('.pad-view-btn');
    const targetImg = document.getElementById('deskmat-preview-img');
    if (!btns.length || !targetImg) return;

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const newSrc = btn.getAttribute('data-img');
            if (newSrc && targetImg.getAttribute('src') !== newSrc) {
                targetImg.style.opacity = '0.25';
                setTimeout(() => {
                    targetImg.src = newSrc;
                    targetImg.style.opacity = '1';
                }, 130);
            }
        });
    });
}

/* ==========================================================================
   9. WEB AUDIO CYBER SYNTHESIZER & CINEMATIC BREACH SEQUENCE
   ========================================================================== */
function playBreachStartAudio() {
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        const ctx = new AudioCtxClass();
        const now = ctx.currentTime;

        // Sub-bass impact
        const sub = ctx.createOscillator();
        const subGain = ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(85, now);
        sub.frequency.exponentialRampToValueAtTime(25, now + 0.65);
        subGain.gain.setValueAtTime(0.5, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
        sub.connect(subGain);
        subGain.connect(ctx.destination);
        sub.start(now);
        sub.stop(now + 0.65);

        // Electric burst / static crackle
        const bufferSize = Math.floor(ctx.sampleRate * 0.35);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1400, now);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.35, now);
        noiseGain.gain.linearRampToValueAtTime(0.001, now + 0.35);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(now);
    } catch (e) { }
}

function playDataPacketChirp(freq = 1200) {
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        const ctx = new AudioCtxClass();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq + 400, now + 0.05);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
    } catch (e) { }
}

function playBreachSuccessAudio() {
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        const ctx = new AudioCtxClass();
        const now = ctx.currentTime;

        // Heavy relay clunk & sub drop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.55);

        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
    } catch (e) { }
}

function playGlitchSound() {
    playBreachStartAudio();
}

function initGlitchTransition() {
    const backdoorBtn = document.getElementById('btn-bastidores');
    let overlay = document.getElementById('glitch-overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'glitch-overlay';
        overlay.className = 'glitch-overlay';
        document.body.appendChild(overlay);
    }

    if (backdoorBtn) {
        backdoorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            startCinematicBreach(overlay);
        });
    }

    const returnBtn = document.getElementById('btn-retornar-cafe');
    if (returnBtn) {
        returnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            playBreachStartAudio();
            document.body.classList.add('screen-shaking');
            overlay.classList.add('active');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 650);
        });
    }
}

function startCinematicBreach(overlay) {
    playBreachStartAudio();
    document.body.classList.add('screen-shaking');

    // Generate Background Hex Dump
    let hexDump = '';
    const hexChars = '0123456789ABCDEF';
    for (let r = 0; r < 24; r++) {
        let line = '0x' + (r * 16).toString(16).padStart(4, '0') + '  ';
        for (let c = 0; c < 8; c++) {
            line += hexChars[Math.floor(Math.random() * 16)] + hexChars[Math.floor(Math.random() * 16)] + ' ';
        }
        hexDump += line + '\n';
    }

    // Build HUD structure & Loading Video Stage
    overlay.innerHTML = `
        <div class="breach-backdrop"></div>
        <div class="breach-hex-canvas">${hexDump}</div>
        <div class="breach-slice"></div>
        <div class="breach-hud-box" id="breach-hud-modal">
            <div class="breach-header">
                <span class="breach-alert-badge">[ ⚠ UNAUTHORIZED OVERRIDE DETECTED ]</span>
                <span class="breach-target">NODE: BASTIDORES_COVILHA_GATEWAY</span>
            </div>

            <div class="breach-skull-art">
                <pre class="breach-skull-ascii">
    .---.
   /     \\
  | () () |  [!] BREACHING THE MAINFRAME
   \\  ^  /
    |||||    [ SECURITY OVERRIDE IN PROGRESS ]
                </pre>
            </div>

            <div class="breach-terminal-logs" id="breach-console"></div>

            <div class="breach-progress-section">
                <div class="breach-progress-labels">
                    <span>STATUS: INFILTRATING SECURITY PERIMETER</span>
                    <span id="breach-pct-num">0%</span>
                </div>
                <div class="breach-progress-track">
                    <div class="breach-progress-bar" id="breach-progress-bar"></div>
                </div>
            </div>

            <div class="breach-footer-status">
                <span class="pulse-dot">●</span> <code>ESCALATING CLEARANCE LEVEL TO ROOT (UID 0)...</code>
            </div>
        </div>

        <!-- STAGE 2: LOADING VIDEO DOS BASTIDORES -->
        <div class="breach-video-stage" id="breach-video-stage">
            <div class="breach-video-topbar">
                <span>FEED: /dev/video0 // COVILHA_GATEWAY</span>
                <span class="live-badge">● SYS_INIT_OK</span>
            </div>
            <div class="breach-video-frame">
                <video id="breach-loading-vid" class="breach-video-element" playsinline preload="auto">
                    <source src="Loading.mp4" type="video/mp4">
                    <source src="assets/Loading.mp4" type="video/mp4">
                </video>
            </div>
            <button class="breach-video-skip-btn" id="breach-skip-btn" type="button" title="Saltar para os bastidores">
                <span>[ SALTAR // SKIP ]</span> <kbd>ESC / CLIQUE</kbd>
            </button>
        </div>
    `;

    overlay.classList.add('active');

    const consoleBox = document.getElementById('breach-console');
    const progressBar = document.getElementById('breach-progress-bar');
    const pctNum = document.getElementById('breach-pct-num');
    const hudModal = document.getElementById('breach-hud-modal');
    const videoStage = document.getElementById('breach-video-stage');
    const loadingVid = document.getElementById('breach-loading-vid');
    const skipBtn = document.getElementById('breach-skip-btn');

            let navigated = false;
            const completeAndNavigate = () => {
                if (navigated) return;
                navigated = true;
                if (loadingVid) {
                    try { loadingVid.pause(); } catch (e) { }
                }
                overlay.classList.add('crt-beam-collapse');
                setTimeout(() => {
                    window.location.href = 'bastidores.html';
                }, 280);
            };

            // Keyboard shortcut to skip anytime
            const onKeySkip = (e) => {
                if (e.key === 'Escape' || e.code === 'Space' || e.key === 'Enter') {
                    document.removeEventListener('keydown', onKeySkip);
                    completeAndNavigate();
                }
};
document.addEventListener('keydown', onKeySkip);

if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        completeAndNavigate();
    });
}

const breachStages = [
    { time: 100, text: "> [!] INITIATING PERIMETER HANDSHAKE... [ESTABLISHED]", pct: 18, type: "normal", freq: 880 },
    { time: 420, text: "> [*] PROBING RFID / NFC CONTROLLER (MIFARE DESFIRE EV3)... [LOCKED]", pct: 36, type: "warn", freq: 1100 },
    { time: 820, text: "> [>] INJECTING BUFFER OVERFLOW EXPLOIT (CVE-2026-PLANB)...", pct: 60, type: "normal", freq: 1350 },
    { time: 1220, text: "> [✔] BYPASSING HARDWARE FIREWALL & REVERSING FIRMWARE... [SUCCESS]", pct: 82, type: "success", freq: 1600 },
    { time: 1620, text: "> [⚡] ELEVATING PRIVILEGES TO ROOT (UID 0: FOUNDERS)... [GRANTED]", pct: 95, type: "success", freq: 1850 },
    { time: 1980, text: "> [🔓] DISENGAGING MAGNETIC PERIMETER LOCKS... ACCESSING BUNKER.", pct: 100, type: "alert", freq: 2100 }
];

breachStages.forEach(stage => {
    setTimeout(() => {
        if (navigated) return;
        if (consoleBox) {
            const line = document.createElement('div');
            line.className = `breach-log-line ${stage.type}`;
            line.textContent = stage.text;
            consoleBox.appendChild(line);
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }

        if (progressBar) progressBar.style.width = `${stage.pct}%`;
        if (pctNum) pctNum.textContent = `${stage.pct}%`;

        if (stage.pct === 100) {
            playBreachSuccessAudio();
        } else {
            playDataPacketChirp(stage.freq);
        }
    }, stage.time);
});

// When breach HUD completes, launch the Loading Video
setTimeout(() => {
    if (navigated) return;
    document.body.classList.remove('screen-shaking');

    if (hudModal) {
        hudModal.classList.add('crt-beam-collapse');
        setTimeout(() => {
            hudModal.style.display = 'none';
        }, 300);
    }

        if (videoStage && loadingVid) {
            videoStage.classList.add('visible');

            // Video lifecycle events
            loadingVid.addEventListener('ended', completeAndNavigate);
            loadingVid.addEventListener('error', completeAndNavigate);

            // Clicking on video stage also skips smoothly
            videoStage.addEventListener('click', completeAndNavigate, { once: true });

            // Start video playback
            const playPromise = loadingVid.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    loadingVid.muted = true;
                    loadingVid.play().catch(completeAndNavigate);
                });
            }

            // Safety timeout (video is ~10s, redirect at ~11.2s max if stuck)
            setTimeout(() => {
                if (!navigated) {
                    completeAndNavigate();
                }
            }, 11200);
        } else {
            completeAndNavigate();
        }
    }, 2300);
}

/* ==========================================================================
   10. SIMULAÇÃO DE TELEMETRIA DO BUNKER (BASTIDORES.HTML)
   ========================================================================== */
function initBunkerLogs() {
    const logBox = document.getElementById('bunker-live-logs');
    if (!logBox) return;

    const mockLogs = [
        { text: "[SDR_433MHz] Pacote decodificado: Manchester-encoded 32-bit payload capturado.", type: "normal" },
        { text: "[HARDWARE_BENCH] Analisador lógico Saleae: Bus SPI flash W25Q128 lido com sucesso (16MB).", type: "normal" },
        { text: "[CTF_RADAR] Nova challenge libertada em HackTheBox: 'Kernel_Panick_PaoDeLo'. Red Team convocada.", type: "warn" },
        { text: "[IDS_SNORT] Alerta: Varredura TCP SYN detectada na VLAN_LAB_09 via 10.240.0.12.", type: "alert" },
        { text: "[CAFFEINE_FEED] Shot de espresso Bourbon Vermelho (9.2 bar / 27s) extraído com sucesso.", type: "normal" },
        { text: "[TOR_RELAY] Relay 'PlanBCovilhaRelay' operacional com largura de banda de 480 Mbps.", type: "normal" },
        { text: "[GHIDRA_DECOMPILER] Análise de rotina criptográfica concluída: S-Box AES customizada identificada.", type: "warn" },
        { text: "[BUNKER_SECURITY] Fechadura RFID da porta interna destrancada via token TOTP autorizado.", type: "normal" }
    ];

    let index = 0;
    setInterval(() => {
        const item = mockLogs[index % mockLogs.length];
        const line = document.createElement('div');
        line.className = `bunker-log-line ${item.type}`;
        const time = new Date().toTimeString().split(' ')[0];
        line.textContent = `[${time}] ${item.text}`;
        logBox.appendChild(line);
        logBox.scrollTop = logBox.scrollHeight;
        index++;
    }, 3200);
}



