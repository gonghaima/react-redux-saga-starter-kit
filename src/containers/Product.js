import React, { Component } from "react";

import { connect } from "react-redux";
import { FaSearch, FaUserCircle, FaEllipsisV } from "react-icons/fa";
import { getProducts, getUsers, setPage, setSelection } from "../actions";
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
  DetailsMobile,
  DetailsDesktop,
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
    this.props.dispatch(getUsers());
  }
  render() {
    const { product, selection, user } = this.props;
    console.log(user);
    // console.log(product);

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
                <DetailsMobile>one year ago</DetailsMobile>
              </ContentListUser>
              <DetailsDesktop>Oct 1, 2019</DetailsDesktop>
              <DetailsDesktop>one year ago</DetailsDesktop>
              <DetailsEllip right={22} mob={40}>
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
              <DetailsDesktop>Oct 11, 2020</DetailsDesktop>
              <DetailsDesktop>one year later</DetailsDesktop>
              <DetailsEllip right={22} mob={40}>
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
  return {
    product: state.product,
    selection: state.selection,
    user: state.user
  };
}

export default connect(mapStateToProps)(Product);
