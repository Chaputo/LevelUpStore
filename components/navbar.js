const categories = [
  { title: 'Grand Theft Auto', url: '/categories/CATgta.html' },
  { title: 'Need For Speed', url: '/categories/CATnfs.html' },
  { title: 'Forza Horizon', url: '/categories/CATfh.html' },
]

export const navbar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm" style="background-color: #5c5c5c">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">LEVEL UP</a>
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
            Buscar por categoría
          </a>
          <ul class="dropdown-menu">

            ${categories.map(category => `
              <li><a class="dropdown-item" href="${category.url}">${category.title}</a></li>
            `).join('')}

          </ul>
        </li>
      </ul>

      <a href="/login.html"
            <form class="d-flex" role="search">
        
        <button class="btn btn-outline-success" type="submit">Iniciar Sesión</button>
      </form>
          
           
          </a>        

      
      
        
        
      </div>
    </div>
  </div>
</nav>
`;







export default navbar;
