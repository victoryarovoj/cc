import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import i18next from 'i18next'
import i18nextXHRBackend from 'i18next-xhr-backend'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'

i18next
.use(i18nextXHRBackend)
.init({
    lng: 'pl',
    fallbackLng: 'en',
    debug: true,
    initImmediate: true,
    ns: ['common', 'ds', 'cert', 'ts', 'dec', 'enc', 'keygen', 'ub'],
    defaultNS: 'common',
    backend: {
        loadPath: "../locales/{{lng}}/{{ns}}.json",
        crossDomain: false
    }
}, function (err, t) {
    console.log(i18next.languages);
    if (err) {
        alert("Error while loading localisation library.\nПомилка при завантаженні бібліотеки локалізації.");
    }
});

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
