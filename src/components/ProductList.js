import React from 'react';
import PropTypes from 'prop-types';
import {
  DetailsSection,
  Image,
  ItemDescription,
  ImageSection,
  Item,
  ItemPrice,
  ItemTitle,
  ProductGrid
} from '../modules/styled/Home';

const ProductList = ({ product, selection }) => (
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
);

ProductList.propTypes = {
  product: PropTypes.object,
  selection: PropTypes.object
};

export default ProductList;
