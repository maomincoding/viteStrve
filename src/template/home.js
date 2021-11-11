import { render } from 'strvejs';
import '../style/home.css';
import logo from '../assets/logo.png';
import { f1state } from '../ways/useAdd.js';

function home() {
  return render`
    <div class='home'>
        <img src="${logo}" class="logo"/>
        <h1>Hello Strve.js</h1>
        <div>
            <button id='btn1'>Add</button>
            <p>{f1state.obj.a}</p>
            <input value="${f1state.obj.a}" class="int"/>
        </div>
    </div>
`;
}

export { home };
