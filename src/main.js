import { Strve } from 'strvejs';
import template from './App.js';
import data from './state/index.js';
import ways from './ways/index.js';

Strve('#app', {
  data,
  template,
  ways,
});
