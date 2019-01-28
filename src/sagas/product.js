import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../modules/client';
import { ActionTypes } from '../constants';
import mockedProductData from '../mocks/productData';

export function* getProducts() {
  try {
    // const response = yield call(request, '/api/product');
    const response = { data: mockedProductData };
    yield put({
      type: ActionTypes.PRODUCT_GET_SUCCESS,
      payload: { data: (response && response.data) || [] }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.PRODUCT_GET_REPOS_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_PRODUCTS, getProducts)]);
}
