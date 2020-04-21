import {
  SIGN_IN,
  SIGN_OUT,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM
} from "./types"
import streams from "../api/streams";

export const signIn = () => {
  return {
    type: SIGN_IN,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const getStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  dispatch({
    type: GET_STREAMS,
    payload: response.data
  });
}

export const createStream = (stream) => async (dispatch) => {
  const response = await streams.post('/streams', stream);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
}