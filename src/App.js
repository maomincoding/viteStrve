import { render } from 'strvejs';
import {home} from './template/home';

function template() {
  return render/*html*/`
        <div class='inner'>
            ${home()}
        </div>
    `;
}

export default template;
