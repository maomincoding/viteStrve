import { reactive, ref } from 'strvejs'

function executes() {
    reactive().obj.a.b = 3;
    ref().name = 'Strview.js';
}
function useItem() {
    ref().a = 100;
}

export {
    executes,
    useItem
}