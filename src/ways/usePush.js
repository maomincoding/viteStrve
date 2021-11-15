import { updateView } from 'strvejs';
import { listState } from '../state/list.js';

function f2() {
  updateView(() => {
    listState.arr.push('3');
  });
}

export { f2 };
