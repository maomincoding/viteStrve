import { render } from 'strvejs';

function home() {
  return render`
    <div class='inner'>
        <button id='btn1'>add</button>
        <p>{obj.a}</p>
    </div>
`;
}

export { home };
