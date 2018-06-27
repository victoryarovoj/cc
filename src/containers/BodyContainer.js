import React, { Component } from 'react'
import { connect } from 'react-redux'
import { languageSwitchItem } from '../actions/locales'	
import { bindActionCreators } from 'redux';

import Body from '../components/body/Body'

class BodyContainer extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Body connectionStatus={this.props.connectionStatus} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);