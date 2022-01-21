import { render } from 'strvejs';
import '../style/list.css';

const listState = {
    arr: ['1', '2'],
  };
  

function list() {
  return render/*html*/`
    <div class='list'>
        <button id='btn2' onClick=${f2}>Push</button>
        <button id='btn3' onClick=${f3}>Del</button>
        <ul class="list-inner">
            ${listState.arr.map((todo) => render/*html*/`<li>${todo}</li>`)}
        </ul>
    </div>
`;
}

function f2() {
    updateView(() => {
      listState.arr.push('3');
    });
}
  
function f3() {
    updateView(() => {
      listState.arr.splice(1, 1);
    });
}

export {listState,list} ;
