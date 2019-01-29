import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getProducts, setPage, setSelection } from '../actions';

import {
  DetailsSection,
  DisplayNumberSelect,
  Divider,
  Image,
  ImageSection,
  Item,
  ItemPrice,
  ItemTitle,
  ItemDescription,
  Pagination,
  ProductCount,
  ProductGrid,
  Summary,
  SummaryItem,
  Title
} from '../modules/styled/Home';

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
    const pageCount =
      selection && selection.itemPerPage
        ? Math.ceil(product.data.length / selection.itemPerPage)
        : 0;
    return (
      <Fragment>
        <Title>All Products</Title>
        <Summary>
          <SummaryItem>
            <ProductCount>{product.data.length} Products</ProductCount>
          </SummaryItem>
          <SummaryItem>
            <DisplayNumberSelect onChange={this.handleSelect}>
              {selection.selectionItems.map(val => (
                <option key={val} value={val}>
                  {val} per page
                </option>
              ))}
            </DisplayNumberSelect>
          </SummaryItem>
        </Summary>
        <Divider />
        <ProductGrid>
          {product.data
            .slice(
              selection.currentPage * selection.itemPerPage,
              Number(selection.currentPage * selection.itemPerPage) +
                Number(selection.itemPerPage)
            )
            .map(d => (
              <li key={d.id}>
                <Item>
                  <ImageSection>
                    <Image src={d.product_image} alt="alt" />
                  </ImageSection>
                  <DetailsSection>
                    <ItemTitle>{d.product_name}</ItemTitle>
                    <ItemDescription>{d.description}</ItemDescription>
                    <ItemPrice>{d.price}</ItemPrice>
                  </DetailsSection>
                </Item>
              </li>
            ))}
        </ProductGrid>
        <Pagination>
          <ReactPaginate
            previousLabel={'< previous page'}
            nextLabel={'next page >'}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageChange}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </Pagination>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Product);
