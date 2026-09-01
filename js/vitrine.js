/* ===========================================================
   VITRINE.JS — usado só no index.html
   Cuida da seção "O que temos" (cartões de roupas) e do
   modal que abre ao clicar em "Ver detalhes".
   Para editar as peças, tamanhos e preços, editar o arquivo
   produtos.json, não é preciso mexer aqui.
   =========================================================== */

/* Ícones simples em SVG para cada tipo de peça (não usa fotos) */
const icones = {
  camisa: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M17 8 L24 12 L31 8 L40 14 L35 20 L31 17 L31 40 L17 40 L17 17 L13 20 L8 14 Z"/></svg>',
  camiseta: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M18 8 L24 11 L30 8 L39 15 L34 21 L30 18 L30 40 L18 40 L18 18 L14 21 L9 15 Z"/></svg>',
  calca: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M15 8 H33 L34 40 L27 40 L24 20 L21 40 L14 40 Z"/></svg>',
  vestido: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M19 8 H29 L31 16 L36 40 H12 L17 16 Z"/><path d="M19 8 L14 14 M29 8 L34 14"/></svg>',
  jaqueta: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M17 8 L24 12 L31 8 L40 14 L35 20 L31 17 L31 40 L17 40 L17 17 L13 20 L8 14 Z"/><path d="M24 12 V40 M19 8 L21 40 M29 8 L27 40"/></svg>',
  blusa: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M18 9 L24 13 L30 9 L38 15 L33 21 L30 18 L30 40 L18 40 L18 18 L15 21 L10 15 Z"/></svg>'
};

/* Config da fonte de dados da vitrine, trocar pela URL da API quando 
houver backend (mesma ideia do NECESSIDADES_ENDPOINT em main.js). */
const PRODUTOS_ENDPOINT = 'data/produtos.json';

let produtosCache = [];

async function carregarVitrine() {
  const container = document.getElementById('vitrine-grid');
  if (!container) return;

  try {
    const resposta = await fetch(PRODUTOS_ENDPOINT);
    const dados = await resposta.json();
    produtosCache = dados.itens || [];

    if (produtosCache.length === 0) {
      container.innerHTML = '<p>Nenhuma peça cadastrada no momento.</p>';
      return;
    }

    container.innerHTML = produtosCache.map((item, i) => `
      <div class="product-card">
        <div class="product-media">${
          item.imagem
            ? `<img src="${escapeHTML(item.imagem)}" alt="${escapeHTML(item.nome)}">`
            : (icones[item.icone] || icones.camiseta)
        }</div>
        <div class="product-body">
          <h3 class="product-name">${escapeHTML(item.nome)}</h3>
          <p class="product-meta">Tamanho ${escapeHTML(item.tamanho)} · ${escapeHTML(item.estado)}</p>
          <div class="product-footer">
            <span class="product-price">${escapeHTML(item.preco)}</span>
            <button class="link-btn" data-index="${i}">Ver detalhes</button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.link-btn').forEach(btn => {
      btn.addEventListener('click', () => abrirModal(produtosCache[Number(btn.dataset.index)]));
    });

  } catch (erro) {
    container.innerHTML = '<p>Não foi possível carregar a vitrine agora. Se você abriu este arquivo diretamente (duplo clique), isso é esperado — funciona normalmente quando o site está publicado (ex: GitHub Pages).</p>';
    console.error('Erro ao carregar produtos.json:', erro);
  }
}

function abrirModal(item) {
  const modalOverlay = document.getElementById('modal-overlay');
  if (!modalOverlay) return;
  document.getElementById('modal-title').textContent = item.nome;
  document.getElementById('modal-meta').textContent = `Tamanho ${item.tamanho} · ${item.estado}`;
  document.getElementById('modal-price').textContent = item.preco;
  modalOverlay.classList.add('open');
}

function iniciarModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  if (!modalOverlay || !modalClose) return;

  modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarModal();
  carregarVitrine();
});