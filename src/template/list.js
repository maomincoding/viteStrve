import { render } from 'strvejs';

const listState = {
  arr: ['1', '2'],
};

function list() {
  return render`
    <div class='inner'>
        <button id='btn2'>remove</button>
        <ul>
            ${listState.arr.map((todo) => render`<li key=${todo}>${todo}</li>`)}
        </ul>
    </div>
`;
}

export { list, listState };
