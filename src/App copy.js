import React from 'react';
import './App.css';

/*function Helloworld(props) {
  return (  
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>
  );
}*/

class Helloworld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  // !this.state.show   indica q mandará el otro valor

  render() {
    if (this.state.show){
      return (  
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow} >Toogle Show</button>
        </div>
      );
    }
    else{
      return <h1>
          There are not elements
          <button onClick={this.toggleShow} >Toogle Show</button>
      </h1>  
    }
    
  }
}

/*
const App = () =><div>This is my component: <Helloworld/></div>
*/
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fast" subtitle="Hola"/>
      <Helloworld mytext="Hola Mundo"/>
      <Helloworld mytext="Hello!"/> 
    </div>
  );
}

export default App;
