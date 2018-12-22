(function () {
  var KeyCode = {
    ESC: 27
  }

  var titleToClassName = {
    '«Интернет-маркетолог: от новичка до профи»': 'modal--marketing',
    '«Профессиональный HTML и CSS, уровень 1»': 'modal--html-css-1',
    '«Профессиональный HTML и CSS, уровень 2»': 'modal--html-css-2',
    '«Профессиональный JavaScript, уровень 1»' : 'modal--js-1'
  }

  var body = document.querySelector('body');
  var educationPrograms = document.querySelectorAll('.education__item');

  function renderCertificate(certificate) {
    var popup = document.createElement('section');
    popup.classList.add('modal');
    popup.classList.add('modal--' + certificate.name);

    var container = document.createElement('div');
    container.classList.add('modal__container');

    var picture = document.createElement('picture');

    var sourceWebp = document.createElement('source');
    sourceWebp.type = 'image/webp';
    sourceWebp.media = '(min-width: 660px)';
    sourceWebp.srcset = certificate.imgPath + '.webp 1x,' + certificate.imgPathRetina + '.webp 2x';

    var sourceWebpMobile = document.createElement('source');
    sourceWebpMobile.type = 'image/webp';
    sourceWebpMobile.srcset = certificate.imgPathMobile + '.webp 1x,' + certificate.imgPathMobileRetina + '.webp 2x'

    var sourceTablet = document.createElement('source');
    sourceTablet.media = '(min-width: 660px)';
    sourceTablet.srcset = certificate.imgPath + '.jpg 1x,' + certificate.imgPathRetina + '.jpg 2x';

    var img = document.createElement('img');
    img.classList.add('modal__image');
    img.src = certificate.imgPathMobile + '.jpg';
    img.srcset = certificate.imgPathMobileRetina + '.jpg 2x';
    img.alt = certificate.imgAlt;

    picture.appendChild(sourceWebp);
    picture.appendChild(sourceWebpMobile);
    picture.appendChild(sourceTablet);
    picture.appendChild(img);
    container.appendChild(picture);

    var buttonClose = document.createElement('button');
    buttonClose.classList.add('modal__close');
    buttonClose.type = 'button';

    var buttonText = document.createElement('span');
    buttonText.classList.add('visually-hidden');
    buttonText.textContent = 'Закрыть';

    buttonClose.appendChild(buttonText);
    container.appendChild(buttonClose);
    popup.appendChild(container);
    body.appendChild(popup);

    function close(evt) {
      evt.preventDefault();

      popup.classList.remove('modal--open');
      document.removeEventListener('click', close);
    }

    buttonClose.addEventListener('click', close);

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === KeyCode.ESC && popup.classList.contains('modal--open')) {
        close(evt);
      }
    });
  }


  function addOpenHander(programTitle, button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.querySelector('.' + titleToClassName[programTitle]).classList.add('modal--open');
    })
  }

  function addOpenHanders() {
    [].forEach.call(educationPrograms, function (program) {
      var button = program.querySelector('.button');

      if (button && button.firstChild.textContent === 'Сертификат') {
        addOpenHander(program.querySelector('.education__item-title').textContent, button);
      }
    });
  }

  function renderCertificates() {
    window.certificate.getData().forEach(function (certificate) {
      renderCertificate(certificate);
    });

    addOpenHanders();
  }

  if (!document.querySelector('.inner-page')) {
    renderCertificates();
  }
})();
