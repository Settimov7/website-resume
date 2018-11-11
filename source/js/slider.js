if(document.querySelector('.project-page')) {
  var slider = document.querySelector('.slider');
  var sliderControls = slider.querySelector('.slider__controls');
  var nextSlideButton = sliderControls.querySelector('.slider__control--next');
  var previousSlideButton = sliderControls.querySelector('.slider__control--previous');
  var navigationButtons = sliderControls.querySelectorAll('.slider__slide-number');
  var allSlides = slider.querySelectorAll('.slider__slide');

  var goNextSlide = function(currentSlide) {
    var currentSlideIndex = CalcSlideIndex(currentSlide);
    var nextSlideIndex = (currentSlideIndex + 1 + allSlides.length) % allSlides.length;

    changeSlide(currentSlideIndex, nextSlideIndex);
  }

  var goPreviousSlide = function(currentSlide) {
    var currentSlideIndex = CalcSlideIndex(currentSlide);
    var nextSlideIndex = (currentSlideIndex - 1 + allSlides.length) % allSlides.length;

    changeSlide(currentSlideIndex, nextSlideIndex);
  }

  var CalcSlideIndex = function(currentSlide) {
    var currentSlideIndex = null;

    for(var i = 0; i < allSlides.length; i++) {
      if(allSlides[i].contains(currentSlide)) {
        currentSlideIndex = i;
        break;
      }
    }

    return currentSlideIndex;
  }


  var changeSlide = function(currentSlideIndex, nextSlideIndex) {
    allSlides[currentSlideIndex].classList.remove('slider__slide--current');
    navigationButtons[currentSlideIndex].classList.remove('slider__slide-number--current');

    allSlides[nextSlideIndex].classList.add('slider__slide--current');
    navigationButtons[nextSlideIndex].classList.add('slider__slide-number--current');
  }

  var navigationButtonClick = function(navigationButtonIndex, navigationButton) {
    navigationButton.addEventListener('click', function(evt) {
      evt.preventDefault();

      changeSlide(CalcSlideIndex(document.querySelector('.slider__slide--current')), navigationButtonIndex);
    });
  }

  nextSlideButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    goNextSlide(document.querySelector('.slider__slide--current'));
  });

  previousSlideButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    goPreviousSlide(document.querySelector('.slider__slide--current'));
  });

  for(var i = 0; i < navigationButtons.length; i++) {
    navigationButtonClick(i, navigationButtons[i]);
  }
}
