var React = require("react");
var ClcRow;

ClcRow = React.createClass({
  handleItemClick: function() {
    this.props.handleItemClick(this.props.label);
  },
  render: function() {
    return <li onClick={this.handleItemClick}>
      <span>{this.props.label}</span>
      {"------"}
      <span>{this.props.sortVal}</span>
    </li>;
  }
});

module.exports = ClcRow;
