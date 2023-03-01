const filtersContainer = document.querySelector('.category__filter-container');

function renderButtons(category) {
  const { section, display_name } = category;
  const button = `<button type="button" class="category__filter-btn" value"="${display_name}">${display_name}</button>`;

  filtersContainer.insertAdjacentHTML('beforeend', button);
}

function renderSelect(categories) {
  let listOptions = [];
  const listSelects = [];

  categories.map(category => {
    listOptions.push(category.display_name);
  });

  const select = document.createElement('select');
  listSelects.push(select);
  select.id = `select_${listSelects.length}`;
  select.name = 'selectName';
  select.classList.add('class-filter');
  filtersContainer.insertAdjacentElement('beforeend', select);

  for (let i = 0; i < listOptions.length; i++) {
    const option = document.createElement('option');
    option.value = listOptions[i];
    option.text = listOptions[i];
    select.add(option);
  }
}
export { renderButtons, renderSelect };