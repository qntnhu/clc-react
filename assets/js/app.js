var React = require("react");
var clc = require("./clc");
var ClcList = require("./clcList");
var Manipulate = require("./manipulate");
var app = app || {};

app.App = React.createClass({
    getInitialState: function() {
      return {
        level: 0,
        sortKey: ""
      };
    },
    render: function () {
      return <div>
          <ClcList level={this.state.level} sortKey={this.state.sortKey} clc={this.props.clc}/>
          <Manipulate />
      </div>;
    }
});

app.start = function () {
  React.render(<app.App clc={clc} />, document.getElementById("app"));
};

module.exports = window.app = app;
