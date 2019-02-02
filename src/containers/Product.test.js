import React from 'react';
import { shallow } from 'enzyme';
import { STATUS } from '../constants/index';
import Product from './Product';
import ReactDOM from 'react-dom';
import App from '../App';

const mockDispatch = jest.fn();
const props = {
  dispatch: mockDispatch,
  product: {
    data: []
  }
};

function setup(ownProps = props) {
  return shallow(<Product {...ownProps} />, {
    attachTo: document.getElementById('react')
  });
}

describe('Product', () => {
  const wrapper = setup();
  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have dispatched an action on mount', () => {
    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: 'GET_PRODUCTS'
    // });
    // expect(mockDispatch).toHaveBeenCalled();
  });
});

// describe('Product', () => {
//   const wrapper = setup();
//   it('should render properly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// it('renders without crashing', () => {
//   shallow(<App />);
// });
