const {defineSupportCode} = require('cucumber');

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(20 * 1000);
});