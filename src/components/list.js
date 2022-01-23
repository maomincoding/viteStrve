import { render,updateView } from 'strvejs';
import style from  '../style/list.module.css';

export const listState = {
    arr: [1, 2],
    txt:'this is txt.'
  };

export default function List(v) {
  return render/*html*/`
    <div class='list'>
        <button onClick=${usePush}>Push</button>
        <button onClick=${useDel}>Del</button>
        <ul class="${style.listInner}">
            ${listState.arr.map((item) => render/*html*/`<li>${item}</li>`)}
        </ul>
        <p class="${style.int}">${v}</p>
        <p>{listState.txt}</p>
    </div>
`;
}

let count = 3;
function usePush() {
    updateView(() => {
      listState.arr.push(count++);
    });
}
  
function useDel() {
    updateView(() => {
      listState.arr.splice(1, 1);
    });
}