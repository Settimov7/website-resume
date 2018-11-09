var buttonsBuy = document.querySelectorAll(".product .buy");
var popupCartSucces = document.querySelector(".cart_success");
var closeCartSucces = popupCartSucces.querySelector(".modal_close");

var cart = document.querySelector(".shopping_cart");
var productsCount = 0;

for (var i = 0; i < buttonsBuy.length; i++) {
  buttonBuy = buttonsBuy[i];
  buttonBuy.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popupCartSucces.classList.add("modal_show");
    productsCount++;
    cart.innerHTML = 'Корзина: ' + productsCount;
    cart.classList.add("active");
  });
}

closeCartSucces.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCartSucces.classList.remove("modal_show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCartSucces.classList.contains("modal_show")) {
      popupCartSucces.classList.remove("modal_show");
    }
  }
});