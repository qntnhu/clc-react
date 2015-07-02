var React = require("react");
var clc = require("./clc");
var ClcList = require("./clcList");
var Manipulate = require("./manipulate");
var App;

App = React.createClass({
    getInitialState: function() {
      return {
        level: 0,
        sortKey: ""
      };
    },
    render: function () {
      return <div>
          <ClcList clc={this.props.clc}/>
          <Manipulate />
      </div>;
    }
});

App.start = function () {
  React.render(<App clc={clc} />, document.getElementById("app"));
};

module.exports = window.App = App;
