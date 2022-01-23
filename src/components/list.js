import { render } from 'strvejs';
import '../style/list.css';

export const listState = {
    arr: ['1', '2'],
  };

export default function List() {
  return render/*html*/`
    <div class='list'>
        <button id='btn2' onClick=${usePush}>Push</button>
        <button id='btn3' onClick=${useDel}>Del</button>
        <ul class="list-inner">
            ${listState.arr.map((todo) => render/*html*/`<li>${todo}</li>`)}
        </ul>
    </div>
`;
}

function usePush() {
    updateView(() => {
      listState.arr.push('3');
    });
}
  
function useDel() {
    updateView(() => {
      listState.arr.splice(1, 1);
    });
}