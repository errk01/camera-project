
import {FETCH_CAMERA_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, ONSALE } from './action';

//inside of state : cart array , list of cameras array
const initialState = []

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_CAMERA_SUCCESS:
      return [...action.payload]
      
    case ADD_TO_CART:
      let allCameras = state.filter(camera => camera.id !== action.payload)
      let addedCamera = state.filter(camera => camera.id === action.payload)[0]
      let updatedCamera = {
        ...addedCamera,
        inCart: true
      }
      return [...allCameras, updatedCamera].sort((a,b)=>a.id> b.id)
      
      case REMOVE_FROM_CART:
      let allCamerasIn = state.filter(camera => camera.id !== action.payload)
      let removeCamera = state.filter(camera => camera.id === action.payload)[0]
      let updatedCameraCart = {
        ...removeCamera,
        inCart: false
      }
      return [...allCamerasIn, updatedCameraCart].sort((a,b)=>a.id> b.id)
      
      case ONSALE:
      let selected = state.filter(camera => camera.id !== action.payload)
      let addSale = state.filter(camera => camera.id === action.payload)[0]
      let updatedSale= {
        ...addSale,
        onSale: true
      }
      return [...selected, updatedSale].sort((a,b)=>a.id> b.id)
    default:
      return state

  }
};
export default cameraReducer