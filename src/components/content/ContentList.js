import React from "react";
import { FaUserCircle, FaEllipsisV } from "react-icons/fa";
import {
  ContentList,
  ContentListIcon,
  ContentListItem,
  ContentListUser,
  Details,
  DetailsEllip,
  DetailsMobile,
  DetailsDesktop
} from "../../modules/styled/Layout";

export default ({ user }) => {
  return (
    <ContentList>
      <ContentListIcon>
        <FaUserCircle size={25} />
      </ContentListIcon>
      <ContentListItem>
        <ContentListUser>
          <div>{user.fullName}</div>
          <Details>{user.email}</Details>
          <DetailsMobile>{user.lastLogin}</DetailsMobile>
        </ContentListUser>
        <DetailsDesktop>{user.date}</DetailsDesktop>
        <DetailsDesktop>{user.lastLogin}</DetailsDesktop>
        <DetailsEllip right={22} mob={40}>
          <FaEllipsisV />
        </DetailsEllip>
      </ContentListItem>
    </ContentList>
  );
};
