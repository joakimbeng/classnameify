'use strict';
var assignAll = require('assign-all');
var cngen = require('cngen');

module.exports = function classnameify(val) {
  var obj = assignAll(val);

  var selectors = Object.keys(obj);

  return selectors.reduce(function (style, sel) {
    var cls = cngen(obj[sel]);
    style['.' + cls] = obj[sel];
    return style;
  }, {});
};
