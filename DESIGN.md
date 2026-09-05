---
name: Novo Protagon Cuiabá
description: Palco cinematográfico verde escuro e dourado, ancorado no retrato e na marca oficiais.
colors:
  background: "oklch(0.137 0.024 157)"
  foreground: "oklch(0.96 0.008 85)"
  primary: "oklch(0.79 0.14 87)"
  primary-foreground: "oklch(0.21 0.05 80)"
  muted-foreground: "oklch(0.74 0.026 95)"
  border: "oklch(0.85 0.038 90 / 0.16)"
  ring: "oklch(0.78 0.13 85)"
  landing-gold: "#e8c04c"
  landing-ink: "#020b07"
  landing-line: "rgb(245 245 240 / 12%)"
  landing-muted: "#b6c1b8"
typography:
  headline:
    fontFamily: '"Bebas Neue", "Arial Narrow", ui-sans-serif, sans-serif'
    fontSize: "clamp(2.35rem, 4.25vw, 4.4rem)"
    lineHeight: 1.04
    letterSpacing: "0.025em"
  title:
    fontFamily: '"Bebas Neue", "Arial Narrow", ui-sans-serif, sans-serif'
    fontSize: "28px"
    letterSpacing: "0.03em"
  body:
    fontFamily: '"Manrope", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
  label:
    fontFamily: '"Manrope", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.23em"
components:
  button-gold:
    textColor: "#13200c"
    rounded: "6px"
    padding: "18px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#fff"
    rounded: "5px"
    height: "44px"
  button-access-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "5px"
    minHeight: "52px"
  button-access-standard:
    backgroundColor: "rgb(255 255 255 / 4%)"
    textColor: "#fff"
    rounded: "5px"
    minHeight: "52px"
  access-card:
    backgroundColor: "linear-gradient(180deg, rgb(11 31 20 / 95%), rgb(4 17 10 / 98%))"
    rounded: "8px"
    padding: "0"
  access-card-featured:
    backgroundColor: "linear-gradient(180deg, rgb(16 46 29 / 98%), rgb(5 24 14 / 98%))"
    rounded: "8px"
    padding: "0"
---

# Design System: Novo Protagon Cuiabá

## Overview

**Creative North Star: "Palco cinematográfico de Cuiabá"**

A apresentação usa verde quase preto, luz verde difusa e dourado para dar presença ao retrato original de Wendell Carvalho e à marca oficial. As imagens formam a atmosfera; os textos e controles mantêm uma hierarquia legível, com títulos condensados, pequenos rótulos espaçados e parágrafos abertos.

A direção cinematográfica fornecida pelo usuário é a autoridade visual registrada no início de `src/components/landing/landing.css`, substituindo a seed `433dec43`. Este documento descreve o código final e as capturas de apresentação em 1440 e 390 pixels. A composição central do hero é específica dessa superfície; as demais seções usam grades, linhas divisórias e campos de cor para organizar o conteúdo. A implementação mantém React/TanStack Start, Tailwind, Radix e Lucide existentes, sem acrescentar dependência.

**Key Characteristics:**

- Verde quase preto com luz verde e acentos dourados.
- Retrato e marca oficiais preservados como arquivos de imagem.
- Títulos condensados, corpo Manrope e rótulos em caixa alta.
- Seções abertas, bordas finas e cartões de acesso discretos.
- Movimento curto de entrada, luz ambiente lenta e foco visível.

## Colors

A paleta combina verdes escuros estruturais, texto claro e dourados de navegação, ênfase e ação. Os valores normativos estão no frontmatter; correspondem às variáveis existentes, preservando os formatos CSS de origem. As rampas tonais do sidecar são amostras sintetizadas para o painel de documentação, não tokens adicionais implementados no site.

### Primary

- **Dourado da landing (`landing-gold`)**: detalhes do hero, chamada do cabeçalho, preços, ícones de benefícios e contornos de foco.
- **Dourado do tema (`primary`)**: destaques nos títulos, ícones, rótulos e botão do acesso em destaque. A classe histórica de “gradiente dourado” hoje aplica essa cor sólida.
- **Tinta da ação (`primary-foreground`)**: texto sobre botões dourados do componente de interface existente.
- **Anel dourado (`ring`)**: anel de foco herdado do componente Button, acompanhado do contorno da landing.

O botão cinematográfico tem seu próprio gradiente linear metálico e texto escuro. Seu CSS completo está no sidecar; o gradiente não é um token `backgroundColor`. O dourado da landing e o dourado do tema são valores distintos no código, sem normalização documental entre eles.

### Neutral

- **Floresta noturna (`background`)**: fundo global; os blocos `:root` e `.dark` compartilham a mesma paleta.
- **Preto esverdeado (`landing-ink`)**: palco do hero e base de suas máscaras e sobreposições.
- **Marfim do tema (`foreground`)**: texto padrão. Vários títulos das seções usam branco explícito.
- **Sálvia clara (`landing-muted`)**: corpo secundário da landing, legendas e detalhes do hero; sobrescreve a classe simples de texto secundário.
- **Cinza do tema (`muted-foreground`)**: valor global preservado, inclusive em utilitários com opacidade.
- **Linha da landing (`landing-line`)**: separação de navegação, listas, estatísticas, FAQ e cartões.
- **Borda do tema (`border`)**: borda semântica global dos componentes existentes.

## Typography

**Display Font:** Bebas Neue, com Arial Narrow e sans-serif de fallback.

**Body Font:** Manrope, com a pilha de sistema registrada no frontmatter. As famílias são carregadas pelo Google Fonts no stylesheet global; Manrope solicita os pesos 400, 500, 600, 700 e 800.

**Character:** A fonte condensada dá escala aos títulos sem alargar os parágrafos. Manrope sustenta texto informativo e controles. A marca é uma imagem oficial: a tipografia do logotipo não é reconstruída com fontes web.

### Hierarchy

- **Headline**: títulos `h2`, em caixa alta e com quebra balanceada. O frontmatter registra a regra geral; há tamanhos próprios para local, encerramento, jornada e mobile.
- **Title**: títulos dos cartões de acesso usam Bebas Neue entre 2,2 e 3 rem; no mobile ficam em 2,35 rem.
- **Body**: parágrafos principais usam 14 pixels e entrelinha de 28 pixels; a partir de `sm`, os textos longos usam 16 pixels e entrelinha de 32 pixels quando essa variante está presente. Até 600 pixels, parágrafos com a classe de corpo pequeno recebem 15 pixels e entrelinha 1,85. Não há medida universal em caracteres.
- **Label**: a configuração do frontmatter é a sobrancelha de seção com traço lateral; outras sobrancelhas centralizadas mantêm peso 800. A largura de letras anteriormente mais aberta é reduzida a 0,23em pelo CSS da landing.
- **Navigation**: links do cabeçalho usam 10 pixels, peso 700 e espaçamento de 0,12em; ficam com 9 pixels até 1100 pixels de viewport.
- **Hero tagline**: usa `clamp(11px, 1.35vw, 18px)`, entrelinha 1,6 e espaçamento de 0,35em na base; possui ajustes nos limites de 959 e 600 pixels. A frase enfatizada tem peso 800.
- **FAQ**: perguntas usam Manrope, caixa normal, peso 600 e 15 pixels, reduzidos para 14 pixels no mobile.

O título acessível do hero é um `h1` visualmente oculto. O cabeçalho visual é a própria marca oficial enquadrada.

## Layout

O cabeçalho é sticky, com altura de 76 pixels e camada 50. Seu interior tem largura máxima de 1600 pixels e padding horizontal `clamp(20px, 4.4vw, 84px)`. O conteúdo geral das seções tem largura máxima de 1280 pixels, centralizado. Esse limite específico da landing prevalece sobre classes utilitárias de largura máxima menores; o FAQ tem uma exceção explícita de 900 pixels. O vídeo tem proporção 16:9 e largura máxima de 64rem.

As seções usam padding vertical `clamp(72px, 8vw, 128px)` e horizontal `clamp(24px, 5vw, 84px)`, com exceções explícitas para vídeo, palestrante, local, acessos, jornada e encerramento. Os alvos de âncora reservam a altura do cabeçalho mais 24 pixels; o início da página reserva apenas o cabeçalho.

### Hero e imagens

O hero ocupa pelo menos `max(660px, calc(100svh - var(--header-height)))`, com conteúdo central alinhado ao rodapé da área. A ordem de profundidade é cenário, luz radial, leão decorativo, retrato, notas laterais e conteúdo. O retrato está centralizado horizontalmente, com largura `clamp(400px, 60svh, 700px)` e altura proporcional. A máscara desaparece gradualmente entre 61% e 100% de sua altura. Um campo escuro atrás do conteúdo aumenta a leitura sobre a fotografia.

A marca tem largura `min(740px, 60vw, 88svh)` no hero, 130 pixels no cabeçalho e 225 pixels no rodapé. O componente usa uma moldura com proporção `1060 / 432` e `overflow: hidden`; a imagem original fica em posição absoluta, com largura de `144.90566%`, deslocamento horizontal de `-16.98113%` e vertical de `-67.59259%`. Isso enquadra o conteúdo do PNG transparente sem redesenhar ou alterar o arquivo.

Os arquivos oficiais permanecem como fallback em PNG/JPEG. A primeira dobra serve versões AVIF equivalentes: `public/uploads/hero-wendell.avif`, `public/uploads/protagon-brand.avif`, `public/uploads/protagon-lion.avif` e `public/uploads/cuiaba-atmosphere.avif`. Juntas, elas somam aproximadamente 286 KiB, ante cerca de 5,6 MiB dos quatro arquivos originais. O retrato e o cenário são pré-carregados; os demais recebem prioridade explícita. O cenário é decorativo; retrato, marca e arte do evento têm textos alternativos.

As três artes de acesso preservam transparência e proporção 5:3. Cada uma tem versão AVIF e fallback PNG, dimensões explícitas, `loading="lazy"` e `decoding="async"`. A imagem usa `object-fit: contain`, sem ampliação ou recorte, sobre um halo verde discreto. As informações visuais também aparecem em texto HTML no card, por isso as artes são decorativas para leitores de tela.

### Responsive behavior

| Condição implementada             | Comportamento                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `min-width: 1600px`               | Retrato com largura `min(63svh, 750px)`; notas laterais a 12% do topo e com 11 pixels; conteúdo do hero com 44 pixels de padding inferior.                                                                                                                                                                                  |
| `max-width: 1100px`               | Notas laterais ocultas; cabeçalho com padding horizontal de 28 pixels; navegação compactada.                                                                                                                                                                                                                                |
| `max-width: 959px`                | Cabeçalho com 68 pixels; navegação desktop substituída por menu nativo `details`; marca do cabeçalho com 120 pixels; retrato com largura `min(76vw, 66svh)`; marca do hero com `min(680px, calc(100vw - 64px))`; estatísticas passam a linhas; apresentação do palestrante usa duas colunas `0.9fr 1.1fr`.                  |
| `max-width: 600px`                | Hero com mínimo de `max(710px, calc(100svh - var(--header-height)))`; retrato a 12 pixels do topo e com largura `min(104vw, 465px)`; marca em 100% da área disponível, limitada a 430 pixels; fatos do hero permanecem em três colunas com ícone acima; data e vídeo se empilham.                                           |
| `max-width: 600px`, demais seções | Padding geral de 70 × 24 pixels; apresentação do palestrante inverte a ordem visual para texto seguido de retrato; quatro estatísticas usam grade 2 × 2; público vira lista de linhas numeradas; painel do local ocupa a largura total e tem mínimo de 540 pixels; benefícios e logística do evento passam para uma coluna. |
| Tailwind `sm`, `min-width: 40rem` | Ativa as variantes existentes de 640 pixels, incluindo grades de duas colunas, corpo ampliado e alinhamento horizontal de algumas ações.                                                                                                                                                                                    |
| Tailwind `lg`, `min-width: 64rem` | Ativa as variantes existentes de 1024 pixels: evento em duas colunas, público em quatro e grades amplas do restante da página.                                                                                                                                                                                              |

A grade de acessos usa uma coluna por padrão, duas a partir de 760 pixels e três a partir de 1200 pixels. Os cartões alinham pelo topo e preservam alturas naturais conforme a quantidade de benefícios e cursos.

As regras máximas da landing e as variantes mínimas do Tailwind coexistem; 600, 640, 959 e 1024 pixels são limites diferentes. No mobile, o cenário do hero usa posição `75% top` e opacidade 0,72; a máscara escura do conteúdo passa a ser vertical. A imagem original continua proporcional.

## Elevation & Depth

A profundidade vem sobretudo de cenário, máscaras, luz radial e pequenas diferenças tonais. Listas, estatísticas e conteúdo editorial ficam abertos, separados por linhas. Os cartões de acesso usam superfícies verde quase pretas; o VIP recebe borda dourada e uma sombra ambiente discreta. O selo de garantia mantém os círculos, mas seu fundo interno e a sombra herdada foram removidos pelo CSS final.

### Shadow Vocabulary

- **Ação cinematográfica**: `0 8px 26px rgb(0 0 0 / 28%)`, sob o botão dourado.
- **Menu móvel**: `0 16px 30px rgb(0 0 0 / 25%)`, abaixo do painel aberto.
- **Notas laterais do hero**: `text-shadow: 0 2px 8px rgb(0 0 0 / 85%)`, para leitura sobre o cenário.

## Motion

O momento focal do hero conclui em aproximadamente 720 ms. Cenário, Wendell, marca, CTA e informações já começam parcialmente visíveis; Wendell finaliza sua entrada em 620 ms com deslocamento de 14 pixels, escala de 1,012 e blur de 1,5 pixel. A marca finaliza em 520 ms e recebe um único reflexo dourado. Tagline, CTA, fatos e detalhes usam atrasos curtos entre 120 e 250 ms. Isso preserva o movimento cinematográfico sem criar a sensação de que o conteúdo está esperando para carregar.

Em ponteiros precisos e viewports a partir de 960 pixels, o hero usa profundidade de 2–7 pixels entre cenário, luz, leão e retrato, com interpolação por `requestAnimationFrame`. A luz radial acompanha a posição suavizada do ponteiro. O painel de Cuiabá usa parallax vertical limitado a 20 pixels. Nenhum desses valores atualiza estado React.

Um único `IntersectionObserver`, com limiar de 0,15 e execução única, coordena os reveals das seções. Eyebrow, heading, texto e ação usam distâncias próprias entre 8 e 24 pixels. Fotografias selecionadas usam máscara por `clip-path` e escala de 1,05; listas, métricas, FAQ, rodapé e cartões entram em stagger de 76 ms. As animações são executadas pela Web Animations API e liberadas ao terminar, preservando hover e foco. O conteúdo é visível por padrão caso JavaScript ou a API de animação falhe.

Os tokens principais são `220ms` para feedback, `420ms` para transições, `680ms` para reveal e `1050ms` para a camada cinematográfica, todos apoiados por `cubic-bezier(0.22, 1, 0.36, 1)`. A luz ambiente alterna opacidade em 18 segundos. Em até 600 pixels, as distâncias são limitadas a 18 pixels; tracking de ponteiro e parallax ficam desativados abaixo de 960 pixels. `prefers-reduced-motion: reduce` elimina entradas, movimento contínuo, tracking, parallax e rolagem suave.

## Shapes

O sistema usa cantos pequenos: 6 pixels no botão cinematográfico e no vídeo, 8 pixels nos cartões de acesso e 5 pixels nos botões com o atributo da landing, inclusive o botão final que também usa o estilo dourado. O local e o painel final mantêm formas amplas sem aparência de cartão arredondado. A garantia e os pequenos contêineres de check mantêm círculos.

O recorte da marca é retangular e proporcional. As fotografias do palestrante usam máscaras graduais, sem recorte artificial do rosto. No retrato secundário, a transição ocorre entre 75% e 100% da imagem.

## Components

### Buttons

As ações têm texto forte, caixa alta e pouco arredondamento. O botão cinematográfico usa gradiente dourado, altura mínima de 60 pixels, padding de 18 × 32 pixels e ícone de seta; o hero limita a largura a 360 pixels, reduzida a 330 pixels até 600 pixels de viewport, onde a altura mínima é 57 pixels e o texto tem 13 pixels.

Os botões secundários existentes são transparentes ou levemente brancos, com borda tênue; no hover recebem borda e texto dourados, com fundo dourado de baixa opacidade. O acesso VIP usa o dourado sólido. Os botões dos cartões têm altura mínima de 52 pixels, permitem quebra de texto e não usam sombra. Os controles marcados da landing sobem 2 pixels no hover e retornam à origem com escala de 0,985 quando ativos, em 220–240 ms. Setas avançam 3 pixels no hover e no foco. O botão cinematográfico também aumenta o brilho para 1,08.

Todos os elementos focáveis da landing recebem contorno dourado de 2 pixels com afastamento de 5 pixels. O Button existente pode manter seu anel semântico adicional.

### Cards / Containers

Os três níveis de acesso usam cartões verticais de altura natural. A arte ocupa uma faixa 5:3 no topo; abaixo dela, rótulo, título, descrição, preço, benefícios, cursos presentes e ação formam uma única coluna. A borda normal é a linha da landing; o VIP tem borda dourada com 55% de opacidade. Em ponteiros precisos, o hover sobe 4 pixels, clareia fundo e borda e aplica uma sombra deslocada de baixa opacidade. Em touch, o deslocamento de hover é removido.

Os blocos de público, experiência e estatísticas usam bordas e respiro, sem se tornarem cartões preenchidos. O vídeo usa uma moldura escura de proporção fixa; a incorporação YouTube existente permanece. A documentação visual não confirma a reprodução do vídeo.

### Navigation

O cabeçalho reúne marca oficial, links âncora e uma chamada de acesso compacta com o mesmo gradiente dourado da ação principal do hero. Os links desktop ficam dourados no hover. Abaixo de 960 pixels, o menu `details` abre um painel de largura total sob o cabeçalho. Seu disparador tem alvo mínimo de 44 × 44 pixels. A escolha de um link fecha o menu; Escape fecha e devolve o foco ao disparador. O link para pular ao conteúdo aparece quando recebe foco.

### FAQ

O acordeão Radix existente permite um item aberto, com fechamento opcional. As linhas têm borda inferior e fundo transparente; a linha aberta recebe branco a 2%. A seta gira 180 graus no estado aberto, com transição de 200 ms. As perguntas usam padding de 26 × 12 pixels, reduzido a 22 × 2 pixels até 600 pixels de viewport. Os textos provisórios pertencem ao conteúdo existente e não constituem informação factual validada.

## Do's and Don'ts

### Do:

- **Do** preserve o retrato e a marca oficiais como imagens proporcionais, usando o enquadramento CSS existente.
- **Do** mantenha a combinação de verde quase preto, luz verde e dourado presente na implementação.
- **Do** use Bebas Neue para títulos e Manrope para leitura e controles.
- **Do** preserve foco visível, alvos do menu móvel e a resposta à preferência de movimento reduzido.
- **Do** confira a composição e a ausência de rolagem horizontal nas larguras de 390, 430, 768, 1366, 1440 e 1920 pixels definidas no briefing.

### Don't:

- **Don't** redesenhe o logotipo com texto ou substitua o retrato original por uma imagem gerada.
- **Don't** transforme os valores de cor da landing e do tema em um único token sem uma mudança de implementação deliberada.
- **Don't** suponha que a composição central do hero seja uma grade obrigatória para todas as seções.
- **Don't** trate informações provisórias preservadas, links `#` ou a presença do iframe como validação de conteúdo, checkout ou reprodução de vídeo.
