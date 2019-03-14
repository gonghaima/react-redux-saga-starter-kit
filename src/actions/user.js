import { createActions } from "redux-actions";
import { ActionTypes } from "../constants/index";

export const { getUsers } = createActions({
  [ActionTypes.GET_USERS]: query => ({ query })
});
