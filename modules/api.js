const URL = 'https://api.github.com/search/';
const REP_PER_PAGE = 5;

export class Api {
  async loadReps(value) {
    return await fetch(
      `${URL}repositories?q=${value}&per_page=${REP_PER_PAGE}`
    );
  }
}
