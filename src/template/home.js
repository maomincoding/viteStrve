import { render } from 'strvejs';
import '../style/home.css';
import logo from '../assets/logo.png';
import { f1state } from '../ways/useAdd.js';

function home() {
  return render`
    <div class='home'>
        <img src="${logo}" class="logo"/>
        <div>
            <h1>Hello Strve.js</h1>
            <button id='btn1'>add</button>
            <p>{f1state.obj.a}</p>
            <input value="${f1state.obj.a}"/>
        </div>
    </div>
`;
}

export { home };
