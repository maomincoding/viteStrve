import { useEvent } from 'strvejs';
import { f1 } from './useAdd.js';
import { f2, f3 } from './usePush.js';

export default [useEvent('#btn1', 'click', f1), useEvent('#btn2', 'click', f2), useEvent('#btn3', 'click', f3)];
