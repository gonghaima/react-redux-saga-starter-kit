import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes, STATUS } from '../constants/index';

export const productState = {
  repos: {
    data: [],
    status: STATUS.IDLE,
    message: '',
    query: ''
  }
};

export default {
  product: handleActions(
    {
      [ActionTypes.GET_PRODUCTS]: (state, { payload }) => {
        const data = state.repos.data[payload.query]
          ? state.repos.data[payload.query]
          : [];
        return immutable(state, {
          repos: {
            data: {
              $set: data
            },
            message: { $set: '' },
            query: { $set: payload.query },
            status: { $set: STATUS.RUNNING }
          }
        });
      },
      [ActionTypes.PRODUCT_GET_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          repos: {
            data: {
              $set: payload.data || []
            },
            status: { $set: STATUS.READY }
          }
        }),
      [ActionTypes.PRODUCT_GET_FAILURE]: (state, { payload }) =>
        immutable(state, {
          repos: {
            message: { $set: payload.message || '' },
            status: { $set: STATUS.ERROR }
          }
        })
    },
    productState
  )
};
