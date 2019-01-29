import React from 'react';
import PropTypes from 'prop-types';
import {
  DisplayNumberSelect,
  Summary,
  SummaryItem,
  ProductCount
} from '../modules/styled/Home';

const SummaryComponent = ({ handleSelect, items, total }) => {
  return (
    <Summary>
      <SummaryItem>
        <ProductCount>{total} Products</ProductCount>
      </SummaryItem>
      <SummaryItem>
        <DisplayNumberSelect onChange={handleSelect}>
          {items.map(val => (
            <option key={val} value={val}>
              {val} per page
            </option>
          ))}
        </DisplayNumberSelect>
      </SummaryItem>
    </Summary>
  );
};

SummaryComponent.propTypes = {
  total: PropTypes.number,
  items: PropTypes.array,
  handleSelect: PropTypes.func
};

export default SummaryComponent;
