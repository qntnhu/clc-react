var React = require("react");
var ClcRow;

ClcRow = React.createClass({
  handleRowClick: function() {
    
  },
  render: function() {
    return <li onClick="this.handleRowClick">
      <span>{this.props.label}</span>
      <span>{this.props.sortVal}</span>
    </li>;
  }
});

module.exports = ClcRow;
