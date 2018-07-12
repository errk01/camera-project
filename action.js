import axios from 'axios';

export const FETCH_CAMERA_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART ='REMOVE_FROM_CART';
export const ONSALE='ONSALE';



export const fetchCamera = () => {
  return dispatch => {
     axios
     .get(`http://localhost:8082/api/cameras`)
      .then(response => {
        dispatch({
          type:FETCH_CAMERA_SUCCESS,
          payload: response.data
        })
      })
    }
  }
  
  export const addToCart = (id) => {
    return dispatch => {
      dispatch({
        type:ADD_TO_CART,
        payload: id
      })
    }
    
  }
  export const removeFromCart = (id) => {
    return dispatch => {
      dispatch({
        type:REMOVE_FROM_CART,
        payload: id
      })
    }
    
  }
  export const showOnSale = (id) => {
    return dispatch => {
      dispatch({
        type:ONSALE,
        payload: id
      })
    }
    
  }