import React, { Component } from 'react'
import { connect } from 'react-redux'
import { languageSwitchItem } from '../actions/locales'	
import { bindActionCreators } from 'redux';

import Header from '../components/header/Header'

class HeaderContainer extends Component {

	componentDidMount() {
		var availableLanguege = [];
		this.props.actions.languageSwitchItem('укр', 'uk', availableLanguege);
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        locales: state.i18n,
        localesReducer: state.localesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
	    languageSwitchItem
    };
    return {
       actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);