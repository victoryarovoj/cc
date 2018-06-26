import React, { Component } from 'react';
import i18next from 'i18next'

class Downloads extends Component {
	render () {
		if (this.props.connectionStatus) {
			return (<div></div>);
		} else {
			return (
				<div id="topScreen">
			        <div className="col-xs-10 col-xs-offset-1">
			            <h3 className="text-center">
			                <small>
			                    <span id="downloadJwsaByRef"></span><br/>
			                    <a href="../jnlp/pcs-dev-preview.jnlp" id="personalDsService">{i18next.t("downloadJwsaByRef" : "downloadJwsaByRef")}</a>
			                </small>
			            </h3>
			        </div>
			    </div>
			);
		}
	}
}

export default Downloads