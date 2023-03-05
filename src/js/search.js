(() => {
  const refs = {
    searchForm: document.querySelector('[data-search-form]'),
    searchBtn: document.querySelector('[data-search-btn]'),
  };
  refs.searchBtn.addEventListener('click', toggleSearch);

  function toggleSearch() {
    refs.searchForm.classList.toggle('is-open');
  }
})();
