import { render } from 'strvejs';
import {list} from '../components/list';
import '../style/home.css';
import logo from '../assets/logo.png';

const f1state = {
    obj: {
      a: 1,
    },
};

function home() {
  return render/*html*/`
    <div class='home'>
        <img src=${logo} class='logo'/>
        <h1>Hello Strve.js</h1>
        <div>
            <button id='btn1' onClick=${f1}>Add</button>
            <p>{f1state.obj.a}</p>
            <input value="${f1state.obj.a}" class="int"/>
        </div>
        ${list()}
    </div>
`;
}


function f1() {
    updateView(() => {
      f1state.obj.a++;
    });
}

export {home,f1state} ;
