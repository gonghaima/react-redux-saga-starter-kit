import { fork } from 'redux-saga/effects';
import product from './product';

export default function* root() {
  // yield all([fork(app), fork(github), fork(user)]);
  yield fork(product);
}
