import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getProducts, setPage, setSelection } from '../actions';
import ProductList from '../components/ProductList';
import Summary from '../components/Summary';
import { Divider, Title } from '../modules/styled/Home';
import {
  ContentWrapper,
  ContentHead,
  ContentList
} from '../modules/styled/Layout';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    this.props.dispatch(setPage(Math.floor(event.selected)));
  }
  handleSelect(event) {
    this.props.dispatch(setSelection(event.target.value));
  }
  componentDidMount() {
    this.props.dispatch(getProducts());
  }
  render() {
    const { product, selection } = this.props;
    return (
      <ContentWrapper>
        <ContentHead>Search</ContentHead>
        <hr />
        <ContentList>Suzy Cunningham</ContentList>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Product);
