var React = require("react");
var utils = require("./utils");
var ClcRow = require("./clcRow");
var ClcList;

ClcList = React.createClass({
  sort: function() {
    var sortArr = [];
    (function sort(obj, level, currentLevel, sortKey) {
      currentLevel = currentLevel || 0;
      utils.eachProp(obj, function(val, prop) {
        if (utils.isObject(val)) {
          if (level === 0) {
            sortArr.push([prop, val.sortVal]);
          } else if ((level === 1 || (level - 1) === currentLevel) && prop === sortKey) {
            utils.eachProp(val, function(val, prop) {
              if (utils.isObject(val)) {
                sortArr.push([prop, val.sortVal]);
              }
            });
            return true;
          } else if (level !== 1 && level > currentLevel) {
            sort(val, level, currentLevel + 1, sortKey);
          }
        }
      });
    }).apply({}, arguments);
    return sortArr;
  },
  render: function() {
    var clc = this.props.clc;
    var level = this.props.level;
    var sortKey = this.props.sortKey;
    var handleItemClick = this.props.handleItemClick;
    var rows = [];
    this.sort(clc, level, 0, sortKey).forEach(function(subArr, i) {
      rows.push(<ClcRow clc={clc} sort={this.sort} sortKey={sortKey} handleItemClick={handleItemClick} level={level} label={subArr[0]} sortVal={subArr[1]} />);
    }.bind(this));

    return (
      <div>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
});

module.exports = ClcList;
