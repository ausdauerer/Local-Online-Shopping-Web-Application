import logo from './logo.svg';
import NavBar from './components/NavBar';
import Routes from './main_routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes/>
    </Router>
  );
}

export default App;
