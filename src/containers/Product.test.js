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
  wrapper.setProps({ dispatch: mockDispatch });
  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
