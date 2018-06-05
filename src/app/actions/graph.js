import {
  SET_TYPE,
} from "../constants/graph";

export const setType = (type) => {
  return {
    payload: {
      type,
    },
    type: SET_TYPE,
  };
};
