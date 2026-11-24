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
    initCtfConsoleBanner();
    initCtfChallenge();
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
  - <span class="highlight-cmd">wifi</span>      : Informações de rede e cabeçalho HTTP capturado<br>
  - <span class="highlight-cmd">ctf</span>       : Regras e pistas do Desafio da Flag dos Bastidores<br>
  - <span class="highlight-cmd">flag &lt;code&gt;</span>: Validação da flag para 50% de desconto e credencial<br>
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
SSID: <strong>PLAN_B_GUEST_5GHZ</strong> (10 Gbps Fibra UBI)<br>
Gateway: 10.42.0.1 | Portal Cativo com Client Isolation<br>
DNS: 1.1.1.1 / 9.9.9.9 com DNS over HTTPS (DoH)<br><br>
<span style="color:var(--amber-bright);font-weight:bold;">[!] PACOTE HTTP INTERCEPTADO NO CABEÇALHO DO GATEWAY:</span><br>
<code style="color:#6ee7b7;display:block;background:rgba(0,0,0,0.6);padding:0.5rem 0.8rem;border-left:3px solid var(--accent-cyan);margin-top:0.3rem;">
HTTP/1.1 200 OK<br>
Server: PlanB-Daemon/1.33.7 (Covilhã Hub)<br>
X-Challenge: "O Desafio da Flag dos Bastidores"<br>
X-Cipher-Pipeline: Base64 -&gt; ROT13<br>
X-Packet-Payload: <strong>YzQwX3EzX3kwX2Zyel9lcnB1cnZiXzEzMzc=</strong>
</code><br>
Dica: Decifra o payload acima e valida com: <span class="highlight-cmd">flag FLAG{...}</span>`;
        },
        ctf: () => {
            return `=== PLAN B // O DESAFIO DA FLAG (CTF DOS BASTIDORES) ===<br>
Para entrar nos Bastidores e aceder às turmas restritas com 50% de desconto:<br>
1. Intercepta o pacote nos cabeçalhos HTTP da rede (executa <span class="highlight-cmd">wifi</span> ou inspeciona a consola F12).<br>
2. O payload está codificado com uma cifra clássica dupla: <strong>Base64</strong> seguido de <strong>ROT13</strong>.<br>
3. Quando obtiveres a frase secreta, envia no terminal: <span class="highlight-cmd">flag FLAG{frase_aqui}</span><br>
4. Se a flag for válida, a tua credencial oficial e voucher de 50% abrem no ecrã!`;
        },
        challenge: () => commandRegistry.ctf(),
        flag: async (argStr) => {
            if (!argStr) {
                return `[CTF // DESAFIO DA FLAG]<br>Sintaxe: <span class="highlight-cmd">flag &lt;TUA_FLAG&gt;</span> (Ex: <code>flag FLAG{...}</code>)<br>Executa <span class="highlight-cmd">wifi</span> ou abre a consola do browser (F12) para ver o pacote capturado.`;
            }
            const res = await verifyFlagAndUnlock(argStr);
            if (res.success) {
                return `<span style="color:#6ee7b7;font-weight:bold;">[★] ACESSO AUTORIZADO // FLAG VÁLIDA: ${res.flag}</span><br>
Status: Credencial oficial de aluno desbloqueada!<br>
Benefício: <strong>50% de desconto</strong> na bancada maker e formações.<br>
<span style="color:var(--amber-bright);">[!] A abrir credencial no ecrã... Voucher: <strong>FLAG-BASTIDORES-1337</strong></span>`;
            } else {
                return `<span style="color:#ff5555;font-weight:bold;">[x] ACESSO NEGADO: Flag incorreta ou corrompida.</span><br>
Dica: Decifra o payload do cabeçalho HTTP: Base64 decode -&gt; ROT13 decode. Formato esperado: <code>FLAG{...}</code>`;
            }
        },
        submit: async (argStr) => commandRegistry.flag(argStr),
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

    async function executeCommand(rawCmd) {
        const trimmed = rawCmd.trim();
        if (!trimmed) return;

        appendLine(`guest@planb:~$ ${rawCmd}`, 'command');

        const parts = trimmed.split(/\s+/);
        const baseCmd = parts[0].toLowerCase();
        const argStr = trimmed.slice(baseCmd.length).trim();

        if (commandRegistry[baseCmd]) {
            const out = await commandRegistry[baseCmd](argStr, parts.slice(1));
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
function playCinematicGlitchSound() {
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        const ctx = new AudioCtxClass();
        const now = ctx.currentTime;

        // 1. Massive Reese Sub-Bass Impact (Dark Cyber Drone)
        const sub1 = ctx.createOscillator();
        const sub2 = ctx.createOscillator();
        const subGain = ctx.createGain();
        const subFilter = ctx.createBiquadFilter();

        sub1.type = 'sawtooth';
        sub2.type = 'sawtooth';
        // Detune by 4Hz for aggressive beating reese texture
        sub1.frequency.setValueAtTime(55, now);
        sub1.frequency.exponentialRampToValueAtTime(18, now + 0.85);
        sub2.frequency.setValueAtTime(51, now);
        sub2.frequency.exponentialRampToValueAtTime(17, now + 0.85);

        subFilter.type = 'lowpass';
        subFilter.frequency.setValueAtTime(450, now);
        subFilter.frequency.exponentialRampToValueAtTime(80, now + 0.85);

        subGain.gain.setValueAtTime(0.55, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        sub1.connect(subFilter);
        sub2.connect(subFilter);
        subFilter.connect(subGain);
        subGain.connect(ctx.destination);

        sub1.start(now);
        sub2.start(now);
        sub1.stop(now + 0.9);
        sub2.stop(now + 0.9);

        // 2. Electric Glitch Discharge / Chopped White Noise Burst (24Hz gating)
        const bufferSize = Math.floor(ctx.sampleRate * 0.7);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const t = i / ctx.sampleRate;
            const gate = (Math.sin(2 * Math.PI * 24 * t) > -0.2) ? 1.0 : 0.04;
            data[i] = (Math.random() * 2 - 1) * gate * Math.exp(-t * 2.2);
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(2800, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(320, now + 0.65);
        noiseFilter.Q.value = 1.8;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.42, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(now);

        // 3. High-Voltage Relay Snap / Mechanical Clunk
        const clack = ctx.createOscillator();
        const clackGain = ctx.createGain();
        clack.type = 'triangle';
        clack.frequency.setValueAtTime(130, now);
        clack.frequency.exponentialRampToValueAtTime(35, now + 0.08);

        clackGain.gain.setValueAtTime(0.6, now);
        clackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        clack.connect(clackGain);
        clackGain.connect(ctx.destination);
        clack.start(now);
        clack.stop(now + 0.1);
    } catch (e) { }
}

function playBreachStartAudio() {
    playCinematicGlitchSound();
}

function playGlitchSound() {
    playCinematicGlitchSound();
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
            playCinematicGlitchSound();
            document.body.classList.add('screen-glitching');
            overlay.classList.add('active');
            overlay.innerHTML = `
                <div class="glitch-chamber">
                    <div class="glitch-flash-white"></div>
                    <div class="glitch-static-noise"></div>
                    <div class="glitch-slice-bar s1"></div>
                    <div class="glitch-slice-bar s2"></div>
                    <div class="glitch-slice-bar s3"></div>
                    <div class="glitch-hud-banner">
                        <div class="glitch-banner-tag">[ REVERTING TO PUBLIC CYBERCAFÉ SHELL ]</div>
                        <div class="glitch-banner-sub">DISCONNECTING FROM BUNKER // 10.42.0.1...</div>
                    </div>
                </div>
            `;

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 680);
        });
    }
}

function startCinematicBreach(overlay) {
    // 1. Silencia o Lo-Fi se estiver a tocar para não haver conflito de som
    if (typeof isAudioPlaying !== 'undefined' && isAudioPlaying) {
        const toggleBtn = document.getElementById('toggle-lofi-btn');
        if (toggleBtn) toggleBtn.click();
    }

    // 2. Dispara o novo som glitch cinematográfico
    playCinematicGlitchSound();

    // 3. Aplica glitch visual violento a toda a página
    document.body.classList.add('screen-glitching');

    // 4. Constrói o Glitch Chamber e prepara o Video Stage
    overlay.innerHTML = `
        <div class="glitch-chamber" id="glitch-chamber-layer">
            <div class="glitch-flash-white"></div>
            <div class="glitch-static-noise"></div>
            <div class="glitch-slice-bar s1"></div>
            <div class="glitch-slice-bar s2"></div>
            <div class="glitch-slice-bar s3"></div>
            <div class="glitch-slice-bar s4"></div>
            <div class="glitch-slice-bar s5"></div>
            <div class="glitch-hud-banner">
                <div class="glitch-banner-tag">[ ⚠ UNAUTHORIZED OVERRIDE // SYSTEM CORRUPTION ]</div>
                <div class="glitch-banner-sub">&gt;&gt; ESTABLISHING VIDEO LINK: BASTIDORES &lt;&lt;</div>
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

    const glitchLayer = document.getElementById('glitch-chamber-layer');
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

    // 5. Após 750ms do glitch intenso na página, revela o vídeo e começa a tocar
    setTimeout(() => {
        if (navigated) return;
        document.body.classList.remove('screen-glitching');

        if (glitchLayer) {
            glitchLayer.style.opacity = '0';
            setTimeout(() => { glitchLayer.style.display = 'none'; }, 250);
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

            // Safety timeout (video is ~10s, redirect at ~11.5s max if stuck)
            setTimeout(() => {
                if (!navigated) {
                    completeAndNavigate();
                }
            }, 11500);
        } else {
            completeAndNavigate();
        }
    }, 750);
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

/* ==========================================================================
   11. DESAFIO DA FLAG (CTF DOS BASTIDORES & CABEÇALHOS CAPTIVE PORTAL)
   ========================================================================== */
function initCtfConsoleBanner() {
    console.log(
        "%c[PLAN B // NETWORK CAPTURE DETECTED]\n" +
        "%c" +
        "  ██████╗ ██╗      █████╗ ███╗   ██╗    ██████╗ \n" +
        "  ██╔══██╗██║     ██╔══██╗████╗  ██║    ██╔══██╗\n" +
        "  ██████╔╝██║     ███████║██╔██╗ ██║    ██████╔╝\n" +
        "  ██╔═══╝ ██║     ██╔══██║██║╚██╗██║    ██╔══██╗\n" +
        "  ██║     ███████╗██║  ██║██║ ╚████║    ██████╔╝\n" +
        "  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ \n\n" +
        "[CAPTIVE PORTAL SNIFFER PACKET - 10.42.0.1]\n" +
        "HTTP/1.1 200 OK\n" +
        "Server: PlanB-Daemon/1.33.7 (Covilhã Hub)\n" +
        "X-Challenge: O Desafio da Flag dos Bastidores\n" +
        "X-Cipher-Hint: Base64 -> ROT13 (Cifra de César de 13 posições)\n" +
        "X-Packet-Payload: YzQwX3EzX3kwX2Zyel9lcnB1cnZiXzEzMzc=\n\n" +
        ">> Submete no terminal do site: flag FLAG{...}",
        "color: #ffb454; font-weight: bold; font-family: monospace; font-size: 13px;",
        "color: #6ee7b7; font-family: monospace; font-size: 11px; line-height: 1.25;"
    );
}

// SHA-256 da string normalizada em minúsculas "flag{p40_d3_l0_sem_recheio_1337}"
const EXPECTED_FLAG_HASH = "836c0b5cbf8b1b0dc92a863c7056166418ac2643075c96e3cefe08f7794ac400";

async function computeSha256(str) {
    if (window.crypto && crypto.subtle) {
        const msgBuffer = new TextEncoder().encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return "";
}

async function verifyFlagAndUnlock(input) {
    if (!input || typeof input !== 'string') return { success: false };
    let candidate = input.trim();
    if (!candidate.toLowerCase().startsWith('flag{')) {
        candidate = `FLAG{${candidate}}`;
    }
    const hash = await computeSha256(candidate.toLowerCase());
    const isCorrect = (hash === EXPECTED_FLAG_HASH) || (candidate.toLowerCase() === "flag{p40_d3_l0_sem_recheio_1337}");

    if (isCorrect) {
        playSuccessChime();
        openCtfModal();
        return { success: true, flag: candidate };
    }
    return { success: false, flag: candidate };
}

function openCtfModal() {
    const modal = document.getElementById('ctf-modal-overlay');
    if (modal) {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeCtfModal() {
    const modal = document.getElementById('ctf-modal-overlay');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}

function playSuccessChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // Arpeggio C5 - E5 - G5 - C6
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.18, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.38);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.42);
        });
    } catch (e) {
        // fail-safe
    }
}

function initCtfChallenge() {
    // 1. Modais de Fecho
    const closeBtn = document.getElementById('btn-close-ctf-modal');
    const closeBtn2 = document.getElementById('btn-close-voucher-action');
    const modal = document.getElementById('ctf-modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeCtfModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeCtfModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCtfModal();
        });
    }

    // 2. Botão de Copiar Voucher
    const copyBtn = document.getElementById('btn-copy-voucher');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = "FLAG-BASTIDORES-1337";
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(() => {
                    copyBtn.textContent = "✔ COPIADO!";
                    setTimeout(() => { copyBtn.textContent = "📋 COPIAR VOUCHER"; }, 2500);
                }).catch(() => {
                    alert(`Voucher: ${code}`);
                });
            } else {
                alert(`Voucher: ${code}`);
            }
        });
    }

    // 3. Validador no bastidores.html
    const bastidoresBtn = document.getElementById('btn-submit-flag-bastidores');
    const bastidoresInput = document.getElementById('bastidores-flag-input');
    const bastidoresStatus = document.getElementById('bastidores-flag-status');

    if (bastidoresBtn && bastidoresInput) {
        const handleBastidoresSubmit = async () => {
            const val = bastidoresInput.value.trim();
            if (!val) {
                if (bastidoresStatus) {
                    bastidoresStatus.className = 'flag-status-message error';
                    bastidoresStatus.textContent = "[!] Insere uma flag no formato FLAG{...}";
                }
                return;
            }
            if (bastidoresStatus) {
                bastidoresStatus.className = 'flag-status-message';
                bastidoresStatus.textContent = "A verificar hash criptográfico...";
            }
            const res = await verifyFlagAndUnlock(val);
            if (res.success) {
                if (bastidoresStatus) {
                    bastidoresStatus.className = 'flag-status-message success';
                    bastidoresStatus.textContent = "★ ACESSO CONCEDIDO! Credencial desbloqueada com 50% de desconto.";
                }
            } else {
                if (bastidoresStatus) {
                    bastidoresStatus.className = 'flag-status-message error';
                    bastidoresStatus.textContent = "[x] Flag incorreta. Decifra o payload (Base64 -> ROT13).";
                }
            }
        };

        bastidoresBtn.addEventListener('click', handleBastidoresSubmit);
        bastidoresInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleBastidoresSubmit();
            }
        });
    }
}




