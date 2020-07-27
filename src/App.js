import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"sbaiti"
    }
  }
  render(){
    console.log(this.state.name);
    console.log(this.state.name);

  return (
    <div className="App">
      {this.state.name}
    </div>
  );
}
}

export default App;
