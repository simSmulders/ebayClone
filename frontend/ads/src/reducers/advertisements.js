import { ADS_FETCHED, AD_CREATE_SUCCESS } from '../actions/advertisements'


const reducer = (state = null, action = {}) => {
    switch(action.type) {
    case ADS_FETCHED:
        return action.ads
    
    case AD_CREATE_SUCCESS:
        return [action.ad, ...state]
    default:
        return state    
    }
  }

export default reducer