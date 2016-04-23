var React = require("react");
var ClcRow;

ClcRow = React.createClass({
  handleItemClick: function() {
    var sortCode = React.findDOMNode(this.refs.sortCode).innerHTML;
    var sortArr = this.props.sort(this.props.clc, this.props.level + 1, 0, sortCode);
    if (sortArr.length === 0 ) {
      return;
    }
    this.props.handleItemClick(sortCode);
  },
  render: function() {
    return (
      <li onClick={this.handleItemClick}>
        <span ref="sortCode" className="sort-code">{this.props.sortCode}</span>
        <span>{this.props.sortVal}</span>
      </li>
    );
  }
});

module.exports = ClcRow;
