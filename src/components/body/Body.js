import React, { Component } from 'react';
import { connect } from 'react-redux'
import i18next from 'i18next'
import { languageSwitchItem } from '../../actions/locales'
import { bindActionCreators } from 'redux';
import Tabs from './Tabs';
import Pane from './Tab';


class Body extends Component {

	render() {
		if (this.props.connectionStatus) {
			return (
				<div id="allTabsContainer">
					<Tabs selected={1}>
						<Pane label="PrivateKey">

						</Pane>
						<Pane label={i18next.t("verifyDs" : "verifyDs")}>

						</Pane>
						<Pane label={i18next.t("createDs" : "createDs")}>

						</Pane>
					</Tabs>
				</div>
		    );
		} else {
			return (
		        <div>
		        </div>
			);
		}
	}
}

function mapStateToProps(state) {
    return {
        locales: state.i18n,
        localesReducer: state.localesReducer,
        connectionStatus: state.connectionStatus
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);