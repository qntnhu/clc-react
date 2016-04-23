var React = require("react");
var Manipulate;

Manipulate = React.createClass({
  render: function() {
    return <div className="manipulate">
      <a href="#">&lt;</a>
      <a href="#">&gt;</a>
    </div>;
  }
});

module.exports = Manipulate;
