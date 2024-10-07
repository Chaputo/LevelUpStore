// index.js
import navbar from '../components/navbar.js';
import itemCard from '../components/itemCard.js';
document.getElementById('navbar-container').innerHTML = navbar;

const items = [
    {
        image: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/992-II/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg/jcr:content/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg',
        name: 'Porsche 911 1.56T',
        description: 'Some quick example text to build on the card title and make up. Some quick example text to build on the card title and make up.',
        price: '100'
    },
    {
        image: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/992-II/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg/jcr:content/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg',
        name: 'Porsche Taycan 4S',
        description: 'Experience electrifying performance with the Porsche Taycan 4S. A perfect blend of luxury and speed.',
        price: '120'
    },
    {
        image: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/992-II/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg/jcr:content/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg',
        name: 'Porsche Macan S',
        description: 'The Porsche Macan S delivers the ultimate compact SUV experience with powerful performance and premium features.',
        price: '80'
    }
];


// Función para renderizar las cards
function renderCards() {
  const container = document.getElementById('items-container');
  let cardsHTML = '';

  items.forEach(item => {
    cardsHTML += `
        <div class="col col-6 p-2">
            ${itemCard(item)}
        </div>
    `;
  });

  container.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderCards);
  