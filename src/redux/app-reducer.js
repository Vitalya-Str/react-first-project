import {getHeader} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
   initialized: false,
}
const appReducer = (state = initialState, action) => {

   if (action.type === INITIALIZED_SUCCESS) {
      return {
         ...state,
         initialized: true,
      }
   }
   return state

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializedApp = () => (dispatch) => {
   let promise = dispatch(getHeader());
   promise.then(() => {
      dispatch(initializedSuccess());
   })
}


export default appReducer;