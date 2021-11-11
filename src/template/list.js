import { render } from 'strvejs';
import '../style/list.css';

const listState = {
  arr: ['1', '2'],
};

function list() {
  return render`
    <div class='list'>
        <button id='btn2'>Push</button>
        <ul class="list-inner">
            ${listState.arr.map((todo) => render`<li key=${todo}>${todo}</li>`)}
        </ul>
    </div>
`;
}

export { list, listState };
