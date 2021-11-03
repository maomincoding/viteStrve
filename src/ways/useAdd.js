import { updateView } from 'strvejs';

const f1state = {
  obj: {
    a: 1,
  },
};

function f1() {
  updateView(() => {
    f1state.obj.a++;
  });
}

export { f1, f1state };
