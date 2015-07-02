var React = require("react");
var ClcRow;

ClcRow = React.createClass({
  render: function() {
    return <li onClick="">
      <span ref="label">{label}</span>
      <span>{val}</span>
    </li>;
  }
});

module.exports = ClcRow;
