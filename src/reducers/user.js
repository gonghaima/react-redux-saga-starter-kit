import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import config from "../config";
import { ActionTypes, STATUS } from "../constants/index";

export const userState = {
  data: [],
  filteredData: [],
  status: STATUS.IDLE,
  message: "",
  query: "All Users",
  selected: config.userMapping.all
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
        let selectedGroup = {};
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
        if (payload.query === config.userMapping.all.queryValue) {
          filteredData = state.data;
          selectedGroup = config.userMapping.all;
        }
        if (payload.query === config.userMapping.favorites.queryValue) {
          filteredData = state.data.filter(user => user.favorite === true);
          selectedGroup = config.userMapping.favorites;
        }
        if (payload.query === config.userMapping.administrator.queryValue) {
          filteredData = state.data.filter(user => user.administrator === true);
          selectedGroup = config.userMapping.administrator;
        }
        if (payload.query === config.userMapping.nonAdmin.queryValue) {
          filteredData = state.data.filter(
            user => user.administrator === false
          );
          selectedGroup = config.userMapping.nonAdmin;
        }
        if (payload.query === config.userMapping.archived.queryValue) {
          filteredData = state.data.filter(user => user.archived === true);
          selectedGroup = config.userMapping.archived;
        }

        return immutable(state, {
          filteredData: {
            $set: filteredData
          },
          message: { $set: "" },
          status: { $set: STATUS.RUNNING },
          query: {
            $set: payload.query
          },
          selected: {
            $set: selectedGroup
          }
        });
      }
    },
    userState
  )
};
