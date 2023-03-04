const body = document.querySelector('body');
const loader = document.querySelector('.loader');

function showLoader() {
    loader.style.display = 'block';
    body.style.overflow = 'hidden';
    
}

function hideLoader() {
    loader.style.display = 'none';
    body.style.overflow = 'visible';
    
}

export { showLoader, hideLoader };