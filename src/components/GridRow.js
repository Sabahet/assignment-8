import React, { Component } from 'react';
import GridColomn from './GridColomn';

class GridRow extends Component {
	
	createCols = () => {
		let cols = [];
		for(let i = 0; i < this.props.numCols; i++){
			cols.push(<GridColomn selectedColor={this.props.selectedColor} currentColor={this.props.currentColor} setCurrentColor={this.props.setCurrentColor}/>)
		}
		return cols;
	}
	render(){
		return(<tr>{this.createCols()}</tr>);
	}
}
export default GridRow;