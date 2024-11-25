
//<!-- Categorias -->//
const navElements = [
    {title: 'Videojuegos', link: '/categoria1.html'} ,
    {title: 'Coleccionables', link: '/categoria2.html'},
    {title: 'Ropa', link: '/categoria3.html'},
    {title: 'Decoración', link: '/categoria4.html'}
]
//<!-- Fin Categorias -->//

function calcularTotal() {
    // Recuperar el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Calcular el total sumando precio * cantidad para cada producto
    let total = 0;
    cart.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
  
    // Mostrar el total en el elemento con id 'cartTotal'
    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = total.toFixed(2); // Mostrar con 2 decimales
  }
  


//<!-- NavBar -->//
const navBar = `
    <nav class="navbar navbar-expand-lg bg-dark text-light">
        <div class="container-fluid">
        
            <a href="/index.html" class="navbar-brand text-light">
            <img src="/assets/icono.png" alt="Log In Icon" style="width: 50px; height: 50px; margin-right: 8px;">
            GTA Market</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"></span>
            </button>

            
            <div class="collapse navbar-collapse text-light" id="navbarSupportedContent">
                <ul class="navbar-nav">
                ${
                    navElements.map(e => {
                        return `
                        <li class="nav-item">
                            <a class="nav-link text-light" href=${e.link}>${e.title}</a>
                        </li>
                        `
                    }).join('')
                }
                </ul>
                <div class="ms-auto d-flex align-items-center">  
                    <a href="./cart.html" class="btn btn-outline-light ms-auto me-2">
                        <i class="bi bi-cart-plus"></i>
                    </a>
                    <a href="./register.html" class="btn btn-outline-light ms-auto me-2">
                        <i class="bi bi-bookmark-plus"></i> Registrarse
                    </a>
                    <button class="btn btn-outline-light ms-auto me-2" data-bs-toggle="modal" data-bs-target="#modal-login">
                    <i class="bi bi-box-arrow-in-right"></i> Ingresar
                    </button>
                    <button class="btn btn-outline-danger ms-auto">
                    <i class="bi bi-box-arrow-left"></i>
                    </button>
                </div>
                
            </div>

        </div>
    </nav>
`
//<!-- Fin NavBar -->//


//<!-- Modal -->//
const modal = `
    <div class="modal fade" tabindex="-1" id="modal-login">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <img src="/assets/icono.png" alt="Log In Icon" style="width: 50px; height: 50px; margin-right: 8px;">
                    <h5 class="modal-title">- Iniciar Sesión</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="login-form">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-login" placeholder="nombre@ejemplo.com" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password-login" placeholder="Contraseña" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" form="login-form" id="btn-login" class="btn btn-primary">Iniciar Sesión</button>
                </div>
            </div>
        </div>
    </div>
`;
//<!-- Fin modal -->//

//<!-- Tarjetas dinamicas -->//



// Llamar a la función al cargar la página de carrito
document.addEventListener('DOMContentLoaded', function() {
    renderizarCarrito();
    calcularTotal();

});




function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const container = document.getElementById('carrito-container');

    if (container) {
        container.innerHTML = '';

        carrito.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('carrito-item', 'mb-3', 'p-2', 'border', 'rounded');
            card.innerHTML = `
                <div class="d-flex align-items-center justify-content-between">
                    <img src="${item.imagen}" alt="${item.titulo}" style="width: 200px; height: auto; margin-right: 10px;">
                    <div>
                        <h5>${item.titulo}</h5>
                        <p>Precio: ${item.precio}</p>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-outline-secondary btn-sm me-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                            <span>${item.cantidad}</span>
                            <button class="btn btn-outline-secondary btn-sm ms-2" onclick="cambiarCantidad(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="btn btn-outline-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                </div>
            `;
            container.appendChild(card);
            calcularTotal();
        });

        // Calcular y mostrar el total
        const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        const totalElement = document.getElementById('total');
        if (totalElement) {
            totalElement.textContent = `Total: $${total.toFixed(2)}`;
        }
    } else {
        console.error('Elemento #carrito-container no encontrado');
    }
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(index, cambio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito[index]) {
        const nuevaCantidad = carrito[index].cantidad + cambio;

        if (nuevaCantidad >= 0 && nuevaCantidad <= 5) {
            carrito[index].cantidad = nuevaCantidad;

            // Si la cantidad llega a 0, eliminar el producto
            if (nuevaCantidad === 0) {
                carrito.splice(index, 1);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            calcularTotal();
            renderizarCarrito(); // Volver a renderizar el carrito
        }
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); // Elimina el producto del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();
    renderizarCarrito(); // Volver a renderizar el carrito
}

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderizarCarrito);




function agregarAlCarrito(producto, cantidad) {
    // Recuperar el carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.titulo === producto.titulo);
    if (index !== -1) {
        // Si ya está en el carrito, incrementar la cantidad
        carrito[index].cantidad += parseInt(cantidad, 10) || 1;
    } else {
        // Si no está, agregarlo al carrito
        producto.cantidad = parseInt(cantidad, 10) || 1; // Asegurarse de que la cantidad sea un número
        carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito en la interfaz
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.querySelector('.bi-cart-plus');
    contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}

function updateQuantity(titulo, change) {
    // Buscar el input correspondiente a este producto
    const input = document.querySelector(`input[data-titulo='${titulo}']`);
    
    if (input) {
        // Obtener el valor actual del input
        let currentValue = parseInt(input.value);
        // Si el cambio no provoca que el valor esté fuera del rango permitido, actualizarlo
        currentValue = Math.max(0, Math.min(5, currentValue + change)); // Limitar entre 0 y 5
        input.value = currentValue; // Establecer el nuevo valor
    }
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-container');

    // Obtener la categoría desde el título de la página
    const categoriaPagina = document.title.toLowerCase(); // Convertir a minúsculas para evitar problemas de coincidencia

    // Función para renderizar productos
    function renderizarProductos(categoria = null) {
      container.innerHTML = ''; // Limpiar las tarjetas existentes

    

      // Filtrar productos por categoría si se especifica
      const productosFiltrados = categoria && categoria !== "gta market"
    ? data.filter(producto => producto.categoria && producto.categoria.toLowerCase() === categoria)
    : data;


      // Renderizar las tarjetas
      productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        
            


        card.innerHTML = `
          <div class="card d-flex flex-column" style="width: 18rem; height: 100%;">
          <!-- Imagen en la parte superior de la tarjeta -->
          <img src="${producto.imagen}" class="card-img-top" alt="Imagen de ${producto.titulo}">

          <div class="card-body d-flex flex-column" style="flex-grow: 1;">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text"><strong>Precio: ${producto.precio}</strong></p>
              
              <div class="d-flex flex-column mb-3">
                  <div class="d-flex align-items-center mb-3">
                      <button class="btn btn-outline-secondary btn-sm decrease-btn" onclick="updateQuantity('${producto.titulo}', -1)" style="width: 40px;">-</button>
                      <input id="${producto.id}" type="number" class="form-control text-center product-count" value="0" min="0" max="5" style="width: 50px;" readonly data-titulo="${producto.titulo}">
                      <button class="btn btn-outline-secondary btn-sm increase-btn" onclick="updateQuantity('${producto.titulo}', 1)" style="width: 40px;">+</button>
                  </div>
                  <div class="mt-3">
                      <button class="btn btn-outline-success w-100 add-to-cart-btn" data-producto='${JSON.stringify(producto)}'>
                          <i class="bi bi-cart-plus"></i> Agregar al Carrito
                      </button>
                  </div>
              </div>
          </div>
      </div>`;
      const btnAddToCart = card.querySelector('.add-to-cart-btn');
    btnAddToCart.addEventListener('click', () => {
        const productoSeleccionado = JSON.parse(btnAddToCart.getAttribute('data-producto'));
        const cantidadprod = document.getElementById(productoSeleccionado.id).value
        agregarAlCarrito(productoSeleccionado, cantidadprod);

    });

      

        container.appendChild(card);
      });
    }

    // Renderizar productos según la categoría del título de la página
    renderizarProductos(categoriaPagina);
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });

  




//<!-- Fin Tarjetas dinamicas -->//





//<!-- Insertar elementos en el HTML -->//
let navContainer = document.querySelector('header')
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')
let modContainer = document.getElementById('modalContainer')

window.addEventListener('load', () =>{
    navContainer.innerHTML = navBar
    modContainer.innerHTML = modal
    setBtnLogin()
    title.textContent = `Bienvenido a ${pageName}`
    document.title = pageName
})
//<!-- FIN Insertar elementos en el HTML -->//


function setBtnLogin(){
    const saveDataBtn = document.getElementById('btn-login');
    const emailInput = document.getElementById('email-login');

    saveDataBtn.addEventListener('click', () => {
    const value1 = emailInput.value;
    sessionStorage.setItem('email-login', value1);
    })
}


