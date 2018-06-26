import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectionStatus } from '../actions/api/';
import { getLanguage, getLocaleResourcePath, languageSwitchItem } from '../actions/locales'
import HeaderContainer from './HeaderContainer';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/sjwsa-client-0.1.css'


class App extends Component {
	constructor(props) {
		super(props);

		this.state={
			connected: this.props.connectionStatus
		}
	}

	componentDidMount() {
		let _this = this

		this.checkConnection = () => {
			_this.props.actions.connectionStatus()
			_this.setState({connected: _this.props.connectionStatus});
			setTimeout(this.checkConnection, 10000);
		}

		this.checkConnection();
	}
	render() {
		return (
			<div className="container" style={{width: "970px"}}>
				<HeaderContainer connectionStatus={connectionStatus} />
				<h1>ping</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        connectionStatus: state.connectionStatus,
        locales: state.i18n,
        localesReducer: state.localesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
	    connectionStatus,
	    getLanguage,
	    getLocaleResourcePath,
	    languageSwitchItem
    };
    return {
       actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);