// var sliderIndex = 1;
// showSlider(sliderIndex);

// function changeSlider(n) {
//   showSlider(sliderIndex += n);
// }

// function showSlider(n) {
//   var i;
//   var x = document.getElementsByClassName("slider");
//   if (n > x.length) {sliderIndex = 1}
//   if (n < 1) {sliderIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[sliderIndex-1].style.display = "block";
// }


const sliders = document.querySelectorAll('.slider');

// Добавляем обработчики на кнопки и событие "touchstart" на мобильных устройствах
sliders.forEach((slider) => {
  const images = slider.querySelectorAll('img');
  let currentImage = 0;
  let startX;

  const showImage = (n) => {
    images.forEach((image) => {
      image.style.display = 'none';
    });
    images[n].style.display = 'block';
    currentImage = n;
  };

  const prevImage = () => {
    if (currentImage === 0) {
      showImage(images.length - 1);
    } else {
      showImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage === images.length - 1) {
      showImage(0);
    } else {
      showImage(currentImage + 1);
    }
  };

  slider.previousElementSibling.addEventListener('click', prevImage);
  slider.nextElementSibling.addEventListener('click', nextImage);

  slider.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextImage();
    } else if (endX - startX > 50) {
      prevImage();
    }
  });

  showImage(currentImage);
});