if(document.documentElement.clientWidth <= 767) {
  var header = document.querySelector('.header');
  var mainNavigation = header.querySelector('.main-navigation');
  var mainNavigationToggle = mainNavigation.querySelector('.main-navigation__toggle');
  var mainNavigationLinks = mainNavigation.querySelectorAll('.main-navigation__menu-link');

  header.classList.remove('header--nojs');
  mainNavigation.classList.remove('main-navigation--nojs');
  mainNavigation.classList.add('main-navigation--closed');

  mainNavigationToggle.addEventListener('click', function(evt) {
    evt.preventDefault();

    mainNavigation.classList.toggle('main-navigation--closed');
  });

  for(var i = 0; i < mainNavigationLinks.length; i++) {
    mainNavigationLinks[i].addEventListener('click', function(evt) {
      mainNavigation.classList.add('main-navigation--closed');
    });
  }
}
