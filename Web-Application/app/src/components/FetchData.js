import Table from './Table.js';
import List from './List.js';
const React=require('react');


export default class ShowAllData extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            error:null,
            isLoaded:false,
            data:[],
            fetch_url:"http://localhost:3500/shops"
         };
         this.componentDidUpdate=this.componentDidUpdate.bind(this);
    }
    componentDidUpdate(){
        console.log("FetchUpdate");
        console.log(this.state.fetch_url+this.props.url+this.props.fetch)
        if(this.props.fetch&&(this.state.fetch_url!=this.props.url))
        {
        console.log("Component updating");
        fetch(this.props.url,{method:'GET'})
            .then(res=>res.json())
            .then(
                (result)=>{  this.setState({isLoaded:true,data:result});  },
                (error)=>{  this.setState({isLoaded:true,error});}
            );
            this.setState({ fetch_url:this.props.url});
            this.props.revert();
            return(true);
        }
        return(false);
    }
    render(){
        console.log(this.props.url);
        console.log(this.state.data);
        const {error,isLoaded,data}=this.state;
        if(error){  return(<div>Error</div>);   }
        else if(!isLoaded){ return(<div>Please Search For something</div>); }
        else
        {    
            return(
                <List data={this.state.data} k={this.props.displaykey}/>
            );
        }
    }
}