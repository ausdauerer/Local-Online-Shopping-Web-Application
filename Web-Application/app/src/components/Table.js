import './Table.css';
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
export default class Table extends React.Component{
    render(){
            const array=this.props.data;
            console.log(array);
            return(
                <table id="displaytable" class="table table-dark">
                    <tbody>{(this.props.data).map((obj,i) => <Row key={i} object={obj}/>)}</tbody>
                </table>
            );
        }
    
}
