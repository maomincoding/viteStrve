import { useEvent } from 'strvejs';
import { f1 } from './useAdd.js';
import { f2 } from './usePush.js';

export default [useEvent('#btn1', 'click', f1), useEvent('#btn2', 'click', f2)];
