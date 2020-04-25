import {
  SIGN_IN,
  SIGN_OUT,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM,
  LOADING_STREAM
} from "./types"
import streams from "../api/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: { userId }
  }
}

export const signOut = (userId) => {
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

export const getStream = (streamId) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamId}`);
  dispatch({
    type: GET_STREAM,
    payload: response.data
  });
}

export const createStream = (stream) => async (dispatch) => {
  dispatch(loadingState(true));
  const response = await streams.post('/streams', stream);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
  dispatch(loadingState(false));
}

export const editStream = (stream) => async (dispatch) => {
  dispatch(loadingState(true));
  const response = await streams.patch(`/streams/${stream.id}`, stream);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })
  dispatch(loadingState(false));
}

export const deleteStream = (streamId) => async (dispatch) => {
  dispatch(loadingState(true));
  await streams.delete(`/streams/${streamId}`);
  dispatch({
    type: DELETE_STREAM,
    payload: streamId
  })
  dispatch(loadingState(false));
}

export const loadingState = (isLoading) => {
  return {
    type: LOADING_STREAM,
    payload: isLoading
  }
}