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
    initBunkerHeroAsciiReveal();
    initTechEnclosureMouseEffect();
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
        price: "€ 1.80",
        desc: "Massa pura, incrivelmente fofa, leve e arejada, sem qualquer recheio. Receita clássica secular com ovos inteiros, açúcar e farinha.",
        badge: "ESPECIALIDADE",
        tech: "BAKED_DAILY: 08h | 14h",
        img: "assets/especialidade_paodelo.jpg"
    },
    {
        id: "m2",
        category: "pastry",
        title: "Mil-Folhas de Café Especial",
        price: "€ 2.20",
        desc: "Camadas ultracrocantes caramelizadas com creme pasteleiro de infusão arábica e cacau 80%. Especialidade da casa.",
        badge: "ASSINATURA",
        tech: "INFUSÃO: 24h cold-steep",
        img: "assets/especialidade_milfolhas.jpg"
    },
    {
        id: "m3",
        category: "coffee",
        title: "Terminal Espresso (Single Origin)",
        price: "€ 0.80",
        desc: "Lote de café de especialidade arábica moído na hora. Perfil encorpado com acidez equilibrada. Preço estudante/comunidade.",
        badge: "ESPRESSO",
        tech: "EXTRACTION: 9 bar / 27s",
        img: "assets/menu_espresso.jpg"
    },
    {
        id: "m4",
        category: "coffee",
        title: "Cold Brew [DAEMON] 18h",
        price: "€ 1.90",
        desc: "Café extraído lentamente em água filtrada a frio. Doce, sedoso, corpo denso sem amargor.",
        badge: "SLOW BREW",
        tech: "SLOW_PROCESS: 18 HORAS",
        img: "assets/menu_coldbrew.jpg"
    },
    {
        id: "m5",
        category: "coffee",
        title: "Lo-Fi Flat White (127.0.0.1)",
        price: "€ 1.60",
        desc: "Ristretto duplo coberto com microespuma sedosa de leite gordo biológico ou leite de aveia barista.",
        badge: "LATTE ART",
        tech: "STEAM_TEMP: 62°C",
        img: "assets/menu_flatwhite.jpg"
    },
    {
        id: "m6",
        category: "coffee",
        title: "Chemex / V60 Pour Over",
        price: "€ 2.00",
        desc: "Método de filtro limpo para destacar as notas florais mais subtis dos nossos micro-lotes.",
        badge: "SLOW DRIP",
        tech: "RATIO: 1:16 / 93°C",
        img: "assets/menu_pourover.jpg"
    },
    {
        id: "m7",
        category: "tea",
        title: "Matcha Matrix Cerimonial",
        price: "€ 2.40",
        desc: "Matcha biológico de Uji batido com chasen tradicional e servido com leite de aveia aveludado.",
        badge: "UJI JAPAN",
        tech: "ANTIOXIDANT: MAX",
        img: "assets/menu_matcha.jpg"
    },
    {
        id: "m8",
        category: "tea",
        title: "Earl Grey & Lavanda [ROOT]",
        price: "€ 1.40",
        desc: "Chá preto encorpado perfumado com óleo natural de bergamota da Calábria e botões de alfazema.",
        badge: "INFUSÃO",
        tech: "STEEP_TIME: 4 MIN",
        img: "assets/menu_earlgrey.jpg"
    },
    {
        id: "m9",
        category: "pastry",
        title: "Biscoitos ASCII Cardamomo",
        price: "€ 1.10",
        desc: "Dueto de bolachas amanteigadas artesanais carimbadas com caracteres ASCII e canela do Ceilão.",
        badge: "SNACK",
        tech: "CRUNCH_LEVEL: 100%",
        img: "assets/menu_biscoitos.jpg"
    },
    {
        id: "m10",
        category: "bites",
        title: "Tosta Hacker Sourdough & Avocado",
        price: "€ 3.60",
        desc: "Pão de fermentação lenta de 48h, pasta de abacate fresco, dukkah artesanal e azeite virgem transmontano.",
        badge: "LIGHT MEAL",
        tech: "FERMENTAÇÃO: 48 HORAS",
        img: "assets/menu_tosta.jpg"
    },
    {
        id: "m11",
        category: "bites",
        title: "Sandwich Focaccia & Queijo da Serra",
        price: "€ 3.80",
        desc: "Focaccia de alecrim grelhada com queijo da Serra curado, rúcula selvagem e pasta de tomate seco.",
        badge: "HOT TOAST",
        tech: "SERVIDO: QUENTE",
        img: "assets/menu_focaccia.jpg"
    },
    {
        id: "m12",
        category: "pastry",
        title: "Brownie Fudge Café & Nozes",
        price: "€ 1.60",
        desc: "Chocolate belga 70%, infusão de café expresso e nozes tostadas com textura húmida e rica.",
        badge: "CHOCOLATE",
        tech: "CACAO: 70% PUR",
        img: "assets/menu_brownie.jpg"
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
                <div class="menu-thumb-box">
                    <img src="${item.img}" alt="${item.title}" class="menu-thumb-img" loading="lazy" decoding="async">
                </div>
                <div class="menu-card-body">
                    <div class="menu-card-top">
                        <h4 class="menu-item-title">${item.title}</h4>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                    <div class="menu-card-bottom">
                        <span class="item-badge">&gt; ${item.badge}</span>
                        <span class="item-tech-note">${item.tech}</span>
                    </div>
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
&bull; <strong>Hoodies 450 gsm:</strong> Castanho Torrado &middot; Preto Obsidiana (€ 34.00)<br>
&bull; <strong>T-Shirts 240 gsm:</strong> HTTP 418 Teapot &middot; Stack Overflow (€ 16.00)<br>
&bull; <strong>Cerâmica Artesanal:</strong> Caneca "Spec Brew" Barcelos 350ml (€ 9.50)<br>
&bull; <strong>Desk Mat XXL:</strong> Terminal Grid 900x400 (Vista interativa: limpo vs com setup) (€ 18.00)<br>
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
Gateway: 10.42.0.1 | Portal Cativo Ativo<br>
DNS: 1.1.1.1 / 9.9.9.9 com DNS over HTTPS (DoH)<br><br>
<span style="color:var(--amber-bright);font-weight:bold;">[!] CAPTIVE PORTAL TRAFFIC CAPTURED:</span><br>
<code style="color:#6ee7b7;display:block;background:rgba(0,0,0,0.6);padding:0.5rem 0.8rem;border-left:3px solid var(--accent-cyan);margin-top:0.3rem;">
HTTP/1.1 200 OK &middot; Server: PlanB-Daemon/1.33.7 (Covilhã Hub)<br>
X-Riddle: <em>"Ao fim de 63 dias, César colheu 13 maçãs; comeu uma por hora e quando acabou eram 2 da manhã do dia seguinte... No total foram 64 dias e 13 maçãs."</em><br>
Token: <strong>YzQwX3EzX3kwX2Zyel9lcnB1cnZiXzEzMzc=</strong>
</code><br>
Valida a tua resposta no terminal com: <span class="highlight-cmd">flag FLAG{...}</span>`;
        },
        ctf: () => {
            return `=== PLAN B // O DESAFIO DA FLAG (CTF DOS BASTIDORES) ===<br>
Para entrar nos Bastidores e aceder às turmas restritas com 50% de desconto:<br>
1. Descobre o token criptográfico do portal Wi-Fi (consulta <code>robots.txt</code>, <code>captive-portal.json</code>, cookies ou comando <span class="highlight-cmd">wifi</span>).<br>
2. Decifra a mensagem secreta oculta no token.<br>
3. Submete a tua resposta no terminal: <span class="highlight-cmd">flag FLAG{...}</span><br>
4. Se acertares, a credencial oficial e voucher de 50% abrem de imediato!`;
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
Analisa o token do portal e tenta novamente. Formato esperado: <code>FLAG{...}</code>`;
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
   10.1. REVELAÇÃO DINÂMICA DO BUNKER HERO ASCII (OVERRIDE TERMINAL)
   Efeito de decifração / corrupção de caracteres (Scramble & Resolve)
   ========================================================================== */
function initBunkerHeroAsciiReveal() {
    const wrapper = document.getElementById('bunker-hero-ascii-wrapper');
    const pre = document.getElementById('bunker-hero-ascii-pre');
    const statusText = document.getElementById('bunker-term-status-text');
    if (!wrapper || !pre) return;

    const originalText = pre.textContent;
    const NOISE = "#%&*+=/<>?!01$@{}[]▒▓█";
    const RESOLVE_MS = 1400; // Tempo de decifração inicial até assentar 100% limpo

    pre.textContent = '';
    const spans = [];
    const n = originalText.length;

    // Constrói os spans individuais para cada caractere preservando quebras de linha e espaços
    for (let i = 0; i < n; i++) {
        const char = originalText[i];
        if (char === '\n') {
            pre.appendChild(document.createTextNode('\n'));
            spans.push(null);
        } else if (char === ' ') {
            pre.appendChild(document.createTextNode(' '));
            spans.push(null);
        } else {
            const span = document.createElement('span');
            span.className = 'scramble-c';
            span.setAttribute('data-state', 'clean');
            span.textContent = char;
            pre.appendChild(span);
            spans.push(span);
        }
    }

    function showChar(idx, clean) {
        const sp = spans[idx];
        if (!sp) return;
        const origChar = originalText[idx];
        if (clean) {
            sp.textContent = origChar;
            sp.setAttribute('data-state', 'clean');
        } else {
            sp.textContent = NOISE[Math.floor(Math.random() * NOISE.length)];
            sp.setAttribute('data-state', 'noise');
        }
    }

    let start = performance.now();
    let last = 0;
    let frameId = 0;
    let hasPlayedAudio = false;

    function playAudioBlip() {
        if (hasPlayedAudio) return;
        const trigger = () => {
            if (hasPlayedAudio) return;
            hasPlayedAudio = true;
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                const ctx = new AudioCtx();
                if (ctx.state === 'suspended') {
                    ctx.resume();
                }
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(65, now);
                osc.frequency.exponentialRampToValueAtTime(420, now + 0.3);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.38);
            } catch (e) { }
            window.removeEventListener('pointerdown', trigger);
            window.removeEventListener('keydown', trigger);
        };

        // Regista para tocar ao primeiro gesto do utilizador sem violar política de Autoplay
        window.addEventListener('pointerdown', trigger, { once: true });
        window.addEventListener('keydown', trigger, { once: true });
    }

    function finalizeAllClean() {
        if (frameId) {
            cancelAnimationFrame(frameId);
            frameId = 0;
        }
        for (let i = 0; i < n; i++) {
            showChar(i, true);
        }
        if (statusText) {
            statusText.textContent = "ROOT_ACTIVE // 0x00";
            statusText.style.color = "#10b981";
            const dot = statusText.parentElement ? statusText.parentElement.querySelector('.blink-dot') : null;
            if (dot) dot.style.background = "#10b981";
        }
    }

    function tick(now) {
        const elapsed = now - start;

        if (now - last >= 45) {
            last = now;
            // Loop de cálculo de decifração progressiva
            for (let i = 0; i < n; i++) {
                if (!spans[i]) continue;
                const clean = elapsed > 100 + (i / n) * (RESOLVE_MS - 250);
                showChar(i, clean);
            }
        }

        // Se a duração de decifração terminar, encerra a animação permanentemente (sem loops)
        if (elapsed >= RESOLVE_MS) {
            finalizeAllClean();
            return;
        }

        frameId = requestAnimationFrame(tick);
    }

    // Inicia revelação do wrapper e executa a animação de entrada uma única vez
    setTimeout(() => {
        wrapper.classList.add('is-revealed');
        playAudioBlip();

        if (statusText) {
            statusText.textContent = "DECRYPTING_STREAM...";
            statusText.style.color = "#ef4444";
            const dot = statusText.parentElement ? statusText.parentElement.querySelector('.blink-dot') : null;
            if (dot) dot.style.background = "#ef4444";
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            finalizeAllClean();
            return;
        }

        start = performance.now();
        frameId = requestAnimationFrame(tick);
    }, 350);
}

/* ==========================================================================
   10.2. INTERACTIVE ASCII WINGS CANVAS (ASAS GIGANTES REATIVAS AO RATO)
   As duas asas em arte ASCII flanqueiam o terminal central e reagem
   diretamente à passagem do cursor do rato, acendendo em vermelho/laranja neon.
   ========================================================================== */
function initTechEnclosureMouseEffect() {
    const stage = document.getElementById('terminal-stage-wrapper');
    const canvas = document.getElementById('ascii-wings-interactive-canvas');
    if (!stage || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let wingPoints = []; // [side, charX, charY, char]
    let mouse = { x: -1000, y: -1000, active: false };
    let animFrame = 0;

    // Matriz de coordenadas das asas de ASCII pré-embutida (evita erros CORS em file:// e carrega instantaneamente)
    wingPoints = [["L", 18, 3, "+"], ["L", 19, 3, "+"], ["L", 20, 3, "+"], ["L", 21, 3, "."], ["L", 22, 3, "."], ["L", 23, 3, "."], ["L", 24, 3, "+"], ["L", 16, 4, "+"], ["L", 17, 4, "."], ["L", 18, 4, "."], ["L", 20, 4, "."], ["L", 21, 4, "+"], ["L", 23, 4, "+"], ["L", 24, 4, "."], ["L", 25, 4, "+"], ["L", 14, 5, "+"], ["L", 15, 5, "."], ["L", 17, 5, "+"], ["L", 18, 5, "."], ["L", 19, 5, "."], ["L", 24, 5, "+"], ["L", 26, 5, "+"], ["L", 13, 6, "+"], ["L", 16, 6, "."], ["L", 17, 6, "+"], ["L", 18, 6, "."], ["L", 25, 6, "+"], ["L", 26, 6, "."], ["L", 27, 6, "+"], ["L", 12, 7, "+"], ["L", 13, 7, "."], ["L", 14, 7, "."], ["L", 15, 7, "."], ["L", 16, 7, "+"], ["L", 17, 7, "."], ["L", 18, 7, "+"], ["L", 26, 7, "."], ["L", 27, 7, "."], ["L", 28, 7, "+"], ["L", 10, 8, "+"], ["L", 11, 8, "+"], ["L", 12, 8, "."], ["L", 13, 8, "+"], ["L", 14, 8, "."], ["L", 15, 8, "+"], ["L", 16, 8, "+"], ["L", 17, 8, "."], ["L", 26, 8, "+"], ["L", 27, 8, "."], ["L", 28, 8, "+"], ["L", 9, 9, "+"], ["L", 10, 9, "."], ["L", 11, 9, "."], ["L", 13, 9, "+"], ["L", 14, 9, "."], ["L", 15, 9, "+"], ["L", 16, 9, "."], ["L", 17, 9, "."], ["L", 21, 9, "+"], ["L", 23, 9, "+"], ["L", 27, 9, "+"], ["L", 28, 9, "."], ["L", 29, 9, "+"], ["L", 9, 10, "."], ["L", 10, 10, "."], ["L", 13, 10, "."], ["L", 14, 10, "+"], ["L", 15, 10, "+"], ["L", 16, 10, "."], ["L", 17, 10, "."], ["L", 20, 10, "+"], ["L", 22, 10, "."], ["L", 23, 10, "."], ["L", 28, 10, "."], ["L", 29, 10, "."], ["L", 8, 11, "+"], ["L", 9, 11, "."], ["L", 10, 11, "+"], ["L", 12, 11, "+"], ["L", 14, 11, "+"], ["L", 16, 11, "+"], ["L", 17, 11, "."], ["L", 20, 11, "."], ["L", 21, 11, "."], ["L", 22, 11, "+"], ["L", 23, 11, "."], ["L", 24, 11, "+"], ["L", 28, 11, "+"], ["L", 29, 11, "."], ["L", 30, 11, "+"], ["L", 42, 11, "+"], ["L", 43, 11, "."], ["L", 44, 11, "+"], ["L", 7, 12, "+"], ["L", 8, 12, "."], ["L", 9, 12, "+"], ["L", 11, 12, "+"], ["L", 13, 12, "."], ["L", 14, 12, "+"], ["L", 16, 12, "+"], ["L", 17, 12, "."], ["L", 19, 12, "+"], ["L", 20, 12, "."], ["L", 21, 12, "+"], ["L", 22, 12, "+"], ["L", 23, 12, "."], ["L", 24, 12, "+"], ["L", 29, 12, "+"], ["L", 30, 12, "."], ["L", 31, 12, "+"], ["L", 42, 12, "+"], ["L", 43, 12, "+"], ["L", 44, 12, "+"], ["L", 45, 12, "+"], ["L", 7, 13, "."], ["L", 8, 13, "+"], ["L", 10, 13, "+"], ["L", 11, 13, "."], ["L", 13, 13, "."], ["L", 16, 13, "+"], ["L", 17, 13, "."], ["L", 19, 13, "."], ["L", 20, 13, "."], ["L", 21, 13, "+"], ["L", 22, 13, "+"], ["L", 23, 13, "."], ["L", 24, 13, "+"], ["L", 30, 13, "+"], ["L", 31, 13, "."], ["L", 32, 13, "+"], ["L", 41, 13, "+"], ["L", 42, 13, "+"], ["L", 45, 13, "+"], ["L", 46, 13, "+"], ["L", 6, 14, "+"], ["L", 7, 14, "."], ["L", 8, 14, "+"], ["L", 9, 14, "+"], ["L", 13, 14, "+"], ["L", 16, 14, "+"], ["L", 17, 14, "."], ["L", 18, 14, "+"], ["L", 19, 14, "."], ["L", 20, 14, "+"], ["L", 23, 14, "+"], ["L", 24, 14, "."], ["L", 25, 14, "+"], ["L", 31, 14, "."], ["L", 32, 14, "."], ["L", 33, 14, "+"], ["L", 40, 14, "+"], ["L", 41, 14, "+"], ["L", 42, 14, "+"], ["L", 45, 14, "+"], ["L", 46, 14, "+"], ["L", 47, 14, "+"], ["L", 5, 15, "+"], ["L", 11, 15, "."], ["L", 13, 15, "+"], ["L", 16, 15, "+"], ["L", 17, 15, "."], ["L", 18, 15, "+"], ["L", 20, 15, "+"], ["L", 23, 15, "+"], ["L", 26, 15, "+"], ["L", 32, 15, "+"], ["L", 33, 15, "."], ["L", 34, 15, "+"], ["L", 39, 15, "+"], ["L", 40, 15, "+"], ["L", 41, 15, "+"], ["L", 43, 15, "+"], ["L", 44, 15, "+"], ["L", 45, 15, "+"], ["L", 46, 15, "+"], ["L", 47, 15, "+"], ["L", 4, 16, "+"], ["L", 6, 16, "."], ["L", 9, 16, "."], ["L", 10, 16, "."], ["L", 11, 16, "+"], ["L", 13, 16, "+"], ["L", 16, 16, "+"], ["L", 17, 16, "."], ["L", 18, 16, "."], ["L", 20, 16, "."], ["L", 21, 16, "+"], ["L", 23, 16, "+"], ["L", 25, 16, "+"], ["L", 27, 16, "+"], ["L", 33, 16, "+"], ["L", 34, 16, "."], ["L", 35, 16, "."], ["L", 36, 16, "+"], ["L", 38, 16, "+"], ["L", 39, 16, "+"], ["L", 42, 16, "+"], ["L", 43, 16, "+"], ["L", 46, 16, "+"], ["L", 47, 16, "+"], ["L", 3, 17, "+"], ["L", 4, 17, "."], ["L", 5, 17, "+"], ["L", 7, 17, "."], ["L", 8, 17, "+"], ["L", 9, 17, "+"], ["L", 10, 17, "."], ["L", 11, 17, "+"], ["L", 13, 17, "+"], ["L", 16, 17, "+"], ["L", 19, 17, "."], ["L", 20, 17, "."], ["L", 21, 17, "."], ["L", 22, 17, "+"], ["L", 23, 17, "."], ["L", 24, 17, "."], ["L", 26, 17, "+"], ["L", 29, 17, "+"], ["L", 35, 17, "+"], ["L", 36, 17, "."], ["L", 37, 17, "."], ["L", 38, 17, "."], ["L", 39, 17, "+"], ["L", 40, 17, "+"], ["L", 41, 17, "+"], ["L", 42, 17, "+"], ["L", 43, 17, "+"], ["L", 45, 17, "+"], ["L", 46, 17, "+"], ["L", 47, 17, "+"], ["L", 3, 18, "+"], ["L", 4, 18, "."], ["L", 6, 18, "+"], ["L", 7, 18, "."], ["L", 8, 18, "+"], ["L", 9, 18, "."], ["L", 10, 18, "."], ["L", 11, 18, "+"], ["L", 13, 18, "+"], ["L", 16, 18, "+"], ["L", 20, 18, "+"], ["L", 21, 18, "+"], ["L", 22, 18, "."], ["L", 23, 18, "."], ["L", 26, 18, "+"], ["L", 27, 18, "."], ["L", 28, 18, "+"], ["L", 29, 18, "."], ["L", 30, 18, "+"], ["L", 38, 18, "+"], ["L", 39, 18, "+"], ["L", 40, 18, "+"], ["L", 41, 18, "+"], ["L", 42, 18, "."], ["L", 43, 18, "."], ["L", 45, 18, "."], ["L", 47, 18, "."], ["L", 48, 18, "+"], ["L", 2, 19, "+"], ["L", 3, 19, "."], ["L", 4, 19, "+"], ["L", 6, 19, "."], ["L", 7, 19, "+"], ["L", 8, 19, "+"], ["L", 9, 19, "."], ["L", 10, 19, "+"], ["L", 11, 19, "+"], ["L", 13, 19, "+"], ["L", 16, 19, "+"], ["L", 18, 19, "."], ["L", 20, 19, "+"], ["L", 22, 19, "+"], ["L", 23, 19, "."], ["L", 26, 19, "."], ["L", 27, 19, "+"], ["L", 29, 19, "+"], ["L", 32, 19, "+"], ["L", 33, 19, "+"], ["L", 46, 19, "."], ["L", 47, 19, "."], ["L", 2, 20, "+"], ["L", 3, 20, "."], ["L", 4, 20, "."], ["L", 5, 20, "."], ["L", 6, 20, "."], ["L", 7, 20, "+"], ["L", 8, 20, "+"], ["L", 9, 20, "."], ["L", 11, 20, "+"], ["L", 13, 20, "+"], ["L", 16, 20, "."], ["L", 17, 20, "."], ["L", 18, 20, "+"], ["L", 20, 20, "+"], ["L", 22, 20, "+"], ["L", 23, 20, "."], ["L", 24, 20, "."], ["L", 25, 20, "."], ["L", 26, 20, "."], ["L", 27, 20, "+"], ["L", 29, 20, "+"], ["L", 30, 20, "."], ["L", 31, 20, "+"], ["L", 32, 20, "."], ["L", 34, 20, "."], ["L", 35, 20, "."], ["L", 37, 20, "."], ["L", 38, 20, "+"], ["L", 45, 20, "+"], ["L", 46, 20, "."], ["L", 47, 20, "+"], ["L", 3, 21, "+"], ["L", 5, 21, "."], ["L", 6, 21, "+"], ["L", 7, 21, "+"], ["L", 8, 21, "."], ["L", 9, 21, "."], ["L", 11, 21, "+"], ["L", 13, 21, "+"], ["L", 15, 21, "+"], ["L", 16, 21, "."], ["L", 17, 21, "."], ["L", 18, 21, "+"], ["L", 20, 21, "+"], ["L", 23, 21, "+"], ["L", 26, 21, "."], ["L", 27, 21, "+"], ["L", 28, 21, "+"], ["L", 29, 21, "."], ["L", 30, 21, "+"], ["L", 32, 21, "."], ["L", 33, 21, "."], ["L", 34, 21, "+"], ["L", 35, 21, "+"], ["L", 36, 21, "."], ["L", 37, 21, "+"], ["L", 38, 21, "."], ["L", 42, 21, "."], ["L", 43, 21, "+"], ["L", 44, 21, "+"], ["L", 45, 21, "."], ["L", 46, 21, "+"], ["L", 2, 22, "+"], ["L", 3, 22, "."], ["L", 4, 22, "."], ["L", 6, 22, "+"], ["L", 7, 22, "+"], ["L", 8, 22, "."], ["L", 9, 22, "+"], ["L", 11, 22, "+"], ["L", 13, 22, "+"], ["L", 15, 22, "+"], ["L", 16, 22, "."], ["L", 17, 22, "+"], ["L", 19, 22, "."], ["L", 20, 22, "+"], ["L", 22, 22, "+"], ["L", 23, 22, "."], ["L", 24, 22, "+"], ["L", 26, 22, "+"], ["L", 29, 22, "+"], ["L", 31, 22, "+"], ["L", 32, 22, "."], ["L", 33, 22, "+"], ["L", 35, 22, "+"], ["L", 36, 22, "."], ["L", 39, 22, "+"], ["L", 40, 22, "."], ["L", 41, 22, "+"], ["L", 42, 22, "+"], ["L", 43, 22, "."], ["L", 45, 22, "+"], ["L", 2, 23, "+"], ["L", 3, 23, "."], ["L", 4, 23, "+"], ["L", 5, 23, "."], ["L", 7, 23, "+"], ["L", 8, 23, "."], ["L", 9, 23, "+"], ["L", 11, 23, "+"], ["L", 13, 23, "+"], ["L", 15, 23, "+"], ["L", 16, 23, "."], ["L", 17, 23, "+"], ["L", 19, 23, "."], ["L", 20, 23, "+"], ["L", 22, 23, "+"], ["L", 23, 23, "."], ["L", 24, 23, "+"], ["L", 26, 23, "+"], ["L", 27, 23, "."], ["L", 28, 23, "."], ["L", 30, 23, "."], ["L", 33, 23, "+"], ["L", 35, 23, "+"], ["L", 36, 23, "."], ["L", 39, 23, "+"], ["L", 41, 23, "+"], ["L", 45, 23, "+"], ["L", 1, 24, "+"], ["L", 2, 24, "."], ["L", 3, 24, "."], ["L", 4, 24, "+"], ["L", 5, 24, "."], ["L", 7, 24, "+"], ["L", 8, 24, "."], ["L", 9, 24, "+"], ["L", 13, 24, "+"], ["L", 15, 24, "+"], ["L", 16, 24, "."], ["L", 17, 24, "+"], ["L", 19, 24, "."], ["L", 20, 24, "."], ["L", 21, 24, "+"], ["L", 22, 24, "+"], ["L", 23, 24, "."], ["L", 26, 24, "+"], ["L", 27, 24, "."], ["L", 28, 24, "+"], ["L", 29, 24, "+"], ["L", 30, 24, "."], ["L", 31, 24, "+"], ["L", 32, 24, "."], ["L", 33, 24, "."], ["L", 34, 24, "+"], ["L", 36, 24, "."], ["L", 38, 24, "+"], ["L", 39, 24, "."], ["L", 41, 24, "."], ["L", 42, 24, "+"], ["L", 43, 24, "+"], ["L", 44, 24, "."], ["L", 45, 24, "+"], ["L", 1, 25, "+"], ["L", 2, 25, "."], ["L", 3, 25, "+"], ["L", 4, 25, "."], ["L", 5, 25, "+"], ["L", 7, 25, "+"], ["L", 8, 25, "."], ["L", 9, 25, "+"], ["L", 12, 25, "."], ["L", 13, 25, "+"], ["L", 15, 25, "+"], ["L", 16, 25, "."], ["L", 17, 25, "+"], ["L", 19, 25, "+"], ["L", 20, 25, "."], ["L", 21, 25, "+"], ["L", 22, 25, "+"], ["L", 23, 25, "."], ["L", 26, 25, "."], ["L", 27, 25, "+"], ["L", 29, 25, "+"], ["L", 30, 25, "."], ["L", 31, 25, "+"], ["L", 32, 25, "+"], ["L", 33, 25, "."], ["L", 34, 25, "."], ["L", 35, 25, "+"], ["L", 36, 25, "."], ["L", 38, 25, "."], ["L", 39, 25, "."], ["L", 40, 25, "."], ["L", 41, 25, "+"], ["L", 42, 25, "."], ["L", 43, 25, "."], ["L", 44, 25, "+"], ["L", 1, 26, "+"], ["L", 2, 26, "."], ["L", 3, 26, "+"], ["L", 4, 26, "."], ["L", 5, 26, "+"], ["L", 7, 26, "."], ["L", 9, 26, "+"], ["L", 12, 26, "."], ["L", 13, 26, "."], ["L", 15, 26, "+"], ["L", 16, 26, "."], ["L", 17, 26, "+"], ["L", 20, 26, "."], ["L", 21, 26, "+"], ["L", 22, 26, "+"], ["L", 24, 26, "+"], ["L", 26, 26, "."], ["L", 27, 26, "+"], ["L", 29, 26, "+"], ["L", 31, 26, "+"], ["L", 33, 26, "."], ["L", 34, 26, "."], ["L", 35, 26, "+"], ["L", 36, 26, "+"], ["L", 38, 26, "+"], ["L", 39, 26, "+"], ["L", 40, 26, "."], ["L", 41, 26, "+"], ["L", 42, 26, "."], ["L", 43, 26, "+"], ["L", 1, 27, "+"], ["L", 2, 27, "."], ["L", 3, 27, "+"], ["L", 4, 27, "."], ["L", 5, 27, "+"], ["L", 6, 27, "+"], ["L", 9, 27, "+"], ["L", 12, 27, "+"], ["L", 13, 27, "."], ["L", 14, 27, "+"], ["L", 16, 27, "."], ["L", 17, 27, "."], ["L", 20, 27, "."], ["L", 22, 27, "."], ["L", 25, 27, "+"], ["L", 27, 27, "+"], ["L", 29, 27, "+"], ["L", 31, 27, "."], ["L", 33, 27, "+"], ["L", 34, 27, "."], ["L", 35, 27, "+"], ["L", 37, 27, "."], ["L", 38, 27, "+"], ["L", 39, 27, "+"], ["L", 40, 27, "."], ["L", 42, 27, "."], ["L", 43, 27, "."], ["L", 1, 28, "+"], ["L", 2, 28, "."], ["L", 5, 28, "+"], ["L", 6, 28, "."], ["L", 7, 28, "."], ["L", 8, 28, "."], ["L", 9, 28, "+"], ["L", 12, 28, "+"], ["L", 13, 28, "."], ["L", 14, 28, "+"], ["L", 16, 28, "+"], ["L", 17, 28, "."], ["L", 20, 28, "."], ["L", 21, 28, "."], ["L", 25, 28, "."], ["L", 28, 28, "+"], ["L", 29, 28, "+"], ["L", 32, 28, "+"], ["L", 33, 28, "+"], ["L", 36, 28, "+"], ["L", 37, 28, "+"], ["L", 40, 28, "."], ["L", 41, 28, "."], ["L", 44, 28, "+"], ["L", 2, 29, "+"], ["L", 3, 29, "."], ["L", 5, 29, "+"], ["L", 6, 29, "."], ["L", 7, 29, "+"], ["L", 8, 29, "."], ["L", 9, 29, "+"], ["L", 13, 29, "."], ["L", 14, 29, "+"], ["L", 16, 29, "+"], ["L", 17, 29, "."], ["L", 20, 29, "."], ["L", 21, 29, "."], ["L", 23, 29, "+"], ["L", 25, 29, "."], ["L", 27, 29, "."], ["L", 28, 29, "."], ["L", 29, 29, "+"], ["L", 31, 29, "+"], ["L", 32, 29, "."], ["L", 33, 29, "+"], ["L", 34, 29, "."], ["L", 35, 29, "."], ["L", 36, 29, "."], ["L", 37, 29, "."], ["L", 39, 29, "."], ["L", 40, 29, "+"], ["L", 41, 29, "+"], ["L", 42, 29, "+"], ["L", 43, 29, "+"], ["L", 44, 29, "+"], ["L", 3, 30, "+"], ["L", 5, 30, "."], ["L", 6, 30, "."], ["L", 8, 30, "+"], ["L", 9, 30, "."], ["L", 13, 30, "."], ["L", 14, 30, "."], ["L", 15, 30, "+"], ["L", 16, 30, "+"], ["L", 17, 30, "."], ["L", 18, 30, "+"], ["L", 20, 30, "."], ["L", 21, 30, "."], ["L", 23, 30, "+"], ["L", 24, 30, "."], ["L", 25, 30, "+"], ["L", 26, 30, "+"], ["L", 27, 30, "+"], ["L", 28, 30, "."], ["L", 31, 30, "+"], ["L", 32, 30, "+"], ["L", 34, 30, "."], ["L", 36, 30, "."], ["L", 37, 30, "+"], ["L", 39, 30, "+"], ["L", 3, 31, "+"], ["L", 6, 31, "+"], ["L", 8, 31, "+"], ["L", 9, 31, "."], ["L", 13, 31, "."], ["L", 15, 31, "+"], ["L", 16, 31, "+"], ["L", 17, 31, "."], ["L", 18, 31, "+"], ["L", 20, 31, "."], ["L", 21, 31, "."], ["L", 24, 31, "."], ["L", 25, 31, "."], ["L", 28, 31, "."], ["L", 31, 31, "."], ["L", 32, 31, "+"], ["L", 33, 31, "."], ["L", 35, 31, "."], ["L", 36, 31, "."], ["L", 37, 31, "."], ["L", 39, 31, "+"], ["L", 3, 32, "+"], ["L", 8, 32, "+"], ["L", 9, 32, "."], ["L", 10, 32, "+"], ["L", 13, 32, "."], ["L", 14, 32, "."], ["L", 15, 32, "."], ["L", 16, 32, "+"], ["L", 17, 32, "+"], ["L", 20, 32, "."], ["L", 22, 32, "+"], ["L", 24, 32, "+"], ["L", 26, 32, "+"], ["L", 28, 32, "+"], ["L", 29, 32, "."], ["L", 30, 32, "+"], ["L", 31, 32, "."], ["L", 32, 32, "."], ["L", 33, 32, "+"], ["L", 34, 32, "."], ["L", 35, 32, "+"], ["L", 37, 32, "+"], ["L", 38, 32, "."], ["L", 39, 32, "+"], ["L", 3, 33, "+"], ["L", 5, 33, "."], ["L", 8, 33, "+"], ["L", 9, 33, "."], ["L", 10, 33, "+"], ["L", 12, 33, "+"], ["L", 13, 33, "."], ["L", 14, 33, "+"], ["L", 15, 33, "."], ["L", 16, 33, "+"], ["L", 19, 33, "+"], ["L", 20, 33, "."], ["L", 22, 33, "+"], ["L", 24, 33, "+"], ["L", 26, 33, "."], ["L", 27, 33, "+"], ["L", 28, 33, "+"], ["L", 29, 33, "."], ["L", 32, 33, "."], ["L", 35, 33, "+"], ["L", 3, 34, "+"], ["L", 4, 34, "."], ["L", 5, 34, "+"], ["L", 8, 34, "+"], ["L", 9, 34, "."], ["L", 10, 34, "."], ["L", 12, 34, "+"], ["L", 13, 34, "."], ["L", 14, 34, "+"], ["L", 15, 34, "+"], ["L", 16, 34, "."], ["L", 17, 34, "+"], ["L", 18, 34, "+"], ["L", 19, 34, "."], ["L", 20, 34, "."], ["L", 22, 34, "."], ["L", 24, 34, "+"], ["L", 27, 34, "+"], ["L", 28, 34, "+"], ["L", 29, 34, "."], ["L", 33, 34, "+"], ["L", 34, 34, "+"], ["L", 35, 34, "+"], ["L", 3, 35, "+"], ["L", 4, 35, "."], ["L", 5, 35, "+"], ["L", 8, 35, "+"], ["L", 10, 35, "."], ["L", 11, 35, "+"], ["L", 12, 35, "+"], ["L", 13, 35, "."], ["L", 14, 35, "+"], ["L", 15, 35, "+"], ["L", 16, 35, "."], ["L", 17, 35, "."], ["L", 19, 35, "."], ["L", 22, 35, "."], ["L", 26, 35, "."], ["L", 27, 35, "."], ["L", 28, 35, "+"], ["L", 29, 35, "."], ["L", 30, 35, "+"], ["L", 3, 36, "+"], ["L", 4, 36, "."], ["L", 5, 36, "+"], ["L", 7, 36, "+"], ["L", 8, 36, "."], ["L", 9, 36, "."], ["L", 10, 36, "."], ["L", 11, 36, "+"], ["L", 12, 36, "+"], ["L", 13, 36, "."], ["L", 15, 36, "+"], ["L", 16, 36, "."], ["L", 18, 36, "+"], ["L", 19, 36, "+"], ["L", 23, 36, "+"], ["L", 25, 36, "."], ["L", 26, 36, "."], ["L", 27, 36, "."], ["L", 28, 36, "."], ["L", 29, 36, "."], ["L", 30, 36, "+"], ["L", 3, 37, "+"], ["L", 4, 37, "."], ["L", 5, 37, "+"], ["L", 7, 37, "+"], ["L", 8, 37, "."], ["L", 9, 37, "+"], ["L", 10, 37, "+"], ["L", 11, 37, "."], ["L", 12, 37, "+"], ["L", 13, 37, "."], ["L", 16, 37, "+"], ["L", 18, 37, "."], ["L", 19, 37, "+"], ["L", 20, 37, "."], ["L", 21, 37, "+"], ["L", 22, 37, "."], ["L", 23, 37, "."], ["L", 25, 37, "+"], ["L", 26, 37, "."], ["L", 27, 37, "+"], ["L", 28, 37, "."], ["L", 30, 37, "."], ["L", 3, 38, "+"], ["L", 4, 38, "."], ["L", 5, 38, "+"], ["L", 7, 38, "."], ["L", 8, 38, "+"], ["L", 10, 38, "+"], ["L", 12, 38, "+"], ["L", 13, 38, "."], ["L", 16, 38, "+"], ["L", 17, 38, "."], ["L", 19, 38, "."], ["L", 20, 38, "."], ["L", 21, 38, "+"], ["L", 22, 38, "+"], ["L", 24, 38, "+"], ["L", 25, 38, "+"], ["L", 26, 38, "."], ["L", 27, 38, "+"], ["L", 29, 38, "+"], ["L", 30, 38, "+"], ["L", 3, 39, "+"], ["L", 4, 39, "."], ["L", 5, 39, "+"], ["L", 6, 39, "+"], ["L", 7, 39, "."], ["L", 8, 39, "+"], ["L", 11, 39, "+"], ["L", 13, 39, "."], ["L", 14, 39, "+"], ["L", 17, 39, "+"], ["L", 21, 39, "+"], ["L", 22, 39, "+"], ["L", 23, 39, "."], ["L", 25, 39, "+"], ["L", 26, 39, "."], ["L", 27, 39, "."], ["L", 3, 40, "+"], ["L", 4, 40, "."], ["L", 5, 40, "+"], ["L", 6, 40, "+"], ["L", 7, 40, "."], ["L", 8, 40, "+"], ["L", 11, 40, "+"], ["L", 14, 40, "+"], ["L", 17, 40, "+"], ["L", 19, 40, "+"], ["L", 20, 40, "+"], ["L", 23, 40, "+"], ["L", 26, 40, "."], ["L", 27, 40, "."], ["L", 28, 40, "+"], ["L", 3, 41, "+"], ["L", 4, 41, "."], ["L", 5, 41, "+"], ["L", 6, 41, "."], ["L", 7, 41, "+"], ["L", 11, 41, "+"], ["L", 12, 41, "."], ["L", 13, 41, "."], ["L", 14, 41, "+"], ["L", 18, 41, "+"], ["L", 19, 41, "."], ["L", 20, 41, "+"], ["L", 23, 41, "+"], ["L", 25, 41, "+"], ["L", 26, 41, "."], ["L", 27, 41, "."], ["L", 28, 41, "+"], ["L", 4, 42, "+"], ["L", 5, 42, "."], ["L", 7, 42, "+"], ["L", 11, 42, "+"], ["L", 12, 42, "."], ["L", 13, 42, "."], ["L", 14, 42, "+"], ["L", 19, 42, "."], ["L", 20, 42, "+"], ["L", 24, 42, "+"], ["L", 26, 42, "+"], ["L", 4, 43, "+"], ["L", 7, 43, "+"], ["L", 11, 43, "+"], ["L", 12, 43, "."], ["L", 13, 43, "+"], ["L", 14, 43, "."], ["L", 15, 43, "+"], ["L", 19, 43, "+"], ["L", 20, 43, "."], ["L", 21, 43, "+"], ["L", 25, 43, "+"], ["L", 26, 43, "."], ["L", 27, 43, "+"], ["L", 4, 44, "+"], ["L", 5, 44, "."], ["L", 7, 44, "+"], ["L", 10, 44, "+"], ["L", 11, 44, "."], ["L", 12, 44, "+"], ["L", 14, 44, "+"], ["L", 15, 44, "."], ["L", 16, 44, "+"], ["L", 20, 44, "."], ["L", 21, 44, "+"], ["L", 26, 44, "."], ["L", 27, 44, "."], ["L", 28, 44, "+"], ["L", 6, 45, "."], ["L", 7, 45, "."], ["L", 10, 45, "+"], ["L", 12, 45, "."], ["L", 15, 45, "."], ["L", 16, 45, "."], ["L", 20, 45, "+"], ["L", 21, 45, "."], ["L", 22, 45, "+"], ["L", 27, 45, "."], ["L", 28, 45, "."], ["L", 29, 45, "+"], ["L", 6, 46, "."], ["L", 8, 46, "+"], ["L", 10, 46, "+"], ["L", 13, 46, "+"], ["L", 15, 46, "+"], ["L", 16, 46, "."], ["L", 17, 46, "+"], ["L", 21, 46, "+"], ["L", 22, 46, "."], ["L", 23, 46, "+"], ["L", 28, 46, "+"], ["L", 29, 46, "."], ["L", 30, 46, "+"], ["L", 6, 47, "+"], ["L", 8, 47, "."], ["L", 9, 47, "+"], ["L", 10, 47, "+"], ["L", 11, 47, "."], ["L", 14, 47, "+"], ["L", 16, 47, "+"], ["L", 18, 47, "+"], ["L", 22, 47, "."], ["L", 24, 47, "+"], ["L", 29, 47, "+"], ["L", 31, 47, "+"], ["L", 6, 48, "+"], ["L", 7, 48, "."], ["L", 8, 48, "."], ["L", 9, 48, "."], ["L", 10, 48, "."], ["L", 11, 48, "+"], ["L", 13, 48, "."], ["L", 14, 48, "."], ["L", 15, 48, "+"], ["L", 17, 48, "+"], ["L", 19, 48, "+"], ["L", 22, 48, "+"], ["L", 23, 48, "."], ["L", 26, 48, "+"], ["L", 30, 48, "+"], ["L", 32, 48, "+"], ["L", 7, 49, "."], ["L", 8, 49, "+"], ["L", 9, 49, "."], ["L", 10, 49, "."], ["L", 11, 49, "+"], ["L", 12, 49, "."], ["L", 13, 49, "."], ["L", 14, 49, "+"], ["L", 15, 49, "."], ["L", 16, 49, "+"], ["L", 17, 49, "+"], ["L", 20, 49, "+"], ["L", 23, 49, "+"], ["L", 24, 49, "."], ["L", 25, 49, "."], ["L", 26, 49, "+"], ["L", 27, 49, "."], ["L", 28, 49, "."], ["L", 29, 49, "+"], ["L", 30, 49, "+"], ["L", 31, 49, "+"], ["L", 32, 49, "."], ["L", 33, 49, "+"], ["L", 7, 50, "."], ["L", 8, 50, "+"], ["L", 11, 50, "+"], ["L", 13, 50, "."], ["L", 15, 50, "+"], ["L", 16, 50, "."], ["L", 17, 50, "."], ["L", 18, 50, "+"], ["L", 19, 50, "."], ["L", 20, 50, "."], ["L", 21, 50, "."], ["L", 25, 50, "."], ["L", 26, 50, "+"], ["L", 29, 50, "+"], ["L", 30, 50, "."], ["L", 31, 50, "."], ["L", 33, 50, "+"], ["L", 7, 51, "."], ["L", 8, 51, "+"], ["L", 11, 51, "+"], ["L", 13, 51, "."], ["L", 14, 51, "+"], ["L", 17, 51, "+"], ["L", 18, 51, "."], ["L", 21, 51, "."], ["L", 22, 51, "."], ["L", 23, 51, "+"], ["L", 26, 51, "."], ["L", 27, 51, "."], ["L", 28, 51, "+"], ["L", 6, 52, "+"], ["L", 7, 52, "."], ["L", 8, 52, "+"], ["L", 11, 52, "+"], ["L", 13, 52, "."], ["L", 14, 52, "+"], ["L", 18, 52, "+"], ["L", 19, 52, "."], ["L", 20, 52, "+"], ["L", 21, 52, "+"], ["L", 22, 52, "+"], ["L", 23, 52, "."], ["L", 24, 52, "."], ["L", 27, 52, "."], ["L", 28, 52, "."], ["L", 29, 52, "+"], ["L", 6, 53, "+"], ["L", 7, 53, "."], ["L", 8, 53, "+"], ["L", 10, 53, "+"], ["L", 11, 53, "."], ["L", 12, 53, "."], ["L", 13, 53, "."], ["L", 14, 53, "+"], ["L", 18, 53, "+"], ["L", 20, 53, "+"], ["L", 24, 53, "+"], ["L", 26, 53, "."], ["L", 27, 53, "+"], ["L", 28, 53, "+"], ["L", 29, 53, "."], ["L", 30, 53, "+"], ["L", 6, 54, "."], ["L", 7, 54, "+"], ["L", 10, 54, "+"], ["L", 11, 54, "."], ["L", 12, 54, "+"], ["L", 13, 54, "."], ["L", 14, 54, "+"], ["L", 18, 54, "+"], ["L", 20, 54, "+"], ["L", 24, 54, "+"], ["L", 26, 54, "+"], ["L", 27, 54, "."], ["L", 29, 54, "."], ["L", 31, 54, "+"], ["L", 5, 55, "+"], ["L", 6, 55, "."], ["L", 9, 55, "+"], ["L", 10, 55, "."], ["L", 11, 55, "+"], ["L", 12, 55, "+"], ["L", 13, 55, "."], ["L", 18, 55, "."], ["L", 20, 55, "+"], ["L", 26, 55, "+"], ["L", 29, 55, "+"], ["L", 30, 55, "+"], ["L", 31, 55, "+"], ["L", 4, 56, "+"], ["L", 6, 56, "+"], ["L", 7, 56, "+"], ["L", 8, 56, "."], ["L", 9, 56, "."], ["L", 10, 56, "+"], ["L", 12, 56, "."], ["L", 13, 56, "."], ["L", 18, 56, "."], ["L", 20, 56, "+"], ["L", 26, 56, "+"], ["L", 3, 57, "+"], ["L", 5, 57, "+"], ["L", 7, 57, "."], ["L", 8, 57, "+"], ["L", 12, 57, "."], ["L", 13, 57, "+"], ["L", 17, 57, "+"], ["L", 19, 57, "."], ["L", 20, 57, "."], ["L", 26, 57, "+"], ["L", 3, 58, "+"], ["L", 4, 58, "."], ["L", 5, 58, "+"], ["L", 11, 58, "+"], ["L", 13, 58, "+"], ["L", 16, 58, "+"], ["L", 17, 58, "."], ["L", 18, 58, "."], ["L", 19, 58, "."], ["L", 20, 58, "."], ["L", 24, 58, "+"], ["L", 26, 58, "+"], ["L", 11, 59, "+"], ["L", 12, 59, "."], ["L", 16, 59, "+"], ["L", 17, 59, "."], ["L", 19, 59, "."], ["L", 20, 59, "."], ["L", 24, 59, "+"], ["L", 25, 59, "."], ["L", 10, 60, "+"], ["L", 11, 60, "."], ["L", 12, 60, "+"], ["L", 15, 60, "+"], ["L", 16, 60, "."], ["L", 17, 60, "+"], ["L", 19, 60, "."], ["L", 20, 60, "."], ["L", 23, 60, "+"], ["L", 25, 60, "+"], ["L", 10, 61, "+"], ["L", 14, 61, "+"], ["L", 15, 61, "."], ["L", 16, 61, "+"], ["L", 19, 61, "."], ["L", 20, 61, "."], ["L", 23, 61, "+"], ["L", 24, 61, "."], ["L", 9, 62, "+"], ["L", 10, 62, "."], ["L", 11, 62, "+"], ["L", 13, 62, "."], ["L", 14, 62, "."], ["L", 15, 62, "+"], ["L", 19, 62, "."], ["L", 20, 62, "+"], ["L", 22, 62, "+"], ["L", 23, 62, "."], ["L", 24, 62, "+"], ["L", 9, 63, "+"], ["L", 10, 63, "."], ["L", 11, 63, "+"], ["L", 12, 63, "."], ["L", 13, 63, "+"], ["L", 19, 63, "."], ["L", 20, 63, "+"], ["L", 21, 63, "+"], ["L", 22, 63, "."], ["L", 23, 63, "+"], ["L", 8, 64, "+"], ["L", 9, 64, "."], ["L", 11, 64, "."], ["L", 12, 64, "+"], ["L", 21, 64, "."], ["L", 22, 64, "+"], ["L", 8, 65, "+"], ["L", 9, 65, "."], ["L", 10, 65, "+"], ["L", 19, 65, "+"], ["L", 20, 65, "+"], ["R", 25, 3, "+"], ["R", 26, 3, "."], ["R", 27, 3, "."], ["R", 28, 3, "."], ["R", 29, 3, "+"], ["R", 30, 3, "+"], ["R", 31, 3, "+"], ["R", 24, 4, "+"], ["R", 25, 4, "."], ["R", 26, 4, "+"], ["R", 28, 4, "+"], ["R", 29, 4, "."], ["R", 31, 4, "."], ["R", 32, 4, "."], ["R", 33, 4, "+"], ["R", 23, 5, "+"], ["R", 25, 5, "+"], ["R", 30, 5, "."], ["R", 31, 5, "."], ["R", 32, 5, "+"], ["R", 34, 5, "."], ["R", 35, 5, "+"], ["R", 22, 6, "+"], ["R", 23, 6, "."], ["R", 24, 6, "+"], ["R", 31, 6, "."], ["R", 32, 6, "+"], ["R", 33, 6, "."], ["R", 36, 6, "+"], ["R", 21, 7, "+"], ["R", 22, 7, "."], ["R", 23, 7, "."], ["R", 31, 7, "+"], ["R", 32, 7, "."], ["R", 33, 7, "+"], ["R", 34, 7, "."], ["R", 35, 7, "."], ["R", 36, 7, "."], ["R", 37, 7, "+"], ["R", 21, 8, "+"], ["R", 22, 8, "."], ["R", 23, 8, "+"], ["R", 32, 8, "."], ["R", 33, 8, "+"], ["R", 34, 8, "+"], ["R", 35, 8, "."], ["R", 36, 8, "+"], ["R", 37, 8, "."], ["R", 38, 8, "+"], ["R", 39, 8, "+"], ["R", 20, 9, "+"], ["R", 21, 9, "."], ["R", 22, 9, "+"], ["R", 26, 9, "+"], ["R", 28, 9, "+"], ["R", 32, 9, "."], ["R", 33, 9, "."], ["R", 34, 9, "+"], ["R", 35, 9, "."], ["R", 36, 9, "+"], ["R", 38, 9, "."], ["R", 39, 9, "."], ["R", 40, 9, "+"], ["R", 20, 10, "."], ["R", 21, 10, "."], ["R", 26, 10, "."], ["R", 27, 10, "."], ["R", 29, 10, "+"], ["R", 32, 10, "."], ["R", 33, 10, "."], ["R", 34, 10, "+"], ["R", 35, 10, "+"], ["R", 36, 10, "."], ["R", 39, 10, "."], ["R", 40, 10, "."], ["R", 5, 11, "+"], ["R", 6, 11, "."], ["R", 7, 11, "+"], ["R", 19, 11, "+"], ["R", 20, 11, "."], ["R", 21, 11, "+"], ["R", 25, 11, "+"], ["R", 26, 11, "."], ["R", 27, 11, "+"], ["R", 28, 11, "."], ["R", 29, 11, "."], ["R", 32, 11, "."], ["R", 33, 11, "+"], ["R", 35, 11, "+"], ["R", 37, 11, "+"], ["R", 39, 11, "+"], ["R", 40, 11, "."], ["R", 41, 11, "+"], ["R", 4, 12, "+"], ["R", 5, 12, "+"], ["R", 6, 12, "+"], ["R", 7, 12, "+"], ["R", 18, 12, "+"], ["R", 19, 12, "."], ["R", 20, 12, "+"], ["R", 25, 12, "+"], ["R", 26, 12, "."], ["R", 27, 12, "+"], ["R", 28, 12, "+"], ["R", 29, 12, "."], ["R", 30, 12, "+"], ["R", 32, 12, "."], ["R", 33, 12, "+"], ["R", 35, 12, "+"], ["R", 36, 12, "."], ["R", 38, 12, "+"], ["R", 40, 12, "+"], ["R", 41, 12, "."], ["R", 42, 12, "+"], ["R", 3, 13, "+"], ["R", 4, 13, "+"], ["R", 7, 13, "+"], ["R", 8, 13, "+"], ["R", 17, 13, "+"], ["R", 18, 13, "."], ["R", 19, 13, "+"], ["R", 25, 13, "+"], ["R", 26, 13, "."], ["R", 27, 13, "+"], ["R", 28, 13, "+"], ["R", 29, 13, "."], ["R", 30, 13, "."], ["R", 32, 13, "."], ["R", 33, 13, "+"], ["R", 36, 13, "."], ["R", 38, 13, "."], ["R", 39, 13, "+"], ["R", 41, 13, "+"], ["R", 42, 13, "."], ["R", 2, 14, "+"], ["R", 3, 14, "+"], ["R", 4, 14, "+"], ["R", 7, 14, "+"], ["R", 8, 14, "+"], ["R", 9, 14, "+"], ["R", 16, 14, "+"], ["R", 17, 14, "."], ["R", 18, 14, "."], ["R", 24, 14, "+"], ["R", 25, 14, "."], ["R", 26, 14, "+"], ["R", 29, 14, "+"], ["R", 30, 14, "."], ["R", 31, 14, "+"], ["R", 32, 14, "."], ["R", 33, 14, "+"], ["R", 36, 14, "+"], ["R", 40, 14, "+"], ["R", 41, 14, "+"], ["R", 42, 14, "."], ["R", 43, 14, "+"], ["R", 2, 15, "+"], ["R", 3, 15, "+"], ["R", 4, 15, "+"], ["R", 5, 15, "+"], ["R", 6, 15, "+"], ["R", 8, 15, "+"], ["R", 9, 15, "+"], ["R", 10, 15, "+"], ["R", 15, 15, "+"], ["R", 16, 15, "."], ["R", 17, 15, "+"], ["R", 23, 15, "+"], ["R", 26, 15, "+"], ["R", 29, 15, "+"], ["R", 31, 15, "+"], ["R", 32, 15, "."], ["R", 33, 15, "+"], ["R", 36, 15, "+"], ["R", 38, 15, "."], ["R", 44, 15, "+"], ["R", 2, 16, "+"], ["R", 3, 16, "+"], ["R", 6, 16, "+"], ["R", 7, 16, "+"], ["R", 10, 16, "+"], ["R", 11, 16, "+"], ["R", 13, 16, "+"], ["R", 14, 16, "."], ["R", 15, 16, "."], ["R", 16, 16, "+"], ["R", 22, 16, "+"], ["R", 24, 16, "+"], ["R", 26, 16, "+"], ["R", 28, 16, "+"], ["R", 29, 16, "."], ["R", 31, 16, "."], ["R", 32, 16, "."], ["R", 33, 16, "+"], ["R", 36, 16, "+"], ["R", 38, 16, "+"], ["R", 39, 16, "."], ["R", 40, 16, "."], ["R", 43, 16, "."], ["R", 45, 16, "+"], ["R", 2, 17, "+"], ["R", 3, 17, "+"], ["R", 4, 17, "+"], ["R", 6, 17, "+"], ["R", 7, 17, "+"], ["R", 8, 17, "+"], ["R", 9, 17, "+"], ["R", 10, 17, "+"], ["R", 11, 17, "."], ["R", 12, 17, "."], ["R", 13, 17, "."], ["R", 14, 17, "+"], ["R", 20, 17, "+"], ["R", 23, 17, "+"], ["R", 25, 17, "."], ["R", 26, 17, "."], ["R", 27, 17, "+"], ["R", 28, 17, "."], ["R", 29, 17, "."], ["R", 30, 17, "."], ["R", 33, 17, "+"], ["R", 36, 17, "+"], ["R", 38, 17, "+"], ["R", 39, 17, "."], ["R", 40, 17, "+"], ["R", 41, 17, "+"], ["R", 42, 17, "."], ["R", 44, 17, "+"], ["R", 45, 17, "."], ["R", 46, 17, "+"], ["R", 1, 18, "+"], ["R", 2, 18, "."], ["R", 4, 18, "."], ["R", 6, 18, "."], ["R", 7, 18, "."], ["R", 8, 18, "+"], ["R", 9, 18, "+"], ["R", 10, 18, "+"], ["R", 11, 18, "+"], ["R", 19, 18, "+"], ["R", 20, 18, "."], ["R", 21, 18, "+"], ["R", 22, 18, "."], ["R", 23, 18, "+"], ["R", 26, 18, "."], ["R", 27, 18, "."], ["R", 28, 18, "+"], ["R", 29, 18, "+"], ["R", 33, 18, "+"], ["R", 36, 18, "+"], ["R", 38, 18, "+"], ["R", 39, 18, "."], ["R", 40, 18, "."], ["R", 41, 18, "+"], ["R", 42, 18, "."], ["R", 43, 18, "+"], ["R", 45, 18, "."], ["R", 46, 18, "+"], ["R", 2, 19, "."], ["R", 3, 19, "."], ["R", 16, 19, "+"], ["R", 17, 19, "+"], ["R", 20, 19, "+"], ["R", 22, 19, "+"], ["R", 23, 19, "."], ["R", 26, 19, "."], ["R", 27, 19, "+"], ["R", 29, 19, "+"], ["R", 31, 19, "."], ["R", 33, 19, "+"], ["R", 36, 19, "+"], ["R", 38, 19, "+"], ["R", 39, 19, "+"], ["R", 40, 19, "."], ["R", 41, 19, "+"], ["R", 42, 19, "+"], ["R", 43, 19, "."], ["R", 45, 19, "+"], ["R", 46, 19, "."], ["R", 47, 19, "+"], ["R", 2, 20, "+"], ["R", 3, 20, "."], ["R", 4, 20, "+"], ["R", 11, 20, "+"], ["R", 12, 20, "."], ["R", 14, 20, "."], ["R", 15, 20, "."], ["R", 17, 20, "."], ["R", 18, 20, "+"], ["R", 19, 20, "."], ["R", 20, 20, "+"], ["R", 22, 20, "+"], ["R", 23, 20, "."], ["R", 24, 20, "."], ["R", 25, 20, "."], ["R", 26, 20, "."], ["R", 27, 20, "+"], ["R", 29, 20, "+"], ["R", 31, 20, "+"], ["R", 32, 20, "."], ["R", 33, 20, "."], ["R", 36, 20, "+"], ["R", 38, 20, "+"], ["R", 40, 20, "."], ["R", 41, 20, "+"], ["R", 42, 20, "+"], ["R", 43, 20, "."], ["R", 44, 20, "."], ["R", 45, 20, "."], ["R", 46, 20, "."], ["R", 47, 20, "+"], ["R", 3, 21, "+"], ["R", 4, 21, "."], ["R", 5, 21, "+"], ["R", 6, 21, "+"], ["R", 7, 21, "."], ["R", 11, 21, "."], ["R", 12, 21, "+"], ["R", 13, 21, "."], ["R", 14, 21, "+"], ["R", 15, 21, "+"], ["R", 16, 21, "."], ["R", 17, 21, "."], ["R", 19, 21, "+"], ["R", 20, 21, "."], ["R", 21, 21, "+"], ["R", 22, 21, "+"], ["R", 23, 21, "."], ["R", 26, 21, "+"], ["R", 29, 21, "+"], ["R", 31, 21, "+"], ["R", 32, 21, "."], ["R", 33, 21, "."], ["R", 34, 21, "+"], ["R", 36, 21, "+"], ["R", 38, 21, "+"], ["R", 40, 21, "."], ["R", 41, 21, "."], ["R", 42, 21, "+"], ["R", 43, 21, "+"], ["R", 44, 21, "."], ["R", 46, 21, "+"], ["R", 4, 22, "+"], ["R", 6, 22, "."], ["R", 7, 22, "+"], ["R", 8, 22, "+"], ["R", 9, 22, "."], ["R", 10, 22, "+"], ["R", 13, 22, "."], ["R", 14, 22, "+"], ["R", 16, 22, "+"], ["R", 17, 22, "."], ["R", 18, 22, "+"], ["R", 20, 22, "+"], ["R", 23, 22, "+"], ["R", 25, 22, "+"], ["R", 26, 22, "."], ["R", 27, 22, "+"], ["R", 29, 22, "+"], ["R", 30, 22, "."], ["R", 32, 22, "+"], ["R", 33, 22, "."], ["R", 34, 22, "+"], ["R", 36, 22, "+"], ["R", 38, 22, "+"], ["R", 40, 22, "+"], ["R", 41, 22, "."], ["R", 42, 22, "+"], ["R", 43, 22, "+"], ["R", 45, 22, "."], ["R", 46, 22, "."], ["R", 47, 22, "+"], ["R", 4, 23, "+"], ["R", 8, 23, "+"], ["R", 10, 23, "+"], ["R", 13, 23, "."], ["R", 14, 23, "+"], ["R", 16, 23, "+"], ["R", 19, 23, "."], ["R", 21, 23, "."], ["R", 22, 23, "."], ["R", 23, 23, "+"], ["R", 25, 23, "+"], ["R", 26, 23, "."], ["R", 27, 23, "+"], ["R", 29, 23, "+"], ["R", 30, 23, "."], ["R", 32, 23, "+"], ["R", 33, 23, "."], ["R", 34, 23, "+"], ["R", 36, 23, "+"], ["R", 38, 23, "+"], ["R", 40, 23, "+"], ["R", 41, 23, "."], ["R", 42, 23, "+"], ["R", 44, 23, "."], ["R", 45, 23, "+"], ["R", 46, 23, "."], ["R", 47, 23, "+"], ["R", 4, 24, "+"], ["R", 5, 24, "."], ["R", 6, 24, "+"], ["R", 7, 24, "+"], ["R", 8, 24, "."], ["R", 10, 24, "."], ["R", 11, 24, "+"], ["R", 13, 24, "."], ["R", 15, 24, "+"], ["R", 16, 24, "."], ["R", 17, 24, "."], ["R", 18, 24, "+"], ["R", 19, 24, "."], ["R", 20, 24, "+"], ["R", 21, 24, "+"], ["R", 22, 24, "."], ["R", 23, 24, "+"], ["R", 26, 24, "."], ["R", 27, 24, "+"], ["R", 28, 24, "+"], ["R", 29, 24, "."], ["R", 30, 24, "."], ["R", 32, 24, "+"], ["R", 33, 24, "."], ["R", 34, 24, "+"], ["R", 36, 24, "+"], ["R", 40, 24, "+"], ["R", 41, 24, "."], ["R", 42, 24, "+"], ["R", 44, 24, "."], ["R", 45, 24, "+"], ["R", 46, 24, "."], ["R", 47, 24, "."], ["R", 48, 24, "+"], ["R", 5, 25, "+"], ["R", 6, 25, "."], ["R", 7, 25, "."], ["R", 8, 25, "+"], ["R", 9, 25, "."], ["R", 10, 25, "."], ["R", 11, 25, "."], ["R", 13, 25, "."], ["R", 14, 25, "+"], ["R", 15, 25, "."], ["R", 16, 25, "."], ["R", 17, 25, "+"], ["R", 18, 25, "+"], ["R", 19, 25, "."], ["R", 20, 25, "+"], ["R", 22, 25, "+"], ["R", 23, 25, "."], ["R", 26, 25, "."], ["R", 27, 25, "+"], ["R", 28, 25, "+"], ["R", 29, 25, "."], ["R", 30, 25, "+"], ["R", 32, 25, "+"], ["R", 33, 25, "."], ["R", 34, 25, "+"], ["R", 36, 25, "+"], ["R", 37, 25, "."], ["R", 40, 25, "+"], ["R", 41, 25, "."], ["R", 42, 25, "+"], ["R", 44, 25, "+"], ["R", 45, 25, "."], ["R", 46, 25, "+"], ["R", 47, 25, "."], ["R", 48, 25, "+"], ["R", 6, 26, "+"], ["R", 7, 26, "."], ["R", 8, 26, "+"], ["R", 9, 26, "."], ["R", 10, 26, "+"], ["R", 11, 26, "+"], ["R", 13, 26, "+"], ["R", 14, 26, "+"], ["R", 15, 26, "."], ["R", 16, 26, "."], ["R", 18, 26, "+"], ["R", 20, 26, "+"], ["R", 22, 26, "+"], ["R", 23, 26, "."], ["R", 25, 26, "+"], ["R", 27, 26, "+"], ["R", 28, 26, "+"], ["R", 29, 26, "."], ["R", 32, 26, "+"], ["R", 33, 26, "."], ["R", 34, 26, "+"], ["R", 36, 26, "."], ["R", 37, 26, "."], ["R", 40, 26, "+"], ["R", 42, 26, "."], ["R", 44, 26, "+"], ["R", 45, 26, "."], ["R", 46, 26, "+"], ["R", 47, 26, "."], ["R", 48, 26, "+"], ["R", 6, 27, "."], ["R", 7, 27, "."], ["R", 9, 27, "."], ["R", 10, 27, "+"], ["R", 11, 27, "+"], ["R", 12, 27, "."], ["R", 14, 27, "+"], ["R", 15, 27, "."], ["R", 16, 27, "+"], ["R", 18, 27, "."], ["R", 20, 27, "+"], ["R", 22, 27, "+"], ["R", 24, 27, "+"], ["R", 27, 27, "."], ["R", 29, 27, "."], ["R", 32, 27, "."], ["R", 33, 27, "."], ["R", 35, 27, "+"], ["R", 36, 27, "."], ["R", 37, 27, "+"], ["R", 40, 27, "+"], ["R", 43, 27, "+"], ["R", 44, 27, "+"], ["R", 45, 27, "."], ["R", 46, 27, "+"], ["R", 47, 27, "."], ["R", 48, 27, "+"], ["R", 5, 28, "+"], ["R", 8, 28, "."], ["R", 9, 28, "."], ["R", 12, 28, "+"], ["R", 13, 28, "+"], ["R", 16, 28, "+"], ["R", 17, 28, "+"], ["R", 20, 28, "+"], ["R", 21, 28, "+"], ["R", 24, 28, "."], ["R", 28, 28, "."], ["R", 29, 28, "."], ["R", 32, 28, "."], ["R", 33, 28, "+"], ["R", 35, 28, "+"], ["R", 36, 28, "."], ["R", 37, 28, "+"], ["R", 40, 28, "+"], ["R", 41, 28, "."], ["R", 42, 28, "."], ["R", 43, 28, "."], ["R", 44, 28, "+"], ["R", 47, 28, "."], ["R", 48, 28, "+"], ["R", 5, 29, "+"], ["R", 6, 29, "+"], ["R", 7, 29, "+"], ["R", 8, 29, "+"], ["R", 9, 29, "+"], ["R", 10, 29, "."], ["R", 12, 29, "."], ["R", 13, 29, "."], ["R", 14, 29, "."], ["R", 15, 29, "."], ["R", 16, 29, "+"], ["R", 17, 29, "."], ["R", 18, 29, "+"], ["R", 20, 29, "+"], ["R", 21, 29, "."], ["R", 22, 29, "."], ["R", 24, 29, "."], ["R", 26, 29, "+"], ["R", 28, 29, "."], ["R", 29, 29, "."], ["R", 32, 29, "."], ["R", 33, 29, "+"], ["R", 35, 29, "+"], ["R", 36, 29, "."], ["R", 40, 29, "+"], ["R", 41, 29, "."], ["R", 42, 29, "+"], ["R", 43, 29, "."], ["R", 44, 29, "+"], ["R", 46, 29, "."], ["R", 47, 29, "+"], ["R", 10, 30, "+"], ["R", 12, 30, "+"], ["R", 13, 30, "."], ["R", 15, 30, "."], ["R", 17, 30, "+"], ["R", 18, 30, "+"], ["R", 21, 30, "."], ["R", 22, 30, "+"], ["R", 23, 30, "+"], ["R", 24, 30, "+"], ["R", 25, 30, "."], ["R", 26, 30, "+"], ["R", 28, 30, "."], ["R", 29, 30, "."], ["R", 31, 30, "+"], ["R", 32, 30, "."], ["R", 33, 30, "+"], ["R", 34, 30, "+"], ["R", 35, 30, "."], ["R", 36, 30, "."], ["R", 40, 30, "."], ["R", 41, 30, "+"], ["R", 43, 30, "."], ["R", 44, 30, "."], ["R", 46, 30, "+"], ["R", 10, 31, "+"], ["R", 12, 31, "."], ["R", 13, 31, "."], ["R", 14, 31, "."], ["R", 16, 31, "."], ["R", 17, 31, "+"], ["R", 18, 31, "."], ["R", 21, 31, "."], ["R", 24, 31, "."], ["R", 25, 31, "."], ["R", 28, 31, "."], ["R", 29, 31, "."], ["R", 31, 31, "+"], ["R", 32, 31, "."], ["R", 33, 31, "+"], ["R", 34, 31, "+"], ["R", 36, 31, "."], ["R", 40, 31, "."], ["R", 41, 31, "+"], ["R", 43, 31, "+"], ["R", 46, 31, "+"], ["R", 10, 32, "+"], ["R", 11, 32, "."], ["R", 12, 32, "+"], ["R", 14, 32, "+"], ["R", 15, 32, "."], ["R", 16, 32, "+"], ["R", 17, 32, "."], ["R", 18, 32, "."], ["R", 19, 32, "+"], ["R", 20, 32, "."], ["R", 21, 32, "+"], ["R", 23, 32, "+"], ["R", 25, 32, "+"], ["R", 27, 32, "+"], ["R", 29, 32, "."], ["R", 32, 32, "+"], ["R", 33, 32, "+"], ["R", 34, 32, "."], ["R", 35, 32, "."], ["R", 36, 32, "."], ["R", 39, 32, "+"], ["R", 40, 32, "."], ["R", 41, 32, "+"], ["R", 46, 32, "+"], ["R", 14, 33, "+"], ["R", 17, 33, "."], ["R", 20, 33, "."], ["R", 21, 33, "+"], ["R", 22, 33, "+"], ["R", 23, 33, "."], ["R", 25, 33, "+"], ["R", 27, 33, "+"], ["R", 29, 33, "."], ["R", 30, 33, "+"], ["R", 33, 33, "+"], ["R", 34, 33, "."], ["R", 35, 33, "+"], ["R", 36, 33, "."], ["R", 37, 33, "+"], ["R", 39, 33, "+"], ["R", 40, 33, "."], ["R", 41, 33, "+"], ["R", 44, 33, "."], ["R", 46, 33, "+"], ["R", 14, 34, "+"], ["R", 15, 34, "+"], ["R", 16, 34, "+"], ["R", 20, 34, "."], ["R", 21, 34, "+"], ["R", 22, 34, "+"], ["R", 25, 34, "+"], ["R", 27, 34, "."], ["R", 29, 34, "."], ["R", 30, 34, "."], ["R", 31, 34, "+"], ["R", 32, 34, "+"], ["R", 33, 34, "."], ["R", 34, 34, "+"], ["R", 35, 34, "+"], ["R", 36, 34, "."], ["R", 37, 34, "+"], ["R", 39, 34, "."], ["R", 40, 34, "."], ["R", 41, 34, "+"], ["R", 44, 34, "+"], ["R", 45, 34, "."], ["R", 46, 34, "+"], ["R", 19, 35, "+"], ["R", 20, 35, "."], ["R", 21, 35, "+"], ["R", 22, 35, "."], ["R", 23, 35, "."], ["R", 27, 35, "."], ["R", 30, 35, "."], ["R", 32, 35, "."], ["R", 33, 35, "."], ["R", 34, 35, "+"], ["R", 35, 35, "+"], ["R", 36, 35, "."], ["R", 37, 35, "+"], ["R", 38, 35, "+"], ["R", 39, 35, "."], ["R", 41, 35, "+"], ["R", 44, 35, "+"], ["R", 45, 35, "."], ["R", 46, 35, "+"], ["R", 19, 36, "+"], ["R", 20, 36, "."], ["R", 21, 36, "."], ["R", 22, 36, "."], ["R", 23, 36, "."], ["R", 24, 36, "."], ["R", 26, 36, "+"], ["R", 30, 36, "+"], ["R", 31, 36, "+"], ["R", 33, 36, "."], ["R", 34, 36, "+"], ["R", 36, 36, "."], ["R", 37, 36, "+"], ["R", 38, 36, "+"], ["R", 39, 36, "."], ["R", 40, 36, "."], ["R", 41, 36, "."], ["R", 42, 36, "+"], ["R", 44, 36, "+"], ["R", 45, 36, "."], ["R", 46, 36, "+"], ["R", 19, 37, "."], ["R", 21, 37, "."], ["R", 22, 37, "+"], ["R", 23, 37, "."], ["R", 24, 37, "+"], ["R", 26, 37, "."], ["R", 27, 37, "."], ["R", 28, 37, "+"], ["R", 29, 37, "."], ["R", 30, 37, "+"], ["R", 31, 37, "."], ["R", 33, 37, "+"], ["R", 36, 37, "."], ["R", 37, 37, "+"], ["R", 38, 37, "."], ["R", 39, 37, "+"], ["R", 40, 37, "+"], ["R", 41, 37, "."], ["R", 42, 37, "+"], ["R", 44, 37, "+"], ["R", 45, 37, "."], ["R", 46, 37, "+"], ["R", 19, 38, "+"], ["R", 20, 38, "+"], ["R", 22, 38, "+"], ["R", 23, 38, "."], ["R", 24, 38, "+"], ["R", 25, 38, "+"], ["R", 27, 38, "+"], ["R", 28, 38, "+"], ["R", 29, 38, "."], ["R", 30, 38, "."], ["R", 32, 38, "."], ["R", 33, 38, "+"], ["R", 36, 38, "."], ["R", 37, 38, "+"], ["R", 39, 38, "+"], ["R", 41, 38, "+"], ["R", 42, 38, "."], ["R", 44, 38, "+"], ["R", 45, 38, "."], ["R", 46, 38, "+"], ["R", 22, 39, "."], ["R", 23, 39, "."], ["R", 24, 39, "+"], ["R", 26, 39, "."], ["R", 27, 39, "+"], ["R", 28, 39, "+"], ["R", 32, 39, "+"], ["R", 35, 39, "+"], ["R", 36, 39, "."], ["R", 38, 39, "+"], ["R", 41, 39, "+"], ["R", 42, 39, "."], ["R", 43, 39, "+"], ["R", 44, 39, "+"], ["R", 45, 39, "."], ["R", 46, 39, "+"], ["R", 21, 40, "+"], ["R", 22, 40, "."], ["R", 23, 40, "."], ["R", 26, 40, "+"], ["R", 29, 40, "+"], ["R", 30, 40, "+"], ["R", 32, 40, "+"], ["R", 35, 40, "+"], ["R", 38, 40, "+"], ["R", 41, 40, "+"], ["R", 42, 40, "."], ["R", 43, 40, "+"], ["R", 44, 40, "+"], ["R", 45, 40, "."], ["R", 46, 40, "+"], ["R", 21, 41, "+"], ["R", 22, 41, "."], ["R", 23, 41, "."], ["R", 24, 41, "+"], ["R", 26, 41, "+"], ["R", 29, 41, "+"], ["R", 30, 41, "."], ["R", 31, 41, "+"], ["R", 35, 41, "+"], ["R", 36, 41, "."], ["R", 37, 41, "."], ["R", 38, 41, "+"], ["R", 42, 41, "+"], ["R", 43, 41, "."], ["R", 44, 41, "+"], ["R", 45, 41, "."], ["R", 46, 41, "+"], ["R", 23, 42, "+"], ["R", 25, 42, "+"], ["R", 29, 42, "+"], ["R", 30, 42, "."], ["R", 35, 42, "+"], ["R", 36, 42, "."], ["R", 37, 42, "."], ["R", 38, 42, "+"], ["R", 42, 42, "+"], ["R", 44, 42, "."], ["R", 45, 42, "+"], ["R", 22, 43, "+"], ["R", 23, 43, "."], ["R", 24, 43, "+"], ["R", 28, 43, "+"], ["R", 29, 43, "."], ["R", 30, 43, "+"], ["R", 34, 43, "+"], ["R", 35, 43, "."], ["R", 36, 43, "+"], ["R", 37, 43, "."], ["R", 38, 43, "+"], ["R", 42, 43, "+"], ["R", 45, 43, "+"], ["R", 21, 44, "+"], ["R", 22, 44, "."], ["R", 23, 44, "."], ["R", 28, 44, "+"], ["R", 29, 44, "."], ["R", 33, 44, "+"], ["R", 34, 44, "."], ["R", 35, 44, "+"], ["R", 37, 44, "+"], ["R", 38, 44, "."], ["R", 39, 44, "+"], ["R", 42, 44, "+"], ["R", 44, 44, "."], ["R", 45, 44, "+"], ["R", 20, 45, "+"], ["R", 21, 45, "."], ["R", 22, 45, "."], ["R", 27, 45, "+"], ["R", 28, 45, "."], ["R", 29, 45, "+"], ["R", 33, 45, "."], ["R", 34, 45, "."], ["R", 37, 45, "."], ["R", 39, 45, "+"], ["R", 42, 45, "."], ["R", 43, 45, "."], ["R", 19, 46, "+"], ["R", 20, 46, "."], ["R", 21, 46, "+"], ["R", 26, 46, "+"], ["R", 27, 46, "."], ["R", 28, 46, "+"], ["R", 32, 46, "+"], ["R", 33, 46, "."], ["R", 34, 46, "+"], ["R", 36, 46, "+"], ["R", 39, 46, "+"], ["R", 41, 46, "+"], ["R", 43, 46, "."], ["R", 18, 47, "+"], ["R", 20, 47, "+"], ["R", 25, 47, "+"], ["R", 27, 47, "."], ["R", 31, 47, "+"], ["R", 33, 47, "+"], ["R", 35, 47, "+"], ["R", 38, 47, "."], ["R", 39, 47, "+"], ["R", 40, 47, "+"], ["R", 41, 47, "."], ["R", 43, 47, "+"], ["R", 17, 48, "+"], ["R", 19, 48, "+"], ["R", 23, 48, "+"], ["R", 26, 48, "."], ["R", 27, 48, "+"], ["R", 30, 48, "+"], ["R", 32, 48, "+"], ["R", 34, 48, "+"], ["R", 35, 48, "."], ["R", 36, 48, "."], ["R", 38, 48, "+"], ["R", 39, 48, "."], ["R", 40, 48, "."], ["R", 41, 48, "."], ["R", 42, 48, "."], ["R", 43, 48, "+"], ["R", 16, 49, "+"], ["R", 17, 49, "."], ["R", 18, 49, "+"], ["R", 19, 49, "+"], ["R", 20, 49, "+"], ["R", 21, 49, "."], ["R", 22, 49, "."], ["R", 23, 49, "+"], ["R", 24, 49, "."], ["R", 25, 49, "."], ["R", 26, 49, "+"], ["R", 29, 49, "+"], ["R", 32, 49, "+"], ["R", 33, 49, "+"], ["R", 34, 49, "."], ["R", 35, 49, "+"], ["R", 36, 49, "."], ["R", 37, 49, "."], ["R", 38, 49, "+"], ["R", 39, 49, "."], ["R", 40, 49, "."], ["R", 41, 49, "+"], ["R", 42, 49, "."], ["R", 16, 50, "+"], ["R", 18, 50, "."], ["R", 19, 50, "."], ["R", 20, 50, "+"], ["R", 23, 50, "+"], ["R", 24, 50, "."], ["R", 28, 50, "."], ["R", 29, 50, "."], ["R", 30, 50, "."], ["R", 31, 50, "+"], ["R", 32, 50, "."], ["R", 33, 50, "."], ["R", 34, 50, "+"], ["R", 36, 50, "."], ["R", 38, 50, "+"], ["R", 41, 50, "+"], ["R", 42, 50, "."], ["R", 21, 51, "+"], ["R", 22, 51, "."], ["R", 23, 51, "."], ["R", 26, 51, "+"], ["R", 27, 51, "."], ["R", 28, 51, "."], ["R", 31, 51, "."], ["R", 32, 51, "+"], ["R", 35, 51, "+"], ["R", 36, 51, "."], ["R", 38, 51, "+"], ["R", 41, 51, "+"], ["R", 42, 51, "."], ["R", 20, 52, "+"], ["R", 21, 52, "."], ["R", 22, 52, "."], ["R", 25, 52, "."], ["R", 26, 52, "."], ["R", 27, 52, "+"], ["R", 28, 52, "+"], ["R", 29, 52, "+"], ["R", 30, 52, "."], ["R", 31, 52, "+"], ["R", 35, 52, "+"], ["R", 36, 52, "."], ["R", 38, 52, "+"], ["R", 41, 52, "+"], ["R", 42, 52, "."], ["R", 43, 52, "+"], ["R", 19, 53, "+"], ["R", 20, 53, "."], ["R", 21, 53, "+"], ["R", 22, 53, "+"], ["R", 23, 53, "."], ["R", 25, 53, "+"], ["R", 29, 53, "+"], ["R", 31, 53, "+"], ["R", 35, 53, "+"], ["R", 36, 53, "."], ["R", 37, 53, "."], ["R", 38, 53, "."], ["R", 39, 53, "+"], ["R", 41, 53, "+"], ["R", 42, 53, "."], ["R", 43, 53, "+"], ["R", 18, 54, "+"], ["R", 20, 54, "."], ["R", 22, 54, "."], ["R", 23, 54, "+"], ["R", 25, 54, "+"], ["R", 29, 54, "+"], ["R", 31, 54, "+"], ["R", 35, 54, "+"], ["R", 36, 54, "."], ["R", 37, 54, "+"], ["R", 38, 54, "."], ["R", 39, 54, "+"], ["R", 42, 54, "+"], ["R", 43, 54, "."], ["R", 18, 55, "+"], ["R", 19, 55, "+"], ["R", 20, 55, "+"], ["R", 23, 55, "+"], ["R", 29, 55, "+"], ["R", 31, 55, "."], ["R", 36, 55, "."], ["R", 37, 55, "+"], ["R", 38, 55, "+"], ["R", 39, 55, "."], ["R", 40, 55, "+"], ["R", 43, 55, "."], ["R", 44, 55, "+"], ["R", 23, 56, "+"], ["R", 29, 56, "+"], ["R", 31, 56, "."], ["R", 36, 56, "."], ["R", 37, 56, "."], ["R", 39, 56, "+"], ["R", 40, 56, "."], ["R", 41, 56, "."], ["R", 42, 56, "+"], ["R", 43, 56, "+"], ["R", 45, 56, "+"], ["R", 23, 57, "+"], ["R", 29, 57, "."], ["R", 30, 57, "."], ["R", 32, 57, "+"], ["R", 36, 57, "+"], ["R", 37, 57, "."], ["R", 41, 57, "+"], ["R", 42, 57, "."], ["R", 44, 57, "+"], ["R", 46, 57, "+"], ["R", 23, 58, "+"], ["R", 25, 58, "+"], ["R", 29, 58, "."], ["R", 30, 58, "."], ["R", 31, 58, "."], ["R", 32, 58, "."], ["R", 33, 58, "+"], ["R", 36, 58, "+"], ["R", 38, 58, "+"], ["R", 44, 58, "+"], ["R", 45, 58, "."], ["R", 46, 58, "+"], ["R", 24, 59, "."], ["R", 25, 59, "+"], ["R", 29, 59, "."], ["R", 30, 59, "."], ["R", 32, 59, "."], ["R", 33, 59, "+"], ["R", 37, 59, "."], ["R", 38, 59, "+"], ["R", 24, 60, "+"], ["R", 26, 60, "+"], ["R", 29, 60, "."], ["R", 30, 60, "."], ["R", 32, 60, "+"], ["R", 33, 60, "."], ["R", 34, 60, "+"], ["R", 37, 60, "+"], ["R", 38, 60, "."], ["R", 39, 60, "+"], ["R", 25, 61, "."], ["R", 26, 61, "+"], ["R", 29, 61, "."], ["R", 30, 61, "."], ["R", 33, 61, "+"], ["R", 34, 61, "."], ["R", 35, 61, "+"], ["R", 39, 61, "+"], ["R", 25, 62, "+"], ["R", 26, 62, "."], ["R", 27, 62, "+"], ["R", 29, 62, "+"], ["R", 30, 62, "."], ["R", 34, 62, "+"], ["R", 35, 62, "."], ["R", 36, 62, "."], ["R", 38, 62, "+"], ["R", 39, 62, "."], ["R", 40, 62, "+"], ["R", 26, 63, "+"], ["R", 27, 63, "."], ["R", 28, 63, "+"], ["R", 29, 63, "+"], ["R", 30, 63, "."], ["R", 36, 63, "+"], ["R", 37, 63, "."], ["R", 38, 63, "+"], ["R", 39, 63, "."], ["R", 40, 63, "+"], ["R", 27, 64, "+"], ["R", 28, 64, "."], ["R", 37, 64, "+"], ["R", 38, 64, "."], ["R", 40, 64, "."], ["R", 41, 64, "+"], ["R", 29, 65, "+"], ["R", 30, 65, "+"], ["R", 39, 65, "+"], ["R", 40, 65, "."], ["R", 41, 65, "+"]];
    resizeCanvas();
    renderWings();

    function resizeCanvas() {
        const rect = stage.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        renderWings();
    });

    function renderWings() {
        if (!wingPoints.length || canvas.width === 0) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const terminalEl = document.getElementById('bunker-hero-ascii-wrapper');
        const termRect = terminalEl ? terminalEl.getBoundingClientRect() : null;

        // Determina a largura do terminal central relativamente ao palco
        const termWidth = termRect ? termRect.width : 980;
        const centerX = canvas.width / 2;
        const halfTerm = termWidth / 2;

        // Asas gigantes e imponentes: calculamos o tamanho de cada caractere ASCII
        // para cobrir com clareza e proporção o espaço lateral ao terminal
        const charH = Math.max(12, Math.min(22, (canvas.height * 0.98) / 67));
        const charW = charH * 0.64;
        const wingPixelWidth = 50 * charW;

        ctx.font = `bold ${Math.round(charH * 0.96)}px "JetBrains Mono", monospace`;
        ctx.textBaseline = 'top';

        // Raio de iluminação reativa ao rato
        const hoverRadius = Math.max(180, charH * 12);
        const hoverRadiusSq = hoverRadius * hoverRadius;

        // Âncoras: a ponta interior da asa encaixa na lateral do terminal com ligeira sobreposição orgânica
        const leftWingAnchorX = centerX - halfTerm + (charW * 4) - wingPixelWidth;
        const rightWingAnchorX = centerX + halfTerm - (charW * 4);
        const startY = (canvas.height - (67 * charH)) / 2;

        for (let i = 0; i < wingPoints.length; i++) {
            const pt = wingPoints[i];
            const side = pt[0];
            const cx = pt[1];
            const cy = pt[2];
            const char = pt[3];

            let px = (side === 'L') ? (leftWingAnchorX + cx * charW) : (rightWingAnchorX + cx * charW);
            let py = startY + cy * charH;

            let distSq = Infinity;
            if (mouse.active) {
                const dx = px - mouse.x;
                const dy = py - mouse.y;
                distSq = dx * dx + dy * dy;
            }

            if (distSq < hoverRadiusSq) {
                // ILUMINAÇÃO REATIVA AO RATO: Vermelho neon cyber / âmbar com brilho incandescente
                const factor = 1 - Math.sqrt(distSq) / hoverRadius;
                const alpha = Math.min(1, 0.45 + factor * 0.55);
                ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
                ctx.shadowColor = '#ef4444';
                ctx.shadowBlur = Math.round(14 * factor);
            } else {
                // ESTADO EM REPOUSO: Linhas de contorno discretas em stealth dark slate
                ctx.fillStyle = 'rgba(100, 116, 139, 0.42)';
                ctx.shadowBlur = 0;
            }

            ctx.fillText(char, px, py);
        }
    }

    stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;

        if (!animFrame) {
            animFrame = requestAnimationFrame(() => {
                renderWings();
                animFrame = 0;
            });
        }
    });

    stage.addEventListener('mouseenter', () => {
        mouse.active = true;
    });

    stage.addEventListener('mouseleave', () => {
        mouse.active = false;
        renderWings();
    });
}

/* ==========================================================================
   11. DESAFIO DA FLAG (CTF DOS BASTIDORES & CABEÇALHOS CAPTIVE PORTAL)
   ========================================================================== */
function initCtfConsoleBanner() {
    // 1. Armazena o token em Cookie para quem inspeciona Application / Cookies
    try {
        document.cookie = "planb_portal_token=YzQwX3EzX3kwX2Zyel9lcnB1cnZiXzEzMzc=; path=/; max-age=86400; SameSite=Lax";
    } catch (e) { }

    // 2. Simula requisição ao endpoint do portal (regista no DevTools Network tab)
    try {
        if (location.protocol.startsWith('http')) { fetch('captive-portal.json').catch(() => { }); }
    } catch (e) { }

    // 3. Banner para hackers na consola
    console.log(
        "%c[PLAN B // SECURITY PERIMETER DETECTED]\n" +
        "%c" +
        "  ██████╗ ██╗      █████╗ ███╗   ██╗    ██████╗ \n" +
        "  ██╔══██╗██║     ██╔══██╗████╗  ██║    ██╔══██╗\n" +
        "  ██████╔╝██║     ███████║██╔██╗ ██║    ██████╔╝\n" +
        "  ██╔═══╝ ██║     ██╔══██║██║╚██╗██║    ██╔══██╗\n" +
        "  ██║     ███████╗██║  ██║██║ ╚████║    ██████╔╝\n" +
        "  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝ \n\n" +
        "[CAPTIVE PORTAL SNIFFER - 10.42.0.1]\n" +
        "HTTP/1.1 200 OK &middot; Server: PlanB-Daemon/1.33.7 (Covilhã Hub)\n" +
        "X-Riddle: \"Ao fim de 63 dias, César colheu 13 maçãs; comeu uma por hora e quando acabou eram 2 da manhã do dia seguinte... No total foram 64 dias e 13 maçãs.\"\n" +
        "Captured Token: YzQwX3EzX3kwX2Zyel9lcnB1cnZiXzEzMzc=\n\n" +
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
                    bastidoresStatus.textContent = "[x] Flag incorreta. Analisa o token e tenta novamente.";
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




