import Pagination from 'tui-pagination';

import { fetchPopularNews } from '../gallery';

const newsContainer = document.querySelector('.news__container');
let pagination = undefined;
const perPage = 6;

async function paginate() {
  await fetchPopularNews(perPage);

  pagination = await new Pagination('pagination', {
    totalItems: newsPaginationLength(),

    itemsPerPage: perPage,
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
    renderCards(page, perPage);
  });
}

// paginate();
