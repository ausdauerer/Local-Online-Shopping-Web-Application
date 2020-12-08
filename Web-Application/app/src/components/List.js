const React=require('react');

export default class List extends React.Component{
    render(){
        const data=this.props.data;
        const k=this.props.k;
        var array=[];
        for(var i=0;i<data.length;i++)
            array.push((data[i])[k]);
        const listitems=array.map( (element,index) => <li class="list-group-item" id={index} >{element}</li>);
        return(<ul class="list-group">{listitems}</ul>);
    }
}