import React, { Component } from 'react';
import { connect } from 'react-redux'
import i18next from 'i18next'
import { languageSwitchItem, getCurrentLanguage } from '../../actions/locales'
import { createSession } from '../../actions/api'
import { bindActionCreators } from 'redux';
import ServiceConnectionStatus from './ServiceConnectionStatus'
import Downloads from './Downloads'

import logo from '../../img/sjwsa-client-logo.png'

const availableLanguege = ["uk", "pl", "en"];
const availableLanguegeValue = ["УКР", "PLN", "ENG"];

class Header extends Component {

	componentDidMount() {
		i18next.changeLanguage('uk');
		this.props.actions.getCurrentLanguage('uk');
		this.createTmpSession()
		
	}

	createTmpSession() {
        this.props.actions.createSession("https://local.cipher.kiev.ua:9090/api/v1/ticket/").then(response => {
    		console.log(response);
        }).catch(function (e) {
            alert(i18next.t("ts:tsCreatingError"))
        })
    }

	changeLang(lang){
		this.props.actions.getCurrentLanguage(lang);
        this.props.actions.languageSwitchItem('eng', lang, availableLanguege);       
    }

    _renderLanguageButtonLine() {  

	    function options(child, index) {
	      let activeClass = (this.props.language === child ? 'btn btn-outline-success btn-sm' : 'btn btn-default btn-sm');
	      let textValue = (availableLanguegeValue[index])

	      return (
	        <button key={child} className={activeClass} style={{marginLeft: "7px"}} onClick={this.changeLang.bind(this, child)}>{textValue}</button>
	      );
	    }

	    return (
	    	<div id="languageButtonLine" className="col-md-12 text-md-right">
	    		{availableLanguege.map(options.bind(this))}
	        </div>
	    );
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
			        {this._renderLanguageButtonLine()}
			    </div>
			    <hr />
			    <Downloads connectionStatus={this.props.connectionStatus} />		    
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        localesReducer: state.localesReducer,
        language: state.localesReducer.language,
        connectionStatus: state.connectionStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
	    languageSwitchItem,
	    getCurrentLanguage,
	    createSession
    };
    return {
       actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);