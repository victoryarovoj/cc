import React, { Component } from 'react'
import { connect } from 'react-redux'
import { languageSwitchItem } from '../actions/locales'
// import i18next from 'i18next'
import { bindActionCreators } from 'redux';

import Header from '../components/header/Header'

class HeaderContainer extends Component {

	componentDidMount() {
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
    	language: state.localesReducer.language,
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