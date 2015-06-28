var React = require("react");
var App;
var clc = {
  A: {
    A1: {
      A11: {
				A111: {
					subSort: 0,
          subSortKey: "A111"
        },
        A112: {
					subSort: 0,
					subSortKey: "A111"
        },
				subSort: 1,
				subSortKey: A11
      },
      A12: {

      },
      A13: {

      },
      subSort: 1,
      subSortKey: "A1"
    },
    A2: {

    },
    A3: {

    },
    subSort: 1,
    subSortKey: "A"
  },
  B: {

  },
  C: {

  }
};
App = React.createClass({
    render: function () {
        return <div>
            <ul>


						</ul>
        </div>;
    }
});

App.start = function () {
    React.render(<App />, document.getElementById("app"));
};

module.exports = App;
