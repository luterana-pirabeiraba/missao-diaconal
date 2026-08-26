# Como editar o conteúdo do site (arquivos `.json`)

O conteúdo dinâmico do site é controlado por dois arquivos JSON. Não é necessário mexer em HTML, CSS ou JS, só editar esses arquivos e publicar.

### `produtos.json` — peças do brechó (exibidas em `brecho.html`)

```json
{
  "itens": [
    {
      "nome": "Camisa casual",
      "tamanho": "M",
      "estado": "Bom estado",
      "preco": "R$ 15,00",
      "icone": "camisa",
      "imagem": "img/brecho/camisa-casual.jpg"
    }
  ]
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `nome` | sim | Nome da peça exibido no cartão |
| `tamanho` | sim | Tamanho (ex.: `M`, `40`) |
| `estado` | sim | Estado de conservação (ex.: `Bom estado`, `Seminova`) |
| `preco` | sim | Preço já formatado (ex.: `R$ 15,00`) |
| `icone` | sim | Ícone padrão exibido caso não haja foto. Valores aceitos: `camisa`, `camiseta`, `calca`, `vestido`, `jaqueta`, `blusa` |
| `imagem` | não | Caminho de uma foto real (`.jpg`/`.png`) da peça. Se preenchido, substitui o ícone |

### `necessidades.json` — lista "O que estamos precisando" (exibida em `ajudar.html`)

```json
{
  "itens": [
    {
      "titulo": "Cobertores",
      "descricao": "Precisamos de cobertores de inverno em bom estado",
      "urgente": true
    }
  ]
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `titulo` | sim | Título curto da necessidade |
| `descricao` | sim | Texto explicando a necessidade |
| `urgente` | não | Se `true`, exibe a etiqueta "Urgente" no cartão |

### Regras gerais

- Ambos os arquivos usam a chave `"itens"` como uma lista, pode ter quantos itens quiser, ou remover todos (a página mostra uma mensagem de "nada cadastrado no momento").
- Se um arquivo tiver erro de formatação (JSON inválido), a seção correspondente mostra uma mensagem de erro amigável em vez de quebrar a página.
- Fotos referenciadas em `imagem` precisam existir de fato na pasta do projeto (ex.: `img/brecho/`), caminho incorreto resulta em imagem quebrada.