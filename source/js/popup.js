if (!document.querySelector('.project-page')) {

  var sertificates = [
    {
      name: 'marketing',
      imgPathMobile: 'img/sertificate-marketing-mobile@1x',
      imgPathMobileRetina: 'img/sertificate-marketing-mobile@2x',
      imgPath: 'img/sertificate-marketing@1x',
      imgPathRetina: 'img/sertificate-marketing@2x',
      imgAlt: 'Сертификат выпускника программы «Интернет-маркетолог: от новичка до профи»'
    },
    {
      name: 'html-css-1',
      imgPathMobile: 'img/sertificate-html-css-1@1x',
      imgPathMobileRetina: 'img/sertificate-html-css-1@2x',
      imgPath: 'img/sertificate-html-css-1@1x',
      imgPathRetina: 'img/sertificate-html-css-1@2x',
      imgAlt: 'Сертификат выпускника программы «Профессиональный HTML и CSS, уровень 1»'
    },
    {
      name: 'html-css-2',
      imgPathMobile: 'img/sertificate-html-css-2@1x',
      imgPathMobileRetina: 'img/sertificate-html-css-2@2x',
      imgPath: 'img/sertificate-html-css-2@1x',
      imgPathRetina: 'img/sertificate-html-css-2@2x',
      imgAlt: 'Сертификат выпускника программы «Профессиональный HTML и CSS, уровень 2»'
    }
  ]

  var CreateSertificatePopup = function(sertificate) {
    var body = document.querySelector('body');

    var popup = document.createElement('section');
    popup.classList.add('modal');
    popup.classList.add('modal--'+sertificate.name);

    var container = document.createElement('div');
    container.classList.add('modal__container');

    var picture = document.createElement('picture');

    var sourceWebp = document.createElement('source');
    sourceWebp.type = 'image/webp';
    sourceWebp.media = '(min-width: 660px)';
    sourceWebp.srcset = sertificate.imgPath + '.webp 1x,' + sertificate.imgPathRetina + '.webp 2x';

    var sourceWebpMobile = document.createElement('source');
    sourceWebpMobile.type = 'image/webp';
    sourceWebpMobile.srcset = sertificate.imgPathMobile + '.webp 1x,' + sertificate.imgPathMobileRetina + '.webp 2x,'

    var sourceTablet = document.createElement('source');
    sourceTablet.media = '(min-width: 660px)';
    sourceTablet.srcset = sertificate.imgPath + '.jpg 1x,' + sertificate.imgPathRetina + '.jpg 2x';

    var img = document.createElement('img');
    img.classList.add('modal__image');
    img.src = sertificate.imgPathMobile + '.jpg';
    img.srcset = sertificate.imgPathMobileRetina + '.jpg 2x';
    img.alt = sertificate.imgAlt;

    picture.appendChild(sourceWebp);
    picture.appendChild(sourceWebpMobile);
    picture.appendChild(sourceTablet);
    picture.appendChild(img);
    container.appendChild(picture);

    var buttonClose = document.createElement('button');
    buttonClose.classList.add('modal__close');
    buttonClose.type = 'button';

    buttonClose.addEventListener('click', function(evt) {
      evt.preventDefault();

      popup.classList.remove('modal--open');
    });

    document.addEventListener('keydown', function(evt) {
      if(evt.keyCode === 27 && popup.classList.contains('modal--open')) {
        popup.classList.remove('modal--open');
      }
    });

    var buttonText = document.createElement('span');
    buttonText.classList.add('visually-hidden');
    buttonText.textContent = 'Закрыть';

    buttonClose.appendChild(buttonText);
    container.appendChild(buttonClose);
    popup.appendChild(container);
    body.appendChild(popup);
  }

  for (var i = 0; i < sertificates.length; i++) {
    CreateSertificatePopup(sertificates[i]);
  }

  var educationPrograms = document.querySelectorAll('.education__item');

  var openPopup = function(program, button) {
    var programTitle = program.querySelector('.education__item-title').textContent;

    if(programTitle === "«Интернет-маркетолог: от новичка до профи»") {
      var popup = document.querySelector('.modal--marketing');
    }

    if(programTitle === "«Профессиональный HTML и CSS, уровень 1»") {
      var popup = document.querySelector('.modal--html-css-1');
    }

    if(programTitle === "«Профессиональный HTML и CSS, уровень 2»") {
      var popup = document.querySelector('.modal--html-css-2');
    }

    button.addEventListener('click', function(evt) {
      evt.preventDefault();

      popup.classList.add('modal--open');
    });
  }

  for(var i = 0; i < educationPrograms.length; i++) {
    var allOpenButtons = educationPrograms[i].querySelectorAll('.button');

    for(var j = 0; j < allOpenButtons.length; j++) {
      if(allOpenButtons[j].firstChild.textContent === 'Сертификат') {
        openPopup(educationPrograms[i], allOpenButtons[j]);
      }
    }
  }
}
