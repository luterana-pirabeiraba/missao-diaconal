# Brechó Missão Diaconal

Link do site: https://luterana-pirabeiraba.github.io/missao-diaconal/

## Arquivos
```bash
index.html → página inicial
ajudar.html → página institucional (endereço, mapa, necessidades)
produtos.json → peças da vitrine "O que temos"
necessidades.json → itens de "O que está fazendo falta"
css/style.css → cores, fontes e visual do site
js/main.js → menu mobile + carregamento das necessidades
js/vitrine.js → vitrine de roupas + modal "Ver detalhes"
```

## O que editar em cada caso

**Trocar peça ou preço da vitrine** → `produtos.json`
```json
{
  "nome": "Camisa casual",
  "tamanho": "M",
  "estado": "Bom estado",
  "preco": "R$ 15,00",
  "icone": "camisa"
}
```
`icone` aceita: `camisa`, `camiseta`, `calca`, `vestido`, `jaqueta`, `blusa`.

**Trocar necessidades ("O que está fazendo falta")** → `necessidades.json`
```json
{
  "titulo": "Roupas de inverno",
  "descricao": "Casacos, blusas de frio e cobertores em bom estado.",
  "urgente": true
}
```
`urgente: true` mostra a etiqueta "Urgente"; `false` não mostra.

**Trocar cores** → `css/style.css`, bloco no topo:
```css
:root{
  --white: #FFFFFF;
  --black: #111111;
  --beige: #EDE5D8;
  --beige-deep: #DCC9A3;
}
```

**Colocar logo ou foto real** → no `.html`, troque o placeholder:
```html
<!-- antes -->
<span class="logo-slot">Logo Igreja</span>
<!-- depois -->
<img src="assets/logo-igreja.png" alt="Logo Igreja Luterana de Pirabeiraba">
```
```html
<!-- antes -->
<div class="gallery-item">Foto em breve</div>
<!-- depois -->
<img src="assets/foto-1.jpg" alt="Descrição da foto" class="gallery-item">
```

**Preencher telefone/WhatsApp/e-mail** → `ajudar.html`
```html
<!-- antes -->
<p class="info-placeholder">Informação a preencher</p>
<!-- depois -->
<p>(47) 99999-9999</p>
```

**Trocar textos fixos (títulos, frases)** → direto no `index.html` ou `ajudar.html`.

⚠️ Nos `.json`, cuidado com vírgulas e chaves `{ }` — se a lista sumir do
site após uma edição, o erro costuma ser aí.

## LICENSE

© 2026 luterana-pirabeiraba. All rights reserved.
This repository is public for GitHub Pages deployment purposes. No permission is granted to copy, modify, distribute, or reuse the source code without prior written permission.