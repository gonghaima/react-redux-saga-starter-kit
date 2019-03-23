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
import { filterUsers } from "../actions";
import ContentList from "../components/content/ContentList";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePageChange(event) {
    this.props.dispatch(setPage(Math.floor(event.selected)));
  }
  handleSelect(event) {
    this.props.dispatch(setSelection(event.target.value));
  }
  handleChange(event) {
    this.props.dispatch(filterUsers(event.target.value));
  }
  componentDidMount() {
    this.props.dispatch(getProducts());
    this.props.dispatch(getUsers());
  }
  render() {
    const {
      users: { filteredData }
    } = this.props;
    const userCount = filteredData.length;

    return (
      <ContentWrapper>
        <Content>
          <ContentListWithBorder>
            <ContentListIcon>
              <FaSearch />
            </ContentListIcon>
            <ContentListItemWithoutBorder>
              <Search onChange={this.handleChange} placeholder="Search" />
            </ContentListItemWithoutBorder>
          </ContentListWithBorder>

          {filteredData.map((user, i) => (
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
