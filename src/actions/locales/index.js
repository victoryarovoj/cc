import i18next from 'i18next'

export const getLanguage = () => (dispatch) => {
    var url = window.location.search;
    var re = /\?.*language=([\w]{2})/;
    var res = url.match(re);
    var lang = "uk";
        if (res) {
            lang =res[1];
        }

    return dispatch({
        type: 'GET_LANGUAGE',
        payload: lang
    })
}

export const getLocaleResourcePath = (lng) => (dispatch) => {
    var baseUrl = window.location.pathname;
    var path;

    if (baseUrl.match(new RegExp("instances"))) {
        path = "../locales/{{lng}}/{{ns}}.json";
    } else {
        path = "../../locales/{{lng}}/{{ns}}.json";
    }

    return dispatch({
        type: 'GET_LOCALE_RESOURCE_PATH',
        payload: path
    })
}

export const languageSwitchItem = (aDisplayTitle, aLanguageCode, aItems) => (dispatch) => {
    this.items = aItems;
    this.displayTitle = aDisplayTitle;
    this.languageCode = aLanguageCode;

    i18next.changeLanguage(this.languageCode);

    return dispatch({
        type: 'LANGUAGE_SWITCH_ITEM',
        payload: this.items
    })
}

export const getCurrentLanguage = (lng) => (dispatch) => {
    return dispatch({
        type: 'GET_CURRENT_LANGUAGE',
        payload: lng
    })
}