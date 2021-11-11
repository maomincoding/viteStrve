import { Strve, useEvent } from 'strvejs';
import { App } from './App.js';
import { f1, f1state, f2, listState } from './ways/index.js';

Strve('#app', {
  data: { f1state, listState },
  template: App,
  ways: [useEvent('#btn1', 'click', f1), useEvent('#btn2', 'click', f2)],
});
