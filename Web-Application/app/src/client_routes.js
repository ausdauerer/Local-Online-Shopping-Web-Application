import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import AddForm from './components/AddForm';
import NearByShops from './components/NearbyShops'
import ShowAllData from './components/FetchData.js';
import SearchItem from './components/SearchItem';
import SearchShop from './components/SearchShop';
import { BrowserRouter as Router } from 'react-router-dom';
const React=require('react');


export default class ClientRoutes extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <NavBar />
                <Switch>
                <Route exact path="/user/client">
                  <Redirect to="/user/client/searchitem" />
                </Route>
                <Route exact path="/user/client/data" component={NearByShops} />
                <Route exact path="/user/client/searchitem" component={SearchItem} />
                <Route exact path="/user/client/searchshop" component={SearchShop}/>
                </Switch>
            </div>
            </Router>
        );
    }       
}
