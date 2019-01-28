import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getProducts } from '../actions';

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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
  }
  render() {
    const { product } = this.props;
    debugger;
    return (
      <Fragment>
        <Title>Home</Title>
        <Summary>
          <SummaryItem>
            <ProductCount>1000 Products</ProductCount>
          </SummaryItem>
          <SummaryItem>
            <DisplayNumberSelect>
              <option>4 per page</option>
              <option>16 per page</option>
              <option>32 per page</option>
              <option>64 per page</option>
            </DisplayNumberSelect>
          </SummaryItem>
        </Summary>
        <Divider />
        <ProductGrid>
          <li>
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/307x328.bmp/ff4444/ffffff"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
          <li>
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/345x342.jpg/dddddd/000000"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
          <li>
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/318x336.png/5fa2dd/ffffff"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
        </ProductGrid>
        <Pagination>
          <ReactPaginate
            previousLabel={'< previous page'}
            nextLabel={'next page >'}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={88}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={() => {}}
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
  return { product: state.product };
}

export default connect(mapStateToProps)(Product);
