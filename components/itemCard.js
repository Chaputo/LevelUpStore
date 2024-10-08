export const itemCard = (item) => `
  <div class="w-100 h-100 card">

    <img
        src="${item.image}"
        class="card-img-top shadow-lg"
        height="500px"
        width="100"
    />
    <div class="card-body">
        <div class="d-flex justify-content-between mb-2">
        <h4 class="card-title">${item.name}</h4>
        <h5>$${item.price}</h5>
        </div>
        <p class="card-text mb-4">
        ${item.description}
        </p>
        <div class="row justify-content-between align-bottom">
        <div class="col col-3" >
            <input
            class="form-control form-control-sm"
            type="number"
            placeholder="1"
            min="0"
            />
        </div>
        <div class="col col-5 text-end">
            <button
            class="btn btn-outline-success btn-sm me-2 shadow-sm"
            id="carritoButton"
            >
            
            <i class="fa-solid fa-cart-plus fa-lg"></i>
            </button>
        </div>
        </div>
    </div>
  </div>
`;

export default itemCard;
