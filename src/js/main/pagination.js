import Pagination from 'tui-pagination';

import { fetchPopularNews } from '../gallery';

const newsContainer = document.querySelector('.news__container');
let pagination = undefined;
let page = 1;
const perPage = 7;

async function paginate() {
  await fetchPopularNews(page, perPage); //(1, 5)

  pagination = await new Pagination('pagination', {
    totalItems: 100,

    itemsPerPage: 5,
    visiblePages: 3,
    page: 1,
    template: {
      page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
      currentPage: `<strong class="tui-page-btn tui-is-selected">{{page}}</strong>`,
      disabledMoveButton: type => {
        let template = '';

        if (type.type === 'first') {
          template =
            '<div class="fl-page-btn disabled-btn">' +
            '<span class="custom-ico">FIRST</span>' +
            '</div>';
        } else if (type.type === 'prev') {
          template =
            '<div class="pn-page-btn disabled-btn">' +
            '<span class="custom-ico"><</span>' +
            '</div>';
        } else if (type.type === 'next') {
          template =
            '<div class="pn-page-btn disabled-btn">' +
            '<span class="custom-ico">></span>' +
            '</div>';
        } else if (type.type === 'last') {
          template =
            '<div class="fl-page-btn disabled-btn">' +
            '<span class="custom-ico">LAST</span>' +
            '</div>';
        }
        return template;
      },

      moveButton: type => {
        let template = '';

        if (type.type === 'first') {
          template =
            '<div class="fl-page-btn">' +
            '<span class="custom-ico">FIRST</span>' +
            '</div>';
        } else if (type.type === 'prev') {
          template =
            '<div class="pn-page-btn">' +
            '<span class="custom-ico"><</span>' +
            '</div>';
        } else if (type.type === 'next') {
          template =
            '<div class="pn-page-btn">' +
            '<span class="custom-ico">></span>' +
            '</div>';
        } else if (type.type === 'last') {
          template =
            '<div class="fl-page-btn">' +
            '<span class="custom-ico">LAST</span>' +
            '</div>';
        }
        return template;
      },
      moreButton: type => {
        if (type.type === 'prev') {
          return `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>`;
        } else if (type.type === 'next') {
          return `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a><div class="page-btn"><span class="custom-ico">LAST</span></div>`;
        }
      },
    },
  });

  pagination.on('afterMove', event => {
    const refCard = document.querySelectorAll('.card');
    refCard.forEach(e => e.remove());

    const { page } = event;

    fetchPopularNews(page, perPage);
    // const news = new NewsApiService();
    // console.log(news.searchNewsByCategory());
  });
}

paginate();

// export default paginate;

//!=====================

// let paginationNumbers;
// let paginationNumber;
// let listItems;
// let nextButton;
// let prevButton;
// let currentPage = 1;
// let pageCount;
// const paginationLimit = 2;

// async function paginate(fetchNews) {
//   await fetchNews();
//   paginationNumbers = document.getElementById('pagination-numbers');

//   const paginatedList = document.querySelector('.news__container');
//   console.log(paginatedList, 'paginatedList');
//   listItems = paginatedList.querySelectorAll('.card');
//   nextButton = await document.getElementById('next-button');
//   prevButton = await document.getElementById('prev-button');

//   pageCount = Math.ceil(listItems.length / paginationLimit);
// }

// // paginate();

// const disableButton = button => {
//   button.classList.add('disabled');
//   button.setAttribute('disabled', true);
// };

// const enableButton = button => {
//   button.classList.remove('disabled');
//   button.removeAttribute('disabled');
// };

// const handlePageButtonsStatus = () => {
//   if (currentPage === 1) {
//     disableButton(prevButton);
//   } else {
//     enableButton(prevButton);
//   }

//   if (pageCount === currentPage) {
//     disableButton(nextButton);
//   } else {
//     enableButton(nextButton);
//   }
// };

// const handleActivePageNumber = () => {
//   document.querySelectorAll('.pagination-number').forEach(button => {
//     button.classList.remove('active');
//     const pageIndex = Number(button.getAttribute('page-index'));
//     if (pageIndex == currentPage) {
//       button.classList.add('active');
//     }
//   });
// };

// const appendPageNumber = (index, pageCount) => {
//   const pageNumber = document.createElement('button');
//   if (pageCount <= 5) {
//     pageNumber.className = 'pagination-number';
//     pageNumber.innerHTML = index;
//     pageNumber.setAttribute('page-index', index);
//     pageNumber.setAttribute('aria-label', 'Page ' + index);

//     paginationNumbers.appendChild(pageNumber);
//   } else if (pageCount >= 7) {
//     if (index === 1 || index === pageCount) {
//       pageNumber.className = 'pagination-number';
//       pageNumber.innerHTML = index;
//       paginationNumbers.appendChild(pageNumber);
//     } else if (
//       index === currentPage - 1 ||
//       index === currentPage ||
//       index === currentPage + 1
//     ) {
//       pageNumber.className = 'pagination-number';
//       pageNumber.innerHTML = index;
//       pageNumber.setAttribute('page-index', index);
//       pageNumber.setAttribute('aria-label', 'Page ' + index);

//       paginationNumbers.appendChild(pageNumber);
//     } else if (index === 2 || index === pageCount - 1) {
//       pageNumber.innerHTML = '...';
//       pageNumber.setAttribute('disabled', true);
//       pageNumber.style.cursor = 'default';
//       pageNumber.style.border = 'none';
//       paginationNumbers.appendChild(pageNumber);
//     }

//     pageNumber.setAttribute('page-index', index);
//     pageNumber.setAttribute('aria-label', 'Page ' + index);
//   }
// };

// const getPaginationNumbers = () => {
//   for (let i = 1; i <= pageCount; i++) {
//     appendPageNumber(i, pageCount);
//   }
// };

// const setCurrentPage = async pageNum => {
//   currentPage = pageNum;

//   handleActivePageNumber();
//   handlePageButtonsStatus();

//   const prevRange = (pageNum - 1) * paginationLimit;
//   const currRange = pageNum * paginationLimit;

//   listItems.forEach((item, index) => {
//     item.classList.add('hidden');
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove('hidden');
//     }
//   });
// };

// window.addEventListener('load', () => {
//   getPaginationNumbers();

//   setCurrentPage(currentPage);

//   prevButton.addEventListener('click', () => {
//     setCurrentPage(currentPage - 1);
//   });

//   nextButton.addEventListener('click', () => {
//     setCurrentPage(currentPage + 1);
//   });

//   const pagiBtn = document.querySelectorAll('.pagination-number');
//   function setPage() {
//     pagiBtn.forEach(button => {
//       const pageIndex = Number(button.getAttribute('page-index'));

//       if (pageIndex) {
//         button.addEventListener('click', () => {
//           setCurrentPage(pageIndex);
//         });
//       }
//     });
//   }
//   setPage();
// });

// export default paginate;
//!===============
