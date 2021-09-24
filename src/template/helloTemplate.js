import { template } from "strvejs"
import logo from '../assets/logo.png';
import './helloTemplate.css';

export default template`
<div class="container">
  <img src="${logo}"/>
  <h1>Hello Strview.js</h1>
</div>
`;
