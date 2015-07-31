var React = require("react");
var clc = require("./clc");
var ClcList = require("./clcList");
var Manipulate = require("./manipulate");
var app = app || {};

app.App = React.createClass({
    getInitialState: function() {
      var route = window.location.hash.substr(1);
      var routePartials = route.replace(/^\//, "").split("/");
      var level = +routePartials[0] || 0;
      var sortCode = routePartials[1] || "";
      return {
        level: level,
        sortCode: sortCode
      };
    },
    handleItemClick: function(sortCode) {
      var level = this.state.level;
      window.location.hash = "#/" + (level + 1) + "/" + sortCode;

      // 0    1 - A    2 - A1    3 - A11
      this.setState({
        level: level + 1,
        sortCode: sortCode
      });
    },
    render: function () {
      return (
        <div className="clc-wrapper">
            <ClcList handleItemClick={this.handleItemClick} level={this.state.level} sortCode={this.state.sortCode} clc={this.props.clc}/>
            <Manipulate />
        </div>
      );
    }
});

app.start = function () {
  React.render(<app.App clc={clc} />, document.getElementById("app"));
};

module.exports = window.app = app;
