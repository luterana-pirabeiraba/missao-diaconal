/* ===========================================================
   MAIN.JS — usado nas DUAS páginas (index.html e ajudar.html).
   Cuida do menu mobile (hambúrguer) e da lista de necessidades.
   =========================================================== */

/* ---------- Menu mobile (abre/fecha o menu no celular) ---------- */
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
    const resposta = await fetch('necessidades.json');
    const dados = await resposta.json();

    if (!dados.itens || dados.itens.length === 0) {
      container.innerHTML = '<p>Nenhuma necessidade cadastrada no momento.</p>';
      return;
    }

    container.innerHTML = dados.itens.map(item => `
      <div class="tag-card">
        ${item.urgente ? '<span class="tag-urgent">Urgente</span>' : ''}
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
      </div>
    `).join('');

  } catch (erro) {
    container.innerHTML = '<p>Não foi possível carregar a lista agora. Se você abriu este arquivo diretamente (duplo clique), isso é esperado — funciona normalmente quando o site está publicado (ex: GitHub Pages).</p>';
    console.error('Erro ao carregar necessidades.json:', erro);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenuMobile();
  carregarNecessidades();
});