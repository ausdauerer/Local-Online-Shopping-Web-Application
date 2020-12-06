import App from './App';
import Routes from './routes.js';
import { BrowserRouter as Router } from 'react-router-dom';
var ReactDOM=require('react-dom');

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);