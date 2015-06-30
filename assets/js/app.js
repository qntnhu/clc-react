var React = require("react");
var clc = require("./clc");
var Manipulate = require("./manipulate");
var App;

App = React.createClass({
    render: function () {
      return <div>
          <ul>
            <li>test</li>
					</ul>
          <Manipulate />
      </div>;
    }
});

App.start = function () {
  React.render(<App clc={clc} />, document.getElementById("app"));
};

module.exports = window.App = App;
