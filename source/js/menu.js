(function () {
  var MOBILE_WIDTH = 660;

  var ClassName = {
    HEADER: 'header',
    NAVIGATION: 'main-navigation',
    TOGGLE: 'main-navigation__toggle',
    LINK: 'main-navigation__menu-link',
    NO_JS: '--nojs',
    NAVIGATION_CLOSED: 'main-navigation--closed'
  }

  var header = document.querySelector('.' + ClassName.HEADER);
  var mainNavigation = header.querySelector('.' + ClassName.NAVIGATION);
  var mainNavigationToggle = mainNavigation.querySelector('.' + ClassName.TOGGLE);
  var mainNavigationLinks = mainNavigation.querySelectorAll('.' + ClassName.LINK);

  if (document.documentElement.clientWidth < MOBILE_WIDTH) {
    header.classList.remove(ClassName.HEADER + ClassName.NO_JS);
    mainNavigation.classList.remove(ClassName.NAVIGATION + ClassName.NO_JS);
    mainNavigation.classList.add(ClassName.NAVIGATION_CLOSED);

    mainNavigationToggle.addEventListener('click', function(evt) {
      evt.preventDefault();

      mainNavigation.classList.toggle(ClassName.NAVIGATION_CLOSED);
    });

    [].forEach.call(mainNavigationLinks, function(link) {
      link.addEventListener('click', function () {
        mainNavigation.classList.add(ClassName.NAVIGATION_CLOSED);
      });
    });
  }
})();

