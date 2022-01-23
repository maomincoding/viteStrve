import { render,updateView } from 'strvejs';
import '../style/list.css';

export const listState = {
    arr: ['1', '2'],
    txt:'this is txt.'
  };

export default function List(v) {
  return render/*html*/`
    <div class='list'>
        <button onClick=${usePush}>Push</button>
        <button onClick=${useDel}>Del</button>
        <ul class="list-inner">
            ${listState.arr.map((todo) => render/*html*/`<li>${todo}</li>`)}
        </ul>
        <p>${v}</p>
        <p>{listState.txt}</p>
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