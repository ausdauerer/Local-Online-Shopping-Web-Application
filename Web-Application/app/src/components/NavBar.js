import { Link } from 'react-router-dom';
const cart=require('../img/cart.png');
const React=require('react');

export default class NavBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/path/to/material-icons/css/material-icons.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> 
                <nav class="navbar navbar-inverse"> 
                    <div class="container-fluid"> 
                      <div class="navbar-header"> 
                        <img src={cart}></img>
                      </div> 
                      <ul class="nav navbar-nav"> 
                      <li><Link to="/user/client/data">Nearby shops</Link></li>
                      <li><Link to="/user/client/searchitem">Search</Link></li>
                      <li><Link to="/user/client/searchshop">Lookup a shop</Link></li>
                      </ul> 
                    </div> 
                </nav> 
            </React.Fragment>
        );
    }
}