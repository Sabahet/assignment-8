import React, { Component } from 'react';

class GridColomn extends Component {
	constructor(props){
		super(props);
		this.state={
			currColor: null
		}
	}
	onClick = () => {
		this.setState({currColor: this.props.selectedColor});
		console.log(this.state.currColor)
		console.log(this.props.selectedColor)
	}
	render(){
		//console.log(this.state.currColor)
		let style= {"background-color":this.state.currColor};
		return(<td className="cell" style={style} onClick={this.onClick}></td>);
	}
}
export default GridColomn;