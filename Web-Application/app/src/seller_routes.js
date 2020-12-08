import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import AddForm from './components/AddForm';
import NearByShops from './components/NearbyShops'
import ShowAllData from './components/FetchData.js';
import SearchItem from './components/SearchItem';
import SearchShop from './components/SearchShop';
import AllShopData from './components/Allshopdata';
import { BrowserRouter as Router } from 'react-router-dom';
import SellerNavBar from './components/SellerNavBar';
const React=require('react');


export default class ClientRoutes extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <SellerNavBar />
                <Switch>
                <Route exact path="/user/seller">
                  <Redirect to="/user/seller/data" />
                </Route>
                <Route exact path="/user/seller/data" component={AllShopData} />
                <Route exact path="/user/seller/add" component={AddForm}/>
                </Switch>
            </div>
            </Router>
        );
    }       
}
