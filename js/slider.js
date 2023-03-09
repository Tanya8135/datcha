var sliderIndex = 1;
showSlider(sliderIndex);

function changeSlider(n) {
  showSlider(sliderIndex += n);
}

function showSlider(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {sliderIndex = 1}
  if (n < 1) {sliderIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[sliderIndex-1].style.display = "block";
}