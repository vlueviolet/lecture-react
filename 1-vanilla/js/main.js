import Controller from './Controller.js';
import Store from './store.js';
import storage from './storage.js';

const tag = '[main]';

document.addEventListener('DOMContentLoaded', main);

function main() {
  console.log(tag, 'main');

  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView(),
    historyListView: new HistoryListView()
  };

  new Controller(store, views);
}
