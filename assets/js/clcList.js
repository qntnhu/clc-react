var React = require("react");
var ClcRow = require("./clcRow");
var ClcList;

ClcList = React.createClass({
  getInitialState: function() {
    return {
      init: 0
    };
  },
  handleRowClick: function(label) {

  },
  componentDidMount: function() {

  },
  render: function() {
    var rows = [];
    var clc = this.props.clc;
    if (this.state.init === 0) {
      for (var key in clc) {
        if (typeof clc[key] === "object") {
          rows.push(<ClcRow label={key} sortVal={clc[key].value} />);
        }
      }
    }
    return (<div>
      <ul>
        {rows}
      </ul>
    </div>);
  }
});

module.exports = ClcList;
