/*import * as api from "../api/index.js"
import {   CREATE_COMMENT } from '../constants/actionTypes';
export const createComment =(comment,postId) => async (dispatch) => {
   
    try {
      const { data } = await api.createComment(comment)
      dispatch({type: CREATE_COMMENT,payload:data}) 
    } catch (error) {
      console.log(error)
    }
    
      }
      */