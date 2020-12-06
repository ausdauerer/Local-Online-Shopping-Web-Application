import Table from './Table';
const React=require('react');


export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            value:'item',
            request_url:"http:localhost:3500",
            make_request:false
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event)
    {
        const target=event.target;
        const value=target.value;
        const name=target.name;
        this.setState({
            value:value
        });
    }
    handleSubmit(event)
    {
        event.preventDefault();
        const full_url="http://localhost:3500/shops/"+this.state.value;
        this.setState({ request_url:full_url , make_request:true });
    }
    render(){
        console.log(this.state);
        return(
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search:<input name="searchbox" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button onClick={this.handleSubmit}>Search</button>
            </form>
            <Table request_url={this.state.request_url} make_request={this.state.make_request} />
            </React.Fragment>
        );
    }
} 