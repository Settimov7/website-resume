(function () {
  var slider = document.querySelector('.slider');

  function calcSlideIndex (currentSlide) {
    var currentSlideIndex = null;

    for(var i = 0; i < allSlides.length; i++) {
      if(allSlides[i].contains(currentSlide)) {
        currentSlideIndex = i;
        break;
      }
    }

    return currentSlideIndex;
  }

  function goNextSlide (currentSlide) {
    var currentSlideIndex = calcSlideIndex(currentSlide);
    var nextSlideIndex = (currentSlideIndex + 1 + allSlides.length) % allSlides.length;

    changeSlide(currentSlideIndex, nextSlideIndex);
  }

  function goPreviousSlide (currentSlide) {
    var currentSlideIndex = calcSlideIndex(currentSlide);
    var nextSlideIndex = (currentSlideIndex - 1 + allSlides.length) % allSlides.length;

    changeSlide(currentSlideIndex, nextSlideIndex);
  }

  function changeSlide (currentSlideIndex, nextSlideIndex) {
    allSlides[currentSlideIndex].classList.remove('slider__slide--current');
    navigationButtons[currentSlideIndex].classList.remove('slider__slide-number--current');

    allSlides[nextSlideIndex].classList.add('slider__slide--current');
    navigationButtons[nextSlideIndex].classList.add('slider__slide-number--current');
  }

  function addNavigationButtonHandler (navigationButtonIndex, navigationButton) {
    navigationButton.addEventListener('click', function(evt) {
      evt.preventDefault();

      changeSlide(calcSlideIndex(document.querySelector('.slider__slide--current')), navigationButtonIndex);
    });
  }

  if (slider) {
    var sliderControls = slider.querySelector('.slider__controls');
    var nextSlideButton = sliderControls.querySelector('.slider__control--next');
    var previousSlideButton = sliderControls.querySelector('.slider__control--previous');
    var navigationButtons = sliderControls.querySelectorAll('.slider__slide-number');
    var allSlides = slider.querySelectorAll('.slider__slide');

    nextSlideButton.addEventListener('click', function(evt) {
      evt.preventDefault();

      goNextSlide(document.querySelector('.slider__slide--current'));
    });

    previousSlideButton.addEventListener('click', function(evt) {
      evt.preventDefault();

      goPreviousSlide(document.querySelector('.slider__slide--current'));
    });

    [].forEach.call(navigationButtons, function (button, index) {
      addNavigationButtonHandler(index, button);
    });
  }
})();

