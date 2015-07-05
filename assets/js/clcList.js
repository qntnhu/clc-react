var React = require("react");
var ClcRow = require("./clcRow");
var utils = require("./utils");
var ClcList;

ClcList = React.createClass({
  getInitialState: function() {
    return {
      init: 0
    };
  },
  componentDidMount: function() {

  },
  render: function() {
    var rows = [];
    var clc = this.props.clc;
    var sortArr = [];
    function sort(obj, level, currentLevel, sortKey) {
      currentLevel = currentLevel || 0;
      var propArr = Object.keys(obj);
      utils.eachProp(obj, function(val, prop) {
        if (utils.isObject(val)) {
          if (level === 0) {
            sortArr.push([prop, val.sortVal]);
          } else if (level === currentLevel && prop === sortKey) {
            utils.eachProp(val, function(val, prop) {
              if (utils.isObject(val)) {
                sortArr.push([prop, val.sortVal]);
              }
            });
            return true;
          } else if (level > currentLevel) {
            sort(val, level, currentLevel += 1, sortKey);
          }
        }
      });
    }
    sort(clc, this.props.level, 0, this.props.sortKey);
    sortArr.forEach(function(subArr, i) {
      rows.push(<ClcRow label={subArr[0]} sortVal={subArr[1]} />);
    });

    return (<div>
      <ul>
        {rows}
      </ul>
    </div>);
  }
});

module.exports = ClcList;
