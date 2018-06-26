import React, { Component } from 'react';
import i18next from 'i18next'

class ServiceConnectionStatus extends Component {

	render() {
		if (this.props.connectionStatus) {
			return (
				<div className="serviceConnected" id="serviceConnectionStatus" style={{textAlign:"center"}}>
		        	{i18next.t("serviceConnected" : "serviceConnected")}
		        </div>
		    );
		} else {
			return (
		        <div className="serviceDisconnected" id="serviceConnectionStatus" style={{textAlign:"center"}}>
			        {i18next.t("serviceNotConnected" : "serviceNotConnected")}
		        </div>
			);
		}
	}
}

export default ServiceConnectionStatus