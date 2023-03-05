export default document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

// const body = document.querySelector('body');
// const loader = document.querySelector('.loader');

// console.log(loader);

// function showLoader() {
//     loader.style.display = 'block';
//     body.style.overflow = 'hidden';

// }

// function hideLoader() {
//     loader.style.display = 'none';
//     body.style.overflow = 'visible';

// }

// export { showLoader, hideLoader };

// let timeout;

// function myFunction() {
//     timeout = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }
