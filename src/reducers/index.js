import { combineReducers } from 'redux';
import localesReducer from './i18n'
// import dafaultState from './client';
// import activeProfile from './selectedProfile';
import connectionStatus from './connectionStatus';
// import keyContainers from './keyContainers';
// import selectedContainer from './selectedContainer';
// import clientKCState from './clientKCState';

const base = (state = {}, { type, payload }) => {

    switch (type) {
    	case 'TEST_ACTION': {
		    return {
		        ...state,
		        test: payload
		    }
		}

        case 'GET_STATUS': {
            return {
                ...state,
                status: payload
            }
        }

        case 'GET_FEATURES': {
            return {
                ...state,
                features: payload
            }
        }

        case 'TEST_INIT': {
            return {
                ...state,
                context: payload
            }
        }

        default:
            return state;
    }

}

export default combineReducers({
    base: base,
    localesReducer: localesReducer,
    // dafaultState: dafaultState,
    // activeProfile: activeProfile,
    connectionStatus: connectionStatus
    // keyContainers: keyContainers,
    // selectedContainer: selectedContainer,
    // clientKCState: clientKCState
});


