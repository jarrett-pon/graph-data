import {
  SET_TYPE,
} from "../constants/graph";

export const initialState = {
  data: '{"labels":[],"datasets":[]}',
  caption: 'Default caption',
  type: 'line',
};

export function graph(state = initialState, action) {
  // let error;
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        type: action.payload.type
      };
    default:
      return state;
  }
}
