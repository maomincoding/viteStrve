import { render } from 'strvejs';
import { home, list } from './template/index.js';

function App() {
  return render`
        <div class='inner'>
            ${home()}
            ${list()}
        </div>
    `;
}

export { App };
