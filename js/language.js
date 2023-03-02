const selectElement = document.querySelector('.select');

selectElement.addEventListener('change', (event) => {
  const language = event.target.value;
  const currentUrl = window.location.href;
  const url = currentUrl.replace(/\/(UK|RU)\//, `/${language}/`);
  window.location.href = url;
});