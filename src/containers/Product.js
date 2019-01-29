import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getProducts, setPage, setSelection } from '../actions';
import { pageCount } from '../modules/helpers';
import ProductList from '../components/ProductList';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';

import { Divider, Title } from '../modules/styled/Home';

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    const { dispatch } = this.props;
    const currentPage = Math.floor(event.selected);
    dispatch(setPage(currentPage));
  }
  handleSelect(event) {
    const { dispatch } = this.props;
    dispatch(setSelection(event.target.value));
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
  }
  render() {
    const { product, selection } = this.props;
    return (
      <Fragment>
        <Title>All Products</Title>
        <Summary
          total={product.data.length}
          items={selection.selectionItems}
          handleSelect={this.handleSelect}
        />
        <Divider />
        <ProductList product={product} selection={selection} />
        <Pagination
          pageCount={pageCount(selection, product)}
          handlePageChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Product);
