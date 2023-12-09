function popupContainerFill() {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  myCart.products = savedCart.products;
  let total = 0;
  const popupCost = document.querySelector("#popup_cost");
  popupCost.innerHTML=total+'р.';
  for (let i = 0; i < myCart.products.length; i++) {
    total+=parseInt(myCart.products[i].price);
    const str = `<div class="popup__product ${i}p">
  <div class="popup__product-wrap">
    <img
      src=${myCart.products[i].imageSrc}
      class="popup__product-image"
    />
    <h2 class="popup__product-title">
        ${myCart.products[i].name}
    </h2>
  </div>
  <div class="popup__product-wrap">
    <div class="popup__product-price">${myCart.products[i].price}</div>
    <div class="popup__product-price">${myCart.products[i].count} шт.</div>
    <button class="popup__product-delete" onclick="removeProd(this)">✖</button>
  </div>
</div>`
    const popupProductList = document.querySelector("#popup_product_list");
    let div = document.createElement('div');
    div.innerHTML = str;
    popupProductList.appendChild(div);
    const popupCost = document.querySelector("#popup_cost");
    popupCost.innerHTML=total+'р.';
  };
}
popupContainerFill()

function removeProd(el){
  const index = parseInt(el.parentNode.parentNode.classList[1]);
  myCart.removeProduct(index);
  localStorage.setItem("cart", JSON.stringify(myCart));
  el.parentElement.parentElement.parentElement.parentElement.innerHTML = '';
  popupContainerFill();
}
