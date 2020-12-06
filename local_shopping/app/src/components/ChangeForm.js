const React=require('react');

export default class ChangeForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:"none",
            availability:"none",
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
            if(value=="true")
                value=true;
            if(value=="false")
                value=false;
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
            fetch("http://localhost:3500/hypermart/items",{method:'POST',headers: {
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Item:
                    <input name="item" type="text" value={this.state.item} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Availability: <div onChange={this.handleChange}>
                    <input type="radio" value="true" name="avl"  /> Available
                    <input type="radio" value="false" name="avl" /> Not Available
                    </div>
                </label>
                <br/>
                <label>
                    Quantity: 
                    <input name="quantity" type="number" value={this.state.qt} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Price: 
                    <input name="price" type="number" value={this.state.pr} onChange={this.handleChange}/> .Rs per item
                </label>
                <br/>
                <label>
                    Discount: 
                    <input name="discount" type="number" value={this.state.dt} onChange={this.handleChange}/> %
                </label>
                <br/>
                <input type="button" value="Submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}