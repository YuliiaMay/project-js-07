
function pointToCurrentPage() {
    let foundCurrentPage = false;

    const navLinks = document.querySelectorAll('.nav__link');
    const pageURL = document.URL;

    navLinks.forEach(link => {
        const isCurrentPage = pageURL.includes(link.pathname);
        if (isCurrentPage) {
        link.classList.add('nav__link--current');
        foundCurrentPage = true;
        }
    });

    !foundCurrentPage &&
        document
        .querySelector('.nav__link[href*="/index.html"]')
        .classList.add('nav__link--current');
}

pointToCurrentPage();