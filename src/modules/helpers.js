const pageCount = (selection, product) => {
  return selection && selection.itemPerPage
    ? Math.ceil(product.data.length / selection.itemPerPage)
    : 0;
};

export {pageCount}