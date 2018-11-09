var buttonWriteUs = document.querySelector(".main_contacts .button");
var popupWriteUs = document.querySelector(".write_us");
var formWriteUs = popupWriteUs.querySelector(".form_write_us");
var closeWriteUs = popupWriteUs.querySelector(".modal_close");
var nameField = formWriteUs.querySelector(".form_field[type = text]");
var emailField = formWriteUs.querySelector(".form_field[type = email]");
var messageField = formWriteUs.querySelector("textarea");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var buttonMap = document.querySelector(".main_contacts img");
var popupMap = document.querySelector(".map");
var closeMap = popupMap.querySelector(".modal_close");

var buttonsBuy = document.querySelectorAll(".product .buy");
var popupCartSucces = document.querySelector(".cart_success");
var closeCartSucces = popupCartSucces.querySelector(".modal_close");

var cart = document.querySelector(".shopping_cart");
var productsCount = 0;

var mainSlider = document.querySelector(".main_slider");
var allMainSlides = mainSlider.querySelectorAll(".slide");
var buttonNextSlide = mainSlider.querySelector(".button_next");
var buttonPreviousSlide = mainSlider.querySelector(".button_back");
var sliderNavigationPoints = mainSlider.querySelectorAll(".slider_navigation_point");
var currentSlideIndex = 0;

var servicesSlider = document.querySelector(".services_slider");
var allservicesSlides = servicesSlider.querySelectorAll(".description_slide");
var servicesNavigation = servicesSlider.querySelector(".services_list");
var servicesNavigationItems = servicesNavigation.querySelectorAll(".item");
var currentServicesSlideIndex = 0;

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

buttonWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal_show")

  if (storageName) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    messageField.focus();
  } else {
    nameField.focus();
  }
});

closeWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal_show");
  popupWriteUs.classList.remove("modal_error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal_show")) {
      popupWriteUs.classList.remove("modal_show");
      popupWriteUs.classList.remove("modal_error");
    }

    if (popupMap.classList.contains("modal_show")) {
      popupMap.classList.remove("modal_show");
    }

    if (popupCartSucces.classList.contains("modal_show")) {
      popupCartSucces.classList.remove("modal_show");
    }
  }
});

formWriteUs.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal_error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

buttonMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal_show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal_show");
});

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

function nextSlide () {
  goToSlide(currentSlideIndex + 1);
}

function previousSlide () {
  goToSlide(currentSlideIndex - 1);
}

function goToSlide (currentSlide) {
  allMainSlides[currentSlideIndex].classList.remove("active");
  sliderNavigationPoints[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (currentSlide + allMainSlides.length) % allMainSlides.length;
  allMainSlides[currentSlideIndex].classList.add("active");
  sliderNavigationPoints[currentSlideIndex].classList.add("active");
}

buttonNextSlide.addEventListener("click", function(evt) {
  evt.preventDefault();
  nextSlide();
});

buttonPreviousSlide.addEventListener("click", function(evt) {
  evt.preventDefault();
  previousSlide();
});

for (var i = 0; i < sliderNavigationPoints.length; i++) {
  sliderNavigationPoints[i].addEventListener("click" , function(evt) {
    evt.preventDefault();
    allMainSlides[currentSlideIndex].classList.remove("active");
    sliderNavigationPoints[currentSlideIndex].classList.remove("active");
    currentSlideIndex = parseInt(evt.target.innerText) - 1;
    allMainSlides[currentSlideIndex].classList.add("active");
    sliderNavigationPoints[currentSlideIndex].classList.add("active");
  });
}

function getItemIndex(element) {
  var index = Array.prototype.indexOf.call(servicesNavigationItems, element);
  return index;
}

for (var i = 0; i < servicesNavigationItems.length; i++) {
  servicesNavigationItems[i].addEventListener("click", function(evt) {
    evt.preventDefault();

    var indexClick = getItemIndex(evt.target);

    allservicesSlides[currentServicesSlideIndex].classList.remove("active");
    servicesNavigationItems[currentServicesSlideIndex].classList.remove("current");
    currentServicesSlideIndex = indexClick;
    allservicesSlides[currentServicesSlideIndex].classList.add("active");
    servicesNavigationItems[currentServicesSlideIndex].classList.add("current");
  });
}







