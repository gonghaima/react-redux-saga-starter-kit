export default (payload, config, state) => {
  let filteredData = [];
  let selectedGroup = {};
  if (payload.query === "") {
    filteredData = state.data;
  }
  if (payload.query && payload.query !== "") {
    filteredData = state.data.filter(
      user =>
        user.fullName.indexOf(payload.query) > -1 ||
        user.email.indexOf(payload.query) > -1
    );
  }
  if (payload.query === config.userMapping.all.queryValue) {
    filteredData = state.data;
    selectedGroup = config.userMapping.all;
  }
  if (payload.query === config.userMapping.favorites.queryValue) {
    filteredData = state.data.filter(user => user.favorite === true);
    selectedGroup = config.userMapping.favorites;
  }
  if (payload.query === config.userMapping.administrator.queryValue) {
    filteredData = state.data.filter(user => user.administrator === true);
    selectedGroup = config.userMapping.administrator;
  }
  if (payload.query === config.userMapping.nonAdmin.queryValue) {
    filteredData = state.data.filter(user => user.administrator === false);
    selectedGroup = config.userMapping.nonAdmin;
  }
  if (payload.query === config.userMapping.archived.queryValue) {
    filteredData = state.data.filter(user => user.archived === true);
    selectedGroup = config.userMapping.archived;
  }
  return { filteredData, selectedGroup };
};
