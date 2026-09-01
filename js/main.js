/* ===========================================================
   MAIN.JS — usado nas DUAS páginas (index.html e ajudar.html).
   Cuida do menu mobile (hambúrguer) e da lista de necessidades.
   =========================================================== */

/* ---------- Config da fonte de dados das necessidades ----------
  Hoje aponta para um arquivo JSON estático. Quando houver backend,
  basta trocar esta URL pelo endpoint da API (ex.: "/api/necessidades"),
  o resto do código (fetch + montagem dos cartões) não precisa mudar. */
const NECESSIDADES_ENDPOINT = 'data/necessidades.json';

/* ---------- Escapa texto antes de inserir no HTML ----------
   Protege contra HTML/código indevido em textos vindos de fora
   (hoje o JSON, futuramente um backend/painel admin).
   Também é usada pelo vitrine.js, que carrega depois deste arquivo. */
function escapeHTML(texto) {
  const div = document.createElement('div');
  div.textContent = String(texto ?? '');
  return div.innerHTML;
}

/* ---------- Menu mobile (abre / fecha o menu no celular) ---------- */
function iniciarMenuMobile() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

/* ---------- Lista "O que está fazendo falta" / "O que estamos precisando" ----------
   Lê o arquivo necessidades.json e monta os cartões na tela.
   Para editar as necessidades, editar o arquivo necessidades.json!Não é preciso mexer aqui. */
async function carregarNecessidades() {
  const container = document.getElementById('needs-list');
  if (!container) return;

  try {
    const resposta = await fetch(NECESSIDADES_ENDPOINT);
    const dados = await resposta.json();

    if (!dados.itens || dados.itens.length === 0) {
      container.innerHTML = '<p>Nenhuma necessidade cadastrada no momento.</p>';
      return;
    }

    container.innerHTML = dados.itens.map(item => `
      <div class="tag-card">
        ${item.urgente ? '<span class="tag-urgent">Urgente</span>' : ''}
        <h3>${escapeHTML(item.titulo)}</h3>
        <p>${escapeHTML(item.descricao)}</p>
      </div>
    `).join('');

  } catch (erro) {
    container.innerHTML = '<p>Não foi possível carregar a lista agora. Se você abriu este arquivo diretamente (duplo clique), isso é esperado — funciona normalmente quando o site está publicado (ex: GitHub Pages).</p>';
    console.error('Erro ao carregar necessidades.json:', erro);
  }
}

/* ---------- Modo escuro/noite ----------
   O tema já é aplicado "cedo" por um script inline no <head> de cada
   página (evita o flash de tela clara). Aqui só cuidamos do clique
   no botão e de salvar a escolha do usuário. */
function iniciarThemeToggle() {
  const botao = document.getElementById('theme-toggle');
  if (!botao) return;
  const root = document.documentElement;

  botao.addEventListener('click', () => {
    const estaEscuro = root.getAttribute('data-theme') === 'dark';
    if (estaEscuro) {
      root.removeAttribute('data-theme');
      localStorage.setItem('md-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('md-theme', 'dark');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenuMobile();
  iniciarThemeToggle();
  carregarNecessidades();
});