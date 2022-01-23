import { Strve } from 'strvejs';
import template from './App.js';
import data from './state/index';

Strve('#app', {
  data,
  template,
});

// HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
