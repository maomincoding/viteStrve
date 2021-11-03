import { updateView } from 'strvejs';
import { listState } from '../template/list.js';
import { App } from '../App.js';

function f2() {
  updateView(() => {
    listState.arr.push('3');
  });
}

export { f2, listState };
