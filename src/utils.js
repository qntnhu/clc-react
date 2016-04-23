const app = app || {};
app.utils = {};
app.utils.isFunction = function(it) {
  return Object.prototype.toString.call(it) === '[object Function]';
};
app.utils.isArray = function(it) {
  return Object.prototype.toString.call(it) === '[object Array]';
};
app.utils.isObject = function(obj) {
  return typeof obj === 'object' && obj && !this.isArray(obj) &&
  !this.isFunction(obj) && !(obj instanceof RegExp);
};
app.utils.hasProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
app.utils.getOwn = function(obj, prop) {
  return this.hasProp(obj, prop) && obj[prop];
};
app.utils.eachProp = function(obj, func) {
  for (let prop in obj) {
    if (this.hasProp(obj, prop)) {
      if (func(obj[prop], prop)) {
        break;
      }
    }
  }
};

module.exports = app.utils;
