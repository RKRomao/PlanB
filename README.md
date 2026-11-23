# ☕ PLAN B // Lo-Fi Cybercafé & Hacker Lounge
> **Tudo Numa Só Página:** Website de apresentação completo com estética Lo-Fi, Hacker & Geek em tons de expresso e obsidiana, arte ASCII, pastelaria de autor, galeria visual, linha de merchandise, estudo de localizações com preços e condições de aluguer, e orçamento integral de montagem.

---

## O Que Encontras na Página Única (`index.html`)

A página foi concebida para ser 100% autónoma e autossuficiente — **não é necessário abrir nenhum ficheiro `.md`** para consultar qualquer informação:

1. **Header & Sys-Bar:** Status do servidor em tempo real, ping, sintetizador de som Lo-Fi (chuva + vinil + acordes) e interruptor CRT Scanlines.
2. **Hero & Manifesto:** Banner e chávena de café em arte ASCII animada com fumo em tempo real.
3. **Secção Dedicada de Arquitetura & Visual do Espaço:**
   - Balcão de café de especialidade em nogueira maciça e latão escovado com La Marzocco (`assets/espaco_cafe_bar.jpg`).
   - Estações hacker com monitores 4K foscos, teclados mecânicos e USB-C PD 100W (`assets/espaco_workstations.jpg`).
   - Canto Lo-Fi com poltronas em couro conhaque, gira-discos e fones audiófilos (`assets/espaco_lofi_lounge.jpg`).
   - Visão panorâmica da atmosfera com design biofílico e conforto acústico a 45-50 dB (`assets/ambiente_cybercafe.jpg`).
   - Painel aprofundado de materiais, iluminação circadiana 2200K e engenharia fonoabsorvente.
4. **Bastidores // Bunker Red Team & Centro Hacker Underground (`bastidores.html`):**
   - Estilo industrial e street: betão aparente, hazard stripes, autocolantes hacker e calhas metálicas.
   - Fotografias dos espaços: Red Team War Room (`assets/bastidores_war_room.jpg`), Bancada Maker de Hardware Hacking (`assets/bastidores_hardware_lab.jpg`), Mini-Rack Homelab 12U (`assets/bastidores_server_vault.jpg`) e Estação de Impressão 3D (`assets/bastidores_impressora_3d.jpg`).
   - Sequência de transição cinematográfica com vídeo de inicialização (`Loading.mp4`).
5. **As Duas Especialidades de Assinatura:**
   - **Pão de Ló Tradicional Sem Recheio (€ 4.20)**: Massa fofa, leve e arejada feita exclusivamente com ovos, açúcar e farinha.
   - **Mil-Folhas de Café de Especialidade (€ 4.80)**: Massa folhada estaladiça com manteiga DOP dos Açores, creme pasteleiro de café arábica e cacau 80%.
5. **Carta Completa & Menu Interativo:** Cafetaria de especialidade, cold brew, matcha, chás e snacks geeks filtráveis por categoria.
6. **Estações Hacker & Lounge:** Especificações das 3 zonas (Root Access 4K, Lo-Fi Vinyl Lounge, Maker Bench).
7. **Loja de Merchandising ("Hardware & Apparel"):** Hoodies 450 gsm, t-shirts, canecas artesanais de Barcelos, desk mats XXL, keycaps artesanais e autocolantes com botões de reserva direta.
8. **Secção Dedicada de Localização (Preços & Condições Contratuais):**
   - **Porto (Bonfim / 24 de Agosto):** € 2.100/mês (€ 12.70/m²), 165 m², 3 meses de carência para obras, saída de fumos 300mm existente, metro a 2 min.
   - **Lisboa (Hub Criativo do Beato / Marvila):** € 3.200/mês (€ 17.70/m²), 180 m², ambiente industrial Web Summit, pré-instalação de AVAC e potência industrial.
   - **Porto (Asprela / Polo FEUP):** € 1.950/mês (€ 12.18/m²), 160 m², junto a 30.000 estudantes de engenharia e UPTEC.
   - **Porto (Cedofeita / Quarteirão das Artes):** € 2.600/mês (€ 18.57/m²), 140 m² com pátio privativo de 35 m².
   - **Lisboa (Saldanha / Arroios / Próx. IST):** € 3.600/mês (€ 24.00/m²), 150 m², centro financeiro e tecnológico.
9. **Orçamento Total de Montagem (CapEx & OpEx):**
   - CapEx Total: **€ 137.330** (Obras/Fit-out €39.700, Cafetaria La Marzocco/Unox €31.790, Tech & Lab €24.480, Mobiliário nogueira/couro €21.040, Stock €10.150, Reserva €10.170).
   - OpEx Mensal: **€ 10.520/mês** &middot; Break-even: ~110 clientes/dia &middot; Payback: 18 a 24 meses.
10. **Terminal CLI Interativo:** Emulador bash completo com comandos (`help`, `spaces`, `specials`, `paodelo`, `milfolhas`, `merch`, `locations`, `budget`, `wifi`, `lofi`, `bastidores`).
11. **Módulo de Áudio Autónomo (`lofi-audio.js`):** Sintetizador Web Audio API procedural com progressão de 8 acordes jazz (Fmaj9, Em7, Dm9, G13, Cmaj9, A7b9, G9sus4), bateria suave com swing humano (kick abafado, tarola de fita, hi-hat) e emulador de ruído de vinil.

---

## 🚀 Como Abrir a Página

Basta abrir o `index.html` em qualquer navegador:

```bash
# Abrir diretamente no navegador (Linux)
xdg-open index.html

# Ou executar um servidor web local
python3 -m http.server 8080
# Depois aceder a http://localhost:8080
```
