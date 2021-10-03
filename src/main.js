import { Strve } from 'strvejs';
import data from './data';
import App from './App';
import methods from './methods';

// init
function init(_app) {
  Strve("#app", {
    template: _app ? _app.default : App,
    data: data
  });
  // The event is handled after the Strve API
  methods();
}

// HMR
if (import.meta.hot) {
  init();
  import.meta.hot.accept('./App.js', (_app) => {
    init(_app);
  })
}