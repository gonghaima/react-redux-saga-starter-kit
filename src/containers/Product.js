import React, { Component } from "react";

import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { getProducts, getUsers, setPage, setSelection } from "../actions";
import {
  Content,
  ContentWrapper,
  ContentListWithBorder,
  ContentListIcon,
  ContentListItemWithoutBorder,
  Search
} from "../modules/styled/Layout";
import ContentList from "../components/content/ContentList";

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
    const {
      users: { data }
    } = this.props;
    const userCount = data.length;

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

          {data.map((user, i) => (
            <ContentList key={user.id} user={user} last={userCount === i + 1} />
          ))}
        </Content>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
    selection: state.selection,
    users: state.users
  };
}

export default connect(mapStateToProps)(Product);
