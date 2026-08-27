# Missão Diaconal — Igreja Luterana de Pirabeiraba

Repositório do site institucional da **Missão Diaconal**, pertencente à Igreja Luterana de Pirabeiraba.

O projeto foi desenvolvido para ser publicado via **GitHub Pages** e pode ser acessado em:  
👉 [https://luterana-pirabeiraba.github.io/missao-diaconal/](https://luterana-pirabeiraba.github.io/missao-diaconal/)

---

## 📋 Sobre o Projeto

O site visa apresentar o propósito da Missão Diaconal à comunidade, divulgar as suas ações, prestar informações de contato/localização e permitir que a equipe mantenha a lista de necessidades atualizada de forma simples.

### Conteúdos:
* **Cultos Abertos:** Todas as terças-feiras, das 15h às 16h, abertos a toda a comunidade.
* **PGM (Pequenos Grupos de Multiplicação):** 10 minutos de reflexão em pequeno grupo após os cultos.
* **Ação Social:** Distribuição eventual de cestas básicas em datas específicas.

---

## ⚙️ Atualização de Conteúdo

Para atualizar os produtos do brechó ou a lista de necessidades, editar diretamente os arquivos na raiz do projeto:
- **produtos.json**: Cadastro e alteração dos itens exibidos na página do brechó.
- **necessidades**.json: Cadastro de itens que a diaconia precisa no momento.

Para editar peças e necessidades do site, confira o [Guia](./GUIA.md).

## 🛠️ Arquitetura Técnica

O site ainda é **estático** (isto é, HTML5, CSS3 e JavaScript puro), construído sem dependência de frameworks ou sistemas de backend complexos, garantindo melhor performance e facilidade de manutenção.

### Organização de Pastas e Arquivos
```text
missao-diaconal/
│
├── css/
│   └── style.css
│
├── data/
│   ├── necessidades.json
│   └── produtos.json
│
├── img/
│   ├── logos/
│   │   ├── background_igreja.png
│   │   ├── logo_diaconiaIECLB.png
│   │   ├── logo_IECLB.png
│   │   ├── logo_igreja_branco.png
│   │   ├── logo_igreja_preto.png
│   │   ├── logo_missao_diaconal1.png
│   │   ├── logo_missao_diaconal2.png
│   │   ├── logo_missao_diaconal3.png
│   │   └── logo_missao_diaconal4.png
│   │
│   └── missao_diaconal/
│       ├── cestas_basicas.jpeg
│       └── curso_culinaria_2025.jpeg
│
├── js/
│   ├── main.js
│   └── vitrine.js
│
├── index.html
├── brecho.html
├── ajudar.html
└── README.md
```

## LICENSE

© 2026 luterana-pirabeiraba. All rights reserved.
This repository is public for GitHub Pages deployment purposes. No permission is granted to copy, modify, distribute, or reuse the source code without prior written permission.