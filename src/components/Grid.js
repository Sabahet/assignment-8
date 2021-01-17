
import React, { Component } from 'react';
import GridRow from './GridRow.js';

class Grid extends Component {

	createRows = () => {
		let rows = [];
		//console.log(this.props.numRows);
		for(let i = 0; i < this.props.numRows; i++){
			rows.push(<GridRow numCols={this.props.numCols} currentColor={this.props.currentColor} selectedColor={this.props.selectedColor} setCurrentColor={this.props.setCurrentColor}/>);
		}
		return rows;

	}
	render(){
		return(<table><tbody>{this.createRows()}</tbody></table>);
	}
}
export default Grid;