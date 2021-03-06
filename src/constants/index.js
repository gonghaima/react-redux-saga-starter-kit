import keyMirror from 'fbjs/lib/keyMirror';

const ActionTypes = keyMirror({
  EXCEPTION: undefined,
  GET_PRODUCTS: undefined,
  PRODUCT_GET_SUCCESS: undefined,
  PRODUCT_GET_FAILURE: undefined,
  SELECTION_CHANGE: undefined,
  PAGE_CHANGE: undefined
});

const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error'
};

export { ActionTypes, STATUS };
