import { render } from 'strvejs';
import { listState } from '../state/list.js';
import '../style/list.css';

function list() {
  return render`
    <div class='list'>
        <button id='btn2'>Push</button>
        <button id='btn3'>Del</button>
        <ul class="list-inner">
            ${listState.arr.map((todo) => render`<li key=${todo}>${todo}</li>`)}
        </ul>
    </div>
`;
}

export { list };
