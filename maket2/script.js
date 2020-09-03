//Кнопка "Показать еще" в каталоге
{
  const catalogShowMoreBtn = document.querySelector('.show-more-btn');
  catalogShowMoreBtn.addEventListener('click', showMoreCatalogRows);
  
  function showMoreCatalogRows() {
    const hiddenCatalogRows = catalogShowMoreBtn.parentElement.querySelectorAll('.catalog__scrl_hidden');
    let i = 0; 
    let row = hiddenCatalogRows[i] 
    if (hiddenCatalogRows.length > 1) {
      row.classList.remove('catalog__scrl_hidden')
      i++
    } else {
      row.classList.remove('catalog__scrl_hidden')
      catalogShowMoreBtn.style.display = 'none';
    }
  }
}

//Свернуть/развернуть список фильтров при клике по заголовку фильтра
{
  const filterHeaders = document.querySelectorAll('.filter-header');
  filterHeaders.forEach((header) => {
    header.addEventListener('change', toggleFilterList);
  });

  function toggleFilterList(event) {
    el = event.currentTarget;
    const checkbox = el.querySelector('.filter-header__checkbox')
    if (checkbox.checked === true) {
      el.nextElementSibling.style.display = 'none';
    } else {
      el.nextElementSibling.style.display = 'flex';
    }
  }
}

//Кнопка "Показать еще" в фильтре
{
  const filterListShowMoreBtn = document.querySelector('.filter-list__show-more-btn');
  filterListShowMoreBtn.addEventListener('click', showMoreFilters);
  const filterList = filterListShowMoreBtn.parentElement.querySelectorAll('.filter-list__item');

  function showMoreFilters(event) {
    event.preventDefault()
    filterList.forEach((filterItem, index) => {
      if (index >= 5) {
        filterItem.classList.toggle('filter-list__item_hidden')
        filterListShowMoreBtn.style.display = 'none';
      }
    });
  }
}

//Кнопка reset для отдельной группы чекбоксов в общей форме
{
  const resetBtn = document.querySelector('.btn-checkbox-list__reset');
  resetBtn.addEventListener('click', resetGroup);
  const checkboxesGroup = document.querySelectorAll('.btn-checkbox-list__checkbox');

  function resetGroup() {
    checkboxesGroup.forEach((checkbox) => {
      checkbox.checked = false;
    })
  }
}


//Мобильное меню
{
const filtersList = document.querySelector('.filters__list')
const mobMenu = document.querySelector('.burger')
mobMenu.addEventListener('click', showHideFilters);

function showHideFilters() {
  if (filtersList.style.display === 'none'|| filtersList.style.display === '') {
    filtersList.style.display = 'block';
  } else {
    filtersList.style.display = 'none';
  }
}

}
