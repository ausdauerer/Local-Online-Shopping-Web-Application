import { Fragment } from 'react';
import './AddForm.css';

const React=require('react');

export default class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shop:"none",
            item:"none",
            availability:true,
            quantity:-1,
            price:-1,
            discount:-1,
       };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        if(name=="Quantity"||name=="Price"||name=="Discount")
            value=parseInt(value);
        if(name=="avl")
        {
            name="availability";
            console.log(value);
            if(value=="false")
                value=false;
            if(value=="true")
                value=true;
        }
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event){
        var validationSuccess=true;
        const object=this.state;
        const keys=Object.keys(this.state);
        for(var i=0;i<keys.length;i++)
        {
            const value=object[keys[i]];
            if(value=="none"||value==-1)
                {
                    alert("Please Enter all the fields to register");
                    validationSuccess=false;
                    break;
                }
        }
        if(validationSuccess)
        {
            this.setState({ shop:"hypermart"});
            fetch("http://localhost:3500/"+this.state.shop+"/items",{method:'POST',headers: {
                'Content-Type': 'application/json'
              },body:JSON.stringify(object)})
            .then(res=>res.json());
        }
        event.preventDefault();
    }
    render(){
        console.log(this.state);
        const path=window.location.pathname;
        return(
            <div id="formwrapper">
                <h4>Enter selling details of the items</h4>
            <form id="formm" class="form-group" onSubmit={this.handleSubmit}>
                <label>
                    Shop name:<input class="fields" name="shop" type="text" value={this.state.shop} onChange={this.handleChange}/>
                </label>
                <label>
                    Item:
                    <input class="fields" name="item" type="text" value={this.state.item} onChange={this.handleChange}/>
                </label>
                <br/>
                <div onChange={this.handleChange}>
                Availability: 
                    <input type="radio" value="true" name="avl"  /> Available
                    <input type="radio" value="false" name="avl" /> Not Available
                    </div>
                <br/>
                <label>
                    Quantity: 
                    <input class="fields" name="quantity" type="number" value={this.state.quantity} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Price: 
                    <input class="fields" name="price" type="number" value={this.state.price} onChange={this.handleChange}/> .Rs per item
                </label>
                <br/>
                <label>
                    Discount: 
                    <input class="fields" name="discount" type="number" value={this.state.discount} onChange={this.handleChange}/> %
                </label>
                <br/>
                <button id="searchshopbutton" type="button" class="btn btn-primary" onClick={this.handleSubmit}>Add Item</button>
            </form>
            </div>
        );
    }
}