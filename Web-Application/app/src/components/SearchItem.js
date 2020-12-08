import FetchData from './FetchData';
import './SearchItem.css';
const React=require('react');


export default class SearchItem extends React.Component{
    constructor()
    {
        super();
        this.state={
            fetchdata:false,
            url:"http://localhost:3500/shops",
            value:''
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.revertstate=this.revertstate.bind(this);
    }
    revertstate(){
        this.setState({fetchdata:false});
    }
    handleClick(event)
    {
        this.setState({ fetchdata:true });
    }
    handleChange(event){
        this.setState({value:event.target.value,url:"http://localhost:3500/shops/"+event.target.value});
    }
    render(){
        const name="shop";
        console.log(this.state);
            return(
                <div id="searchpagewrapper">
                <div id="searchbarwrapper" class="md-form mt-0">
                <input class="form-control" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Search for anything you wish" aria-label="Search" />
                <button id="searchbutton" type="button" class="btn btn-primary" onClick={this.handleClick}>Search</button>
                </div>
                <FetchData fetch={this.state.fetchdata} url={this.state.url} revert={this.revertstate} displaykey={name} />
                </div>
            );
    }
}