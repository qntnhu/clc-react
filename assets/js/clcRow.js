var React = require("react");
var ClcRow;

ClcRow = React.createClass({
  handleItemClick: function() {
    var level = this.props.level;
    level = level !== 0 ? level + 1 : level;
    var sortArr = this.props.sort(this.props.clc, level, 0, this.refs.label.props.children);
    console.log(this.refs.label);
    if (sortArr.length === 0 ) {
      return;
    }
    this.props.handleItemClick(this.props.label);
  },
  render: function() {
    return (
      <li onClick={this.handleItemClick}>
        <span ref="label">{this.props.label}</span>
        {"------"}
        <span>{this.props.sortVal}</span>
      </li>
    );
  }
});

module.exports = ClcRow;
