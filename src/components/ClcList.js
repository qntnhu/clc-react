import React, { PropTypes } from 'react';
import _ from 'lodash';
import ClcRow from './ClcRow';

class ClcList extends React.Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    sortCode: PropTypes.string.isRequired,
    clc: PropTypes.object.isRequired,
    handleItemClick: PropTypes.func.isRequired
  }

  sort(...args) {
    const sortArr = [];
    function sort(obj, level, currentLevel, sortCode) {
      currentLevel = currentLevel || 0;
      _.map(obj, (val, prop) => {
        if (_.isObject(val)) {
          if (level === 0) {
            sortArr.push([prop, val.sortVal]);
          } else if ((level === 1 || (level - 1) === currentLevel) && prop === sortCode) {
            _.map(val, (val, prop) => {
              if (_.isObject(val)) {
                sortArr.push([prop, val.sortVal]);
              }
            });
            return true;
          } else if (level !== 1 && level > currentLevel) {
            sort(val, level, currentLevel + 1, sortCode);
          }
        }
      });
    }
    sort(...args);
    return sortArr;
  }

  render() {
    const clc = this.props.clc;
    const level = this.props.level;
    const rows = [];
    this.sort(clc, level, 0, this.props.sortCode).forEach((subArr) => {
      rows.push(
        <ClcRow
          clc={clc}
          sort={this.sort}
          handleItemClick={this.props.handleItemClick}
          level={level}
          sortCode={subArr[0]}
          sortVal={subArr[1]}
          key={subArr[0] + subArr[1]}
        />
      );
    });
    return (
      <ul>
        {rows}
      </ul>
    );
  }
}

module.exports = ClcList;
