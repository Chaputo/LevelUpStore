// index.js
import navbar from '../components/navbar.js';
import itemCard from '../components/itemCard.js';
document.getElementById('navbar-container').innerHTML = navbar;

const items = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/b/be/GTA3boxcover.jpg',
        name: 'Grand Theft Auto III',
        description: 'Grand Theft Auto III (comúnmente abreviado GTA III) es un videojuego de acción y aventura de mundo abierto de disparos en tercera persona desarrollado por DMA Design y publicado por la compañía Rockstar Games.',
        price: '100'
    },
    {
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/grand-theft-auto-iv.jpg?tf=1200x1200',
        name: 'Grand Theft Auto IV',
        description: 'Grand Theft Auto IV (abreviado como GTA IV) es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y distribuido por Rockstar Games.',
        price: '120'
    },
    {
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/GI/KA/RY/150380250/actual-1364906194-jpg.jpg',
        name: 'Grand Theft Auto V',
        description: 'Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y distribuido por Rockstar Games.',
        price: '80'
    }
];


// Función para renderizar las cards
function renderCards() {
  const container = document.getElementById('items-container');
  let cardsHTML = '';

  items.forEach(item => {
    cardsHTML += `
        <div class="col col-3 p-2">
            ${itemCard(item)}
        </div>
    `;
  });

  container.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderCards);
  