export class Search {
  constructor(view, api) {
    this.view = view;
    this.api = api;

    this.view.searchInput.addEventListener(
      'keyup',
      this.debounce(this.repsRequest.bind(this), 250)
    );
  }

  async repsRequest() {
    const searchValue = this.view.searchInput.value;

    try {
      if (searchValue) {
        this.clearReps();
        const res = await this.api.loadReps(searchValue);
        const data = await res.json();

        for (let rep of data.items) {
          await this.view.creatItemSearch(rep);
        }

      } else {
        this.clearReps();
      }

    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  clearReps() {
    this.view.searchList.innerHTML = '';
  }

  debounce(fn, debounceTime) {
    let timer;

    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, debounceTime);
    };
  }
}
