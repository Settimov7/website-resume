if(document.documentElement.clientWidth <= 767) {
  var header = document.querySelector('.header');
  console.log(header);
  var mainNavigation = header.querySelector('.main-navigation');
  var mainNavigationToggle = mainNavigation.querySelector('.main-navigation__toggle');

  header.classList.remove('header--nojs');
  mainNavigation.classList.remove('main-navigation--nojs');
  mainNavigation.classList.add('main-navigation--closed');

  mainNavigationToggle.addEventListener("click", function(evt) {
    evt.preventDefault();

    mainNavigation.classList.toggle('main-navigation--closed');
  });
}
