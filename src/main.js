import { Strve, useEvent } from 'strvejs';
import { App } from './App.js';
import { f1, f1state, f2, listState } from './ways/index.js';

// init
function init() {
  Strve('#app', {
    data: Object.assign({}, f1state, listState),
    template: App,
    ways: [useEvent('#btn1', 'click', f1), useEvent('#btn2', 'click', f2)],
  });
}

// HMR
if (import.meta.hot) {
  init();
  import.meta.hot.accept('./App.js', (_app) => {
    init(_app);
  });
}
