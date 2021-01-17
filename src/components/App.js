import React, { Component } from 'react';
import Grid from './Grid.js';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numRows: 0,
      numCols: 1,
      currColor: "black",
      selectedColor: "#8A2BE2"
    }
  }
  addRow = () => {
    this.setState({numRows: this.state.numRows+1})
  
  }
  addCol = () => {
    this.setState({numCols: this.state.numCols+1})

  }

  remCol = () => {
    this.setState({numCols: this.state.numCols-1})
  }

  remRow = () => {
    this.setState({numRows: this.state.numRows-1})
  }

  changeColor = (e) => {
    this.setState({selectedColor:e.target.value});
  
    
  }
  fillAll=() =>{

    this.setState({currColor: this.selectedColor })
    console.log("Fill all was called")
    console.log(this.selectedColor)
  }

  setCurrentColor = (value) => {
    //console.log("value before: ", this.state.currentColor )
    this.setState({currentColor: this.state.selectedColor })
    console.log("value after: ", this.state.currentColor )
  }
  render() {
    return (
      <div className="App">
      <button className="button" onClick={this.addRow}>Add Row</button>
      <button  className="button" onClick={this.addCol}>Add Column</button>
      <button  className="button" onClick={this.remCol}>Remove Column</button>
      <button  className="button" onClick={this.remRow}>Remove Row</button>
      <button className = "button" onClick={this.fillAll}>Fill All</button>
<br></br>
<br></br>
      <select class ="drop-down" onChange ={this.changeColor}>
        <option value="#8A2BE2">Purple</option>
        <option value="#00FF00">Green</option>
        <option value="#004DFF">Blue</option>
        <option value="#FFC100">Orange</option>
      </select>
      <Grid numRows={this.state.numRows} numCols={this.state.numCols} 
       currentColor={this.state.currentColor} selectedColor={this.state.selectedColor} changeColor={this.changeColor} setCurrentColor={this.setCurrentColor}/>
      </div>
    );
  }
}

export default App;

