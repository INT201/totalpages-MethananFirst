const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if (arrayItems === null || arrayItems === undefined) {
    return undefined;
  } else if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage == 0) {
    return 1;
  } else {
    let R = arrayItems.length/rowsPerPage
    return Math.ceil(R);
  }
}
module.exports = totalPages
