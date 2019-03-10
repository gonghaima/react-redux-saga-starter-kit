import React, { Component } from "react";

import { connect } from "react-redux";
import { FaSearch, FaUserCircle, FaEllipsisV } from "react-icons/fa";
import { getProducts, setPage, setSelection } from "../actions";
import {
  Content,
  ContentWrapper,
  ContentList,
  ContentListWithBorder,
  ContentListIcon,
  ContentListItem,
  ContentListItemWithoutBorder,
  ContentListUser,
  Details,
  DetailsEllip,
  Search
} from "../modules/styled/Layout";

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
    return (
      <ContentWrapper>
        <Content>
          <ContentListWithBorder>
            <ContentListIcon>
              <FaSearch />
            </ContentListIcon>
            <ContentListItemWithoutBorder>
              <Search placeholder="Search" />
            </ContentListItemWithoutBorder>
          </ContentListWithBorder>

          <ContentList>
            <ContentListIcon>
              <FaUserCircle size={25} />
            </ContentListIcon>
            <ContentListItem>
              <ContentListUser>
                <div>Suzy Cunningham</div>
                <Details>suzy.cunn@gmail.com</Details>
              </ContentListUser>
              <Details>Oct 1, 2019</Details>
              <Details>one year ago</Details>
              <DetailsEllip right={22}>
                <FaEllipsisV />
              </DetailsEllip>
            </ContentListItem>
          </ContentList>

          <ContentList>
            <ContentListIcon>
              <FaUserCircle size={25} />
            </ContentListIcon>
            <ContentListItem>
              <ContentListUser>
                <div>Bobby Daniels</div>
                <Details>bobby.daniels@gmail.com</Details>
              </ContentListUser>
              <Details>Oct 11, 2020</Details>
              <Details>one year later</Details>
              <DetailsEllip right={22}>
                <FaEllipsisV />
              </DetailsEllip>
            </ContentListItem>
          </ContentList>
        </Content>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Product);
