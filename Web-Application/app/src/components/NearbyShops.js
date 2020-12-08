import List from './List';
import './NearByShops.css';
const React=require('react');

export default class NearByShops extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            error:null,
            isLoaded:false,
            data:[],
         };
         this.componentDidMount=this.componentDidMount.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:3500/shops",{method:'GET'})
            .then(res=>res.json())
            .then(
                (result)=>{  this.setState({isLoaded:true,data:result});  },
                (error)=>{  this.setState({isLoaded:true,error});}
            );
    }
    render(){
        console.log(this.state);
        const {error,isLoaded,data}=this.state;
        if(error){  return(<div>Error</div>);   }
        else if(!isLoaded){ return(<div>Loading</div>); }
        else
        {    
            const k="name";
            return(
                <div id="nearbyshopswrapper">
                <h3 id="messege">Here are some shops which we think are convinient for you to visit</h3>
                <List data={this.state.data} k={k}/>
                </div>
            );
        }
    }
}