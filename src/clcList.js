import React from 'react';
const utils = require('./utils');
const ClcRow = require('./clcRow');

const ClcList = React.createClass({
  sort: function() {
    const sortArr = [];
    (function sort(obj, level, currentLevel, sortCode) {
      currentLevel = currentLevel || 0;
      utils.eachProp(obj, (val, prop) => {
        if (utils.isObject(val)) {
          if (level === 0) {
            sortArr.push([prop, val.sortVal]);
          } else if ((level === 1 || (level - 1) === currentLevel) && prop === sortCode) {
            utils.eachProp(val, (val, prop) => {
              if (utils.isObject(val)) {
                sortArr.push([prop, val.sortVal]);
              }
            });
            return true;
          } else if (level !== 1 && level > currentLevel) {
            sort(val, level, currentLevel + 1, sortCode);
          }
        }
      });
    }).apply({}, arguments);
    return sortArr;
  },
  render: function() {
    const clc = this.props.clc;
    const level = this.props.level;
    const rows = [];
    this.sort(clc, level, 0, this.props.sortCode).forEach(function(subArr, i) {
      rows.push(
        <ClcRow
          clc={clc}
          sort={this.sort}
          handleItemClick={this.props.handleItemClick}
          level={level}
          sortCode={subArr[0]}
          sortVal={subArr[1]}
        />
      );
    }.bind(this));

    return (
      <ul>
        {rows}
      </ul>
    );
  }
});

module.exports = ClcList;
