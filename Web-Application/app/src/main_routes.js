/*import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import AddForm from './components/AddForm';
import ShowAllData from './components/FetchData.js';
import SearchItem from './components/SearchItem';
import SearchShop from './components/SearchShop';
const React=require('react');


export default class MainRoutes extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <Switch>
                <Route exact path="/Home"  />
                <Route exact path="/">
                  <Redirect to="/Home" />
                </Route>
                <Route exact path="/data" component={ShowAllData} />
                <Route exact path="/change" component={AddForm}/>
                <Route exact path="/searchitem" component={SearchItem} />
                <Route exact path="/searchshop" component={SearchShop}/>
                <Route exact path="/searchitem2"/>
                </Switch>
            </div>
        );
    }       
}*/

import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import ClientRoutes from './client_routes';
import SellerRoutes from './seller_routes';
const React=require('react');

export default class MainRoutes extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                <Route exact path="/user" component={MainNavBar}/>
                <Route exact path="/">
                  <Redirect to="/user" />
                </Route>
                <Route exact path="/user/client" component={ClientRoutes} />
                <Route exact path="/user/seller" component={SellerRoutes}/>
                </Switch>
            </div>
        );
    }       
}