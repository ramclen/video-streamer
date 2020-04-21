import { GET_STREAMS, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, GET_STREAM } from "../actions/types"
import _ from "lodash";

const setStream = (state, stream) => ({ ...state, [stream.id]: stream })

export default (state = [], action) => {
  switch (action.type) {
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_STREAM:
      return setStream(state, action.payload);
    case EDIT_STREAM:
      return setStream(state, action.payload);
    case CREATE_STREAM:
      return setStream(state, action.payload);
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
