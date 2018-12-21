'use strict';

(function () {
  var VALID_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var AVATAR_DEFAULT_URL = 'img/muffin-grey.svg';

  var DropBoxColor = {
    HOVER: '#ff5635',
    DEFAULT: '#c7c7c7'
  };

  var Size = {
    WIDTH: '100%',
    HEIGHT: '100%'
  };

  var Opacity = {
    ACTIVE: '0.5',
    DEFAULT: '1'
  };

  var AvatarElementClassName = {
    UPLOAD: 'ad-form-header__upload',
    FILE_CHOOSER: 'ad-form-header__input',
    DROP_BOX: 'ad-form-header__drop-zone',
    PREVIEW: 'ad-form-header__preview'
  };

  var PhotoElementClassName = {
    CONTAINER: 'ad-form__photo-container',
    FILE_CHOOSER: 'ad-form__input',
    DROP_BOX: 'ad-form__drop-zone',
    PHOTO: 'ad-form__photo'
  };

  var avatarUpload = document.querySelector('.' + AvatarElementClassName.UPLOAD);
  var avatarChooser = avatarUpload.querySelector('.' + AvatarElementClassName.FILE_CHOOSER);
  var avatarDropBox = avatarUpload.querySelector('.' + AvatarElementClassName.DROP_BOX);
  var avatarPreview = avatarUpload.querySelector('.' + AvatarElementClassName.PREVIEW + ' img');

  var photosContainer = document.querySelector('.' + PhotoElementClassName.CONTAINER);
  var photosChooser = photosContainer.querySelector('.' + PhotoElementClassName.FILE_CHOOSER);
  var photosDropBox = photosContainer.querySelector('.' + PhotoElementClassName.DROP_BOX);

  var dragPhoto;

  function checkType(images) {
    return images.every(function (image) {
      return VALID_TYPES.some(function (type) {
        return image.name.toLowerCase().endsWith(type);
      });
    });
  }

  function addPreview(images, action) {
    var photos = [].slice.apply(images, null);

    if (checkType(photos)) {
      photos.forEach(function (photo) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
          action(reader.result);
        });

        reader.readAsDataURL(photo);
      });
    }
  }

  function generateAvatarPreview(imageSrc) {
    avatarPreview.src = imageSrc;
  }

  function onDragStart(evt) {
    dragPhoto = evt.target.closest('.' + PhotoElementClassName.PHOTO);

    dragPhoto.style.opacity = Opacity.ACTIVE;

    evt.dataTransfer.setData('text/html', dragPhoto.innerHTML);
  }

  function checkTarget(target) {
    return dragPhoto !== target.closest('.' + PhotoElementClassName.PHOTO);
  }

  function onDragEnter(evt) {
    evt.preventDefault();

    if (checkTarget(evt.target)) {
      evt.target.style.border = '2px dashed black';
    }
  }

  function onDragOver(evt) {
    evt.preventDefault();
  }

  function onDragLeave(evt) {
    evt.preventDefault();

    evt.target.style.border = 'none';
  }

  function onDrop(evt) {
    evt.preventDefault();

    var target = evt.target;
    var newPhoto = evt.target.closest('.' + PhotoElementClassName.PHOTO);

    if (checkTarget(evt.target)) {
      dragPhoto.style.opacity = Opacity.DEFAULT;
      target.style.border = 'none';

      dragPhoto.innerHTML = newPhoto.innerHTML;
      newPhoto.innerHTML = evt.dataTransfer.getData('text/html');
    }
  }

  function onDragEnd(evt) {
    evt.preventDefault();

    dragPhoto.style.opacity = Opacity.DEFAULT;
  }

  function addPhotoDragHandles(element) {
    element.draggable = true;

    element.addEventListener('dragstart', onDragStart);
    element.addEventListener('dragenter', onDragEnter);
    element.addEventListener('dragover', onDragOver);
    element.addEventListener('dragleave', onDragLeave);
    element.addEventListener('drop', onDrop);
    element.addEventListener('dragend', onDragEnd);
  }

  function generatePhotoPreview(imageSrc) {
    var photoElement = document.createElement('div');
    photoElement.classList.add(PhotoElementClassName.PHOTO);

    addPhotoDragHandles(photoElement);

    var imageElement = document.createElement('img');
    imageElement.style.width = Size.WIDTH;
    imageElement.style.height = Size.HEIGHT;
    imageElement.src = imageSrc;

    photoElement.appendChild(imageElement);
    photosContainer.appendChild(photoElement);
  }

  function onFileChange(evt) {
    evt.preventDefault();
    var target = evt.target;

    if (target.classList.contains(AvatarElementClassName.FILE_CHOOSER)) {
      addPreview(avatarChooser.files, generateAvatarPreview);
    }

    if (target.classList.contains(PhotoElementClassName.FILE_CHOOSER)) {
      addPreview(photosChooser.files, generatePhotoPreview);
    }
  }

  function onFileDragEnter(evt) {
    evt.preventDefault();

    var target = evt.target;

    if (target.tagName.toLowerCase() === 'label') {
      target.style.borderColor = DropBoxColor.HOVER;
    }
  }

  function onFileDragOver(evt) {
    evt.preventDefault();
  }

  function onFileDragLeave(evt) {
    evt.preventDefault();

    var target = evt.target;

    if (target.tagName.toLowerCase() === 'label') {
      target.style.borderColor = DropBoxColor.DEFAULT;
    }
  }

  function onFileDrop(evt) {
    evt.preventDefault();
    var target = evt.target;

    if (target.classList.contains(AvatarElementClassName.DROP_BOX)) {
      addPreview(evt.dataTransfer.files, generateAvatarPreview);
      avatarDropBox.style.borderColor = DropBoxColor.DEFAULT;
    }

    if (target.classList.contains(PhotoElementClassName.DROP_BOX)) {
      addPreview(evt.dataTransfer.files, generatePhotoPreview);
      photosDropBox.style.borderColor = DropBoxColor.DEFAULT;
    }
  }

  function addHandlersToElement(fileChooser, dropBox) {
    fileChooser.addEventListener('change', onFileChange);
    dropBox.addEventListener('dragenter', onFileDragEnter);
    dropBox.addEventListener('dragover', onFileDragOver);
    dropBox.addEventListener('dragleave', onFileDragLeave);
    dropBox.addEventListener('drop', onFileDrop);
  }

  function addHandlers() {
    addHandlersToElement(avatarChooser, avatarDropBox);
    addHandlersToElement(photosChooser, photosDropBox);
  }

  function reset() {
    var photos = photosContainer.querySelectorAll('.' + PhotoElementClassName.PHOTO);

    for (var i = 1; i < photos.length; i++) {
      photosContainer.removeChild(photos[i]);
    }

    avatarPreview.src = AVATAR_DEFAULT_URL;
  }

  window.images = {
    addHandlers: addHandlers,
    reset: reset
  };
})();
