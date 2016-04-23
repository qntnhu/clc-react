import React from 'react';
import ReactDOM from 'react-dom';
import clc from './clc';
import ClcList from './clcList';
import Manipulate from './manipulate';
const app = app || {};
require('./css/main.css');

app.App = React.createClass({
  getRouterObj: function() {
    const route = window.location.hash.substr(1);
    const routePartials = route.replace(/^\//, '').split('/');
    const level = +routePartials[0] || 0;
    const sortCode = routePartials[1] || '';
    return {
      level: level,
      sortCode: sortCode
    };
  },
  getInitialState: function() {
    const routerObj = this.getRouterObj();
    return routerObj;
  },
  componentDidMount: function() {
    window.addEventListener('hashchange', function() {
      this.setState(this.getRouterObj());
    }.bind(this));
  },
  handleItemClick: function(sortCode) {
    const level = this.state.level;
    window.location.hash = '#/' + (level + 1) + '/' + sortCode;

    // 0    1 - A    2 - A1    3 - A11
    this.setState({
      level: level + 1,
      sortCode: sortCode
    });
  },
  render: function() {
    return (
      <div className="clc-wrapper">
        <ClcList
          handleItemClick={this.handleItemClick}
          level={this.state.level}
          sortCode={this.state.sortCode}
          clc={this.props.clc}
        />
          {/*
           <Manipulate />
          */}
      </div>
    );
  }
});

ReactDOM.render(<app.App clc={clc} />, document.getElementById('mount-point'));
