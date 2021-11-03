import { render } from 'strvejs';
import '../style/home.css';
import logo from '../assets/logo.png';

function home() {
  return render`
    <div class='home'>
        <img src="${logo}" class="logo"/>
        <div>
            <h1>Hello Strve.js</h1>
            <button id='btn1'>add</button>
            <p>{obj.a}</p>
        </div>
    </div>
`;
}

export { home };
