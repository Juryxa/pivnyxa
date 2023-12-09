const cardAddArr = Array.from(document.querySelectorAll(".submit_basket"));
const cart = document.querySelector("#cart");


class Product {
  imageSrc;
  name;
  price;
  count;
  constructor(card) {
    this.imageSrc = card.querySelector(".card__image").src;
    this.name = card.querySelector(".name").innerText;
    this.count  = card.querySelector("input").value;
    this.price = parseInt(card.querySelector(".price").innerText)*parseFloat(this.count) + 'р.';
  }
}

class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
  get cost() {
    const prices = this.products.map((product) => {
      return product.price;
    });
    return prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
  }
}
const myCart = new Cart();

if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;

myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".section");
    const product = new Product(card);
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("cart", JSON.stringify(myCart));
  });
});


