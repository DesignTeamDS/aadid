# AADID: protótipo do novo site

Protótipo navegável do redesenho do site da AADID (Associação dos Amigos das Deficiências Intelectuais e Desenvolvimentais), para apresentação ao cliente. O site final será desenvolvido em WordPress + Elementor Pro.

## Ver online
Publicado com GitHub Pages: Settings › Pages › Deploy from a branch › `main` / `(root)`.

## Ver localmente
Abrir com um servidor estático na pasta, por exemplo:

    python3 -m http.server 8000

e ir a http://localhost:8000.

## Estrutura
- `*.html`: páginas (todas com caminhos relativos)
- `styles.css`, `app.js`: estilos e comportamento partilhados
- `img/`: fotografias (banco de imagens Unsplash), logótipo, logótipos de parceiros, organigrama em SVG
- `docs/`: relatórios de contas, planos de atividades e documentos institucionais em PDF (de aadid.pt/files)

Dependências externas: apenas Google Fonts (Poppins e Atkinson Hyperlegible).
