(function () {
  var certificates = [
    {
      name: 'marketing',
      imgPathMobile: 'img/certificate-marketing-mobile@1x',
      imgPathMobileRetina: 'img/certificate-marketing-mobile@2x',
      imgPath: 'img/certificate-marketing@1x',
      imgPathRetina: 'img/certificate-marketing@2x',
      imgAlt: 'Сертификат выпускника программы «Интернет-маркетолог: от новичка до профи»'
    },
    {
      name: 'html-css-1',
      imgPathMobile: 'img/certificate-html-css-1-mobile@1x',
      imgPathMobileRetina: 'img/certificate-html-css-1-mobile@2x',
      imgPath: 'img/certificate-html-css-1@1x',
      imgPathRetina: 'img/certificate-html-css-1@2x',
      imgAlt: 'Сертификат выпускника программы «Профессиональный HTML и CSS, уровень 1»'
    },
    {
      name: 'html-css-2',
      imgPathMobile: 'img/certificate-html-css-2-mobile@1x',
      imgPathMobileRetina: 'img/certificate-html-css-2-mobile@2x',
      imgPath: 'img/certificate-html-css-2@1x',
      imgPathRetina: 'img/certificate-html-css-2@2x',
      imgAlt: 'Сертификат выпускника программы «Профессиональный HTML и CSS, уровень 2»'
    },
    {
      name: 'js-1',
      imgPathMobile: 'img/certificate-js-1-mobile@1x',
      imgPathMobileRetina: 'img/certificate-js-1-mobile@2x',
      imgPath: 'img/certificate-js-1@1x',
      imgPathRetina: 'img/certificate-js-1@2x',
      imgAlt: 'Сертификат выпускника программы «Профессиональный JavaScript, уровень 2»'
    }
  ];

  function getData() {
    return certificates;
  }

  window.certificate = {
    getData: getData
  };
})();
