export const connectionStatus = () => (dispatch) => {
    var readyStateChanged, url, xhr, reponseStatus;
        
    url = "https://local.cipher.kiev.ua:9090/api/v1/status"
    xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/json");

    readyStateChanged = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                reponseStatus = true;
            } else {
                reponseStatus = false;
            }
            dispatch({
                type: 'CONNECTION_STATUS',
                payload: reponseStatus
            })

        }
    };

    readyStateChanged = readyStateChanged.bind(this);

    xhr.onreadystatechange = readyStateChanged;
    xhr.send();
}

export const createSession = (url) => (dispatch) => {

    return new Promise(function (resolve, reject) {fetch(url, {
            method: 'POST',
            dataType: "json"
        },).then(function(response) {
            return response.json();
           })
          .catch( alert );
    })
}