const React=require('react');

class Cell extends React.Component{
    render(){
        var data=this.props.data;
        return( <td>{data}</td> );
    }
}
class Row extends React.Component{
    render(){
        var object=this.props.object;
        const row=(Object.keys(object)).map((key,i) => <Cell key={i} data={object[key]} />)
        return( <tr>{row}</tr> );
    }
}
export default class Change extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            error:null,
            isLoaded:false,
            data:[]
         };
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
        const {error,isLoaded,data}=this.state;
        if(error){  return(<div>Error</div>);   }
        else if(!isLoaded){ return(<div>Loading</div>); }
        else
        {
            const array=this.state.data;
            const rows=array.map((obj,i) => <Row key={i} object={obj}/>);
            return(
                <table>
                    <tbody>{rows}</tbody>
                </table>
            );
        }
    }
}