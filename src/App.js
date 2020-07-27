import React from 'react';
import './App.css';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name="sbaiti"
    }
  }
  render(){
    console.log(this.state.name);
  return (
    <div className="App">
    </div>
  );
}
}

export default App;
