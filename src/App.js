import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sbaiti",
      surname: "sbaiti"
    }
  }
  render() {
    console.log(this.state.name);
    console.log(this.state.name);
    let a = "";
    {
      this.state.name ?
        a = "tal" : this.state.surname ? a = "tloul" : a = "talgg"
    }
    console.log(a);
    return (
      <div className="App">
        {this.state.name}
      </div>
    );
  }
}

export default App;
