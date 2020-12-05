import HelloWorld from './components/HelloWorld';
import Table from './components/Table'
var React=require('react');

export default class App extends React.Component{
  render(){
    return(
    <React.Fragment><HelloWorld /><Table /></React.Fragment>
    );
  }
}
