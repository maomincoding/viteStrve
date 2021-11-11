import { render } from 'strvejs';
import { home, list } from './template/index.js';

function App() {
  return render`
        <div class='inner'>
            ${home()}
            ${list()}
            <p>2</p>
            <p>1</p>
        </div>
    `;
}

export { App };
