import { eventListener } from 'strvejs';
import { useItem, executes } from './item';

const eventList = [
    ['.color-red', 'click', useItem],
    ['.txt', 'click', executes]
]

function methods() {
    for (let index = 0; index < eventList.length; index++) {
        const element = eventList[index];
        eventListener(...element);
    }
}

export default methods