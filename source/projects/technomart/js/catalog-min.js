for(var buttonsBuy=document.querySelectorAll(".product .buy"),popupCartSucces=document.querySelector(".cart_success"),closeCartSucces=popupCartSucces.querySelector(".modal_close"),cart=document.querySelector(".shopping_cart"),productsCount=0,i=0;i<buttonsBuy.length;i++)buttonBuy=buttonsBuy[i],buttonBuy.addEventListener("click",function(t){t.preventDefault(),popupCartSucces.classList.add("modal_show"),productsCount++,cart.innerHTML="Корзина: "+productsCount,cart.classList.add("active")});closeCartSucces.addEventListener("click",function(t){t.preventDefault(),popupCartSucces.classList.remove("modal_show")}),window.addEventListener("keydown",function(t){27===t.keyCode&&(t.preventDefault(),popupCartSucces.classList.contains("modal_show")&&popupCartSucces.classList.remove("modal_show"))});