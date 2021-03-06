
const localesReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case 'GET_LANGUAGE': {
            return {
                ...state,
                lang: payload
            }
        }

        case 'GET_LOCALE_RESOURCE_PATH': {
            return {
                ...state,
                path: payload
            }
        }

        case 'GET_CURRENT_LANGUAGE': {
            return {
                ...state,
                language: payload
            }
        }

        case 'LANGUAGE_SWITCH_ITEM': {
            return {
                ...state,
                items: payload
            }
        }

        default:
            return state;
    }

}

// function getLanguage() {
//     var url = window.location.search;
//     var re = /\?.*language=([\w]{2})/;
//     var res = url.match(re);
//     var lang = "uk";
//     if (res) {
//         lang =res[1];
//     }

//     return lang;
// }

// function getLocaleResourcePath() {
//     var baseUrl = window.location.pathname;
//     if (baseUrl.match(new RegExp("instances"))) {
//         return "../locales/{{lng}}/{{ns}}.json";
//     } else {
//         return "../locales/{{lng}}/{{ns}}.json";
//     }
// }

// i18next
// .use(i18nextXHRBackend)
// .init({
//     lng: getLanguage(),
//     fallbackLng: 'en',
//     debug: true,
//     initImmediate: true,
//     ns: ['common', 'ds', 'cert', 'ts', 'dec', 'enc', 'keygen', 'ub'],
//     defaultNS: 'common',
//     backend: {
//         loadPath: getLocaleResourcePath(),
//         crossDomain: false
//     }
// }, function (err, t) {
//     console.log(i18next.languages);
//     if (err) {
//         alert("Error while loading localisation library.\nПомилка при завантаженні бібліотеки локалізації.");
//     }
// });

export default localesReducer;