import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectDog} from '../actions/index';

class DogList extends Component {
	createListItems() {
		return this.props.dogs.map((dog) => {
			return (<li key={dog.id} onClick={() => this.props.selectDog(dog)}>{dog.breed}</li>)
		});
	}

	render() {
		return (
			<ul>
				{this.createListItems()}
			</ul>
			)
	}
}

function mapStateToProps(state){
	return {
		dogs: state.dogs
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectDog: selectDog}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DogList);