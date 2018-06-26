import React, { Component } from 'react';
import { connect } from 'react-redux'
import i18next from 'i18next'
import { languageSwitchItem } from '../../actions/locales'
import { bindActionCreators } from 'redux';
import ServiceConnectionStatus from './ServiceConnectionStatus'
import Downloads from './Downloads'

import logo from '../../img/sjwsa-client-logo.png'


class Header extends Component {

	componentDidMount() {
		i18next.changeLanguage('pl');
		i18next.changeLanguage('uk');
		var availableLanguege = [];
		this.props.actions.languageSwitchItem('укр', 'uk', availableLanguege);
	}

	changeLang(lang){
		var availableLanguege = ["en", "uk", "pl"];
        this.props.actions.languageSwitchItem('en', lang, availableLanguege);
        console.log(i18next.language);
        
    }

	render() {
		return (
			<div>			
				<div className="row mtb-default">
			        <div className="col-md-1 text-left">
			            <img src={logo} width="64" height="64" alt="Logo" />
			        </div>
			        <div className="col-md-8 text-left text-muted">
			            <h3 className="mtb-default" id="clientForService">{i18next.t("clientForService" : "clientForService")}</h3>
			            <span id="titleCipherBis">{i18next.t("titleCipherBis" : "titleCipherBis")}</span>
			        </div>
			        <div className="col-md-3  text-center text-muted">
			        	<ServiceConnectionStatus connectionStatus={this.props.connectionStatus} />
			        </div>
			    </div>
			    <div className="row mtb-default">
			        <div id="languageButtonLine" className="col-md-12 text-md-right">
			        	<button className="btn btn-outline-success btn-sm" style={{marginLeft: "7px"}} onClick={this.changeLang.bind(this, "uk")}>УКР</button>
						<button className="btn btn-default btn-sm" style={{marginLeft: "7px"}} onClick={this.changeLang.bind(this, "pl")}>PLN</button>
						<button className="btn btn-default btn-sm" style={{marginLeft: "7px"}} onClick={this.changeLang.bind(this, "en")}>ENG</button>
			        </div>
			    </div>
			    <hr />
			    <Downloads connectionStatus={this.props.connectionStatus} />		    
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);