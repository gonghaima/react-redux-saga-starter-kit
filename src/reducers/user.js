import { handleActions } from "redux-actions";
import immutable from "immutability-helper";

import { ActionTypes, STATUS } from "../constants/index";

export const userState = {
  data: [],
  filteredData: [],
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
          filteredData: {
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
          filteredData: {
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

        let filteredData = [];
        if (payload.query === "") {
          filteredData = state.data;
        }
        if (payload.query && payload.query !== "") {
          filteredData = state.data.filter(
            user =>
              user.fullName.indexOf(payload.query) > -1 ||
              user.email.indexOf(payload.query) > -1
          );
        }
        if (payload.query === "administrator") {
          filteredData = state.data.filter(user => user.administrator === true);
        }
        if (payload.query === "non-admin") {
          filteredData = state.data.filter(
            user => user.administrator === false
          );
        }
        if (payload.query === "favorites") {
          filteredData = state.data.filter(user => user.favorite === true);
        }
        if (payload.query === "all") {
          filteredData = state.data;
        }
        if (payload.query === "archived") {
          filteredData = state.data.filter(user => user.archived === true);
        }

        return immutable(state, {
          filteredData: {
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
