import { Strve } from 'strvejs';
import template from './App.js';
import {listState} from './components/list';
import {f1state} from './template/home';

Strve('#app', {
  data:{
    listState,
    f1state
  },
  template,
});

// HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
