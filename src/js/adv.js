const banner = document.querySelector('.banner');
const bannerButton = document.querySelector('.banner__button');

bannerButton.addEventListener('click', onhideBanner);

function onhideBanner(event) {
  if (
    event.target.classList.contains('banner__button') ||
    event.target.classList.contains('button__mail-icon') ||
    event.target.classList.contains('button__use-icon')
  ) {
    banner.classList.add('visually-hidden');
  }
}