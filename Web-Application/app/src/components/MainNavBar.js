import { Link } from 'react-router-dom';
import './MainNavBar.js';
import './MainNavBar.css';
const React=require('react');

export default class MainNavBar extends React.Component{
    render(){
        return(
            <div id="mainnavbarwrapper">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> 
                <button id="clientbutton" type="button" class="btn btn-lg btn-block"><Link to="/user/client">Client</Link></button>
                <button id="sellerbutton" type="button" class="btn  btn-lg btn-block"><Link to="/user/seller">Seller</Link></button>
            </div>
        );
    }
}