export class View {
  constructor(api) {
    this.api = api;

    this.LoadCSS();
    this.body = document.querySelector('body');

    this.main = this.createElement('main', 'content');
    this.app = this.createElement('div', 'app');
    this.searchLine = this.createElement('div', 'search');
    this.searchInput = this.createElement('input', 'search__input');
    this.searchList = this.createElement('ul', 'search__list');
    this.repsList = this.createElement('div', 'repslist');

    this.searchLine.append(this.searchInput);
    this.app.append(this.searchLine);
    this.app.append(this.searchList);
    this.app.append(this.repsList);
    this.main.append(this.app);
    this.body.prepend(this.main);
  }

  LoadCSS() {
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = './style.css';

    document.head.appendChild(link);
  }

  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);

    if (elementClass) {
      element.classList.add(elementClass);
    }

    return element;
  }

  creatItemSearch(dataRep) {
    const repElement = this.createElement('li', 'search__item');

    repElement.addEventListener('click', () => this.addRepToList(dataRep));

    repElement.textContent = `${dataRep.name}`;
    this.searchList.append(repElement);
  }

  addRepToList(dataRep) {
    this.creatItemRepList(dataRep);
    this.clearSearch();
  }

  creatItemRepList(dataRep) {
    const nameRep = dataRep.name;
    const owner = dataRep.owner.login;
    const stars = dataRep.stargazers_count;

    this.elemRepList = this.createElement('div', 'repslist__item');
    this.elemRepListContent = this.createElement('div', 'repslist__content');
    this.elemRepName = this.createElement('p', 'repslist__text');
    this.elemOwnerName = this.createElement('p', 'repslist__text');
    this.elemStarsCount = this.createElement('p', 'repslist__text');
    this.btnClosed = this.createElement('button', 'repslist__btn');

    this.elemRepName.textContent = `Name: ${nameRep}`;
    this.elemOwnerName.textContent = `Owner: ${owner}`;
    this.elemStarsCount.textContent = `Stars: ${stars}`;

    this.repsList.prepend(this.elemRepList);
    this.elemRepList.append(this.elemRepListContent);
    this.elemRepListContent.append(this.elemRepName);
    this.elemRepListContent.append(this.elemOwnerName);
    this.elemRepListContent.append(this.elemStarsCount);
    this.elemRepList.append(this.btnClosed);

    this.repsList.addEventListener('click', (event) => this.deletRep(event));
  }

  deletRep(event) {
    let btn = event.target.closest('button');
    let elemRepList = event.target.closest('div');

    if (btn) elemRepList.remove();
  }

  clearSearch() {
    this.searchList.innerHTML = '';
    this.searchInput.value = '';
  }
}
