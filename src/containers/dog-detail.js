import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogDetail extends Component {
	

	render () {
		if (!this.props.dog) {
			return (<h4>Select a dog...</h4>)
		}
		return (
			<div>
				<img src={this.props.dog.thumbnail} />
				<h2><strong>{this.props.dog.breed}</strong></h2>
				<h3><strong>Origin: </strong>{this.props.dog.origin}</h3>
				<h3><strong>Description: </strong>{this.props.dog.description}</h3>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		dog: state.activeDog
	};
}

export default connect(mapStateToProps)(DogDetail);