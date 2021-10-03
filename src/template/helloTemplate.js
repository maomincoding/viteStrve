import { render } from "strvejs"
import logo from '../assets/logo.png';
import './helloTemplate.css';

export default render`
<div class="container">
  <img src="${logo}"/>
  <h1>Hello Strve.js</h1>
</div>
`;
