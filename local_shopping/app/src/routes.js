import { Route, Switch, Redirect } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Table from './components/Table';
import NavBar from './components/Navbar.js';
import ChangeForm from './components/ChangeForm';
const React=require('react');

export default class Routes extends React.Component{
    render(){
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={HelloWorld} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/data" component={Table} />
        <Route exact path="/change" component={ChangeForm} />
      </Switch>
    </div>
  );
    }
}