import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../Action/ActionTypes/Cart-Action'
// import { ADD_SHIPPING } from '../Action/ActionTypes/Cart-Action'


//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const fetchPostsRequest = () => {
    return {
      type: "FETCH_REQUEST"
    }
  }
  
export const fetchPostsSuccess = (payload) => {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  }
  
export const fetchPostsError = () => {
    return {
      type: "FETCH_ERROR"
    }
  }

export const fetchPosts = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}
  
export const fetchPostsWithRedux = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}
