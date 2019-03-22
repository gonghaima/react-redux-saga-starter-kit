import { handleActions } from "redux-actions";
import immutable from "immutability-helper";

import { ActionTypes, STATUS } from "../constants/index";

export const userState = {
  data: [],
  status: STATUS.IDLE,
  message: "",
  query: ""
};

export default {
  users: handleActions(
    {
      [ActionTypes.GET_USERS]: (state, { payload }) => {
        const data = [];
        return immutable(state, {
          data: {
            $set: data
          },
          message: { $set: "" },
          status: { $set: STATUS.RUNNING }
        });
      },
      [ActionTypes.USER_GET_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          data: {
            $set: payload.data || []
          },
          status: { $set: STATUS.READY }
        }),
      [ActionTypes.USER_GET_FAILURE]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message || "" },
          status: { $set: STATUS.ERROR }
        }),
      [ActionTypes.FILTER_USERS]: (state, { payload }) => {
        const data = [];
        console.log(`payload--${JSON.stringify(payload)}`);
        console.log(`state--${JSON.stringify(state)}`);
        const filteredData = state.data.filter(
          user => user.administrator === true
        );

        return immutable(state, {
          data: {
            $set: filteredData
          },
          message: { $set: "" },
          status: { $set: STATUS.RUNNING }
        });
      }
    },
    userState
  )
};
