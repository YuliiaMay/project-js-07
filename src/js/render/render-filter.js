import {
  onFilterCategoriesClick,
  onFilterCategoriesChange,
} from '../main/filter-category';

const filtersContainer = document.querySelector('.category__filter-container');

function renderButtons(category) {
  const { section, display_name } = category;

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('category__filter-btn');
  button.value = display_name;
  button.dataset.type = 'button';
  button.dataset.name = display_name;
  button.textContent = display_name;
  button.addEventListener('click', onFilterCategoriesClick);

  filtersContainer.insertAdjacentElement('beforeend', button);
}

function renderSelect(categories, className) {
  let listOptions = ['Others'];

  const listSelects = [];

  categories.map(category => {
    listOptions.push(category.display_name);
  });

  const select = document.createElement('select');
  select.addEventListener('change', onFilterCategoriesChange);
  listSelects.push(select);
  select.id = `select_${listSelects.length}`;
  select.name = 'selectName';
  select.classList.add('class-filter', className);
  filtersContainer.insertAdjacentElement('beforeend', select);

  for (let i = 0; i < listOptions.length; i++) {
    const option = document.createElement('option');
    if (i === 0) {
      option.disabled = true;
      option.selected = true;
      option.hidden = true;
    }
    option.value = listOptions[i];
    option.text = listOptions[i];
    select.add(option);
  }
}

export { renderButtons, renderSelect };
