const categories = [
  { title: 'Cat 1', url: '/compra-ya/categories/cat1.html' },
  { title: 'Cat 2', url: '/compra-ya/categories/cat2.html' },
  { title: 'Cat 3', url: '/compra-ya/categories/cat3.html' },
]

export const navbar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="/compra-ya/index.html">Compra YA!</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul
        class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
        style="--bs-scroll-height: 100px"
      >
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorías
          </a>
          <ul class="dropdown-menu">

            ${categories.map(category => `
              <li><a class="dropdown-item" href="${category.url}">${category.title}</a></li>
            `).join('')}

          </ul>
        </li>
      </ul>
      <div class="d-flex justify-content-end" role="search">
        <button class="btn btn-outline-primary btn-sm me-2" id="carritoButton">
          Carrito
          <i class="fa-solid fa-cart-shopping fa-lg"></i>
        </button>
        <button class="btn btn-outline-secondary btn-sm" id="logoutButton">
          Cerrar sesión
          <i class="fa-solid fa-right-from-bracket fa-lg"></i>
        </button>
      </div>
    </div>
  </div>
</nav>
`;

function handleCartClick() {
  alert("Carrito clicado");
}

function logout() {
  window.location.href = "/compra-ya/login.html";
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('carritoButton').addEventListener('click', handleCartClick);
  document.getElementById('logoutButton').addEventListener('click', logout);
});

export default navbar;
