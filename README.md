# Missão Diaconal — Igreja Luterana de Pirabeiraba (IECLB)

Repositório do site institucional da **Missão Diaconal**, pertencente à Igreja Luterana de Pirabeiraba (IECLB), localizada em Joinville/SC. 

O projeto foi desenvolvido para ser publicado via **GitHub Pages** e pode ser acessado em:  
👉 [https://luterana-pirabeiraba.github.io/missao-diaconal/](https://luterana-pirabeiraba.github.io/missao-diaconal/)

---

## 📋 Sobre o Projeto

O site visa apresentar o propósito da Missão Diaconal à comunidade, divulgar as ações do Brechó Solidário, prestar informações de contato/localização e permitir que a equipe mantenha a lista de necessidades atualizada de forma simples.

### Conteúdo e Rotina Retratados
* **Cultos Abertos:** Todas as terças-feiras, das 14h/15h às 16h, abertos a toda a comunidade.
* **PGM (Pequenos Grupos de Multiplicação):** 10 minutos de reflexão em pequeno grupo após os cultos.
* **Ação Social:** Distribuição eventual de cestas básicas em datas específicas.

---

## 🏛️ Estrutura de Páginas

* `index.html`: Página inicial com o propósito da instituição, horários de cultos, versículo bíblico, galeria/fotos e links de navegação.
* `brecho.html`: Vitrine do Brechó Solidário. Exibe peças (mock) com preço, tamanho e estado de conservação a partir de dados dinâmicos (sem sistema de carrinho ou checkout).
* `ajudar.html`: Página institucional contendo endereço completo, mapa interativo, links para WhatsApp e Instagram, horário de atendimento e lista de necessidades atuais.

---

## 🛠️ Arquitetura Técnica

O site é **estático** (HTML5, CSS3 e JavaScript puro), construído sem dependência de frameworks ou sistemas de backend complexos, garantindo alta performance e facilidade de manutenção por pessoas leigas.

### Organização de Pastas e Arquivos
```text
missao-diaconal/
├── index.html
├── brecho.html
├── ajudar.html
├── README.md
├── css/
│   └── style.css          # Estilos globais e identidade visual
├── js/
│   ├── main.js            # Lógica do menu responsivo e necessidades
│   └── vitrine.js         # Renderização da vitrine do brechó
├── img/                   # Imagens gerais e 5 logos institucionais
├── produtos.json          # Base de dados em JSON para os itens do Brechó
└── necessidades.json      # Base de dados em JSON para a lista de doações necessárias
```

## LICENSE

© 2026 luterana-pirabeiraba. All rights reserved.
This repository is public for GitHub Pages deployment purposes. No permission is granted to copy, modify, distribute, or reuse the source code without prior written permission.