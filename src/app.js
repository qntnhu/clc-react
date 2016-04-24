import React from 'react';
import ReactDOM from 'react-dom';
import clc from './clc';
import ClcList from './components/ClcList';
import Manipulate from './components/Manipulate';
require('./css/main.css');

class App extends React.Component {

  constructor(props) {
    super(props);

    const route = window.location.hash.substr(1);
    const routePartials = route.replace(/^\//, '').split('/');
    const level = +routePartials[0] || 0;
    const sortCode = routePartials[1] || '';
    this.state = {
      level: level,
      sortCode: sortCode
    };
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState(this.getRouterObj());
    });
  }

  getRouterObj() {
    const route = window.location.hash.substr(1);
    const routePartials = route.replace(/^\//, '').split('/');
    const level = +routePartials[0] || 0;
    const sortCode = routePartials[1] || '';
    return {
      level: level,
      sortCode: sortCode
    };
  }
  handleItemClick(sortCode) {
    const level = this.state.level;
    window.location.hash = '#/' + (level + 1) + '/' + sortCode;

    // 0    1 - A    2 - A1    3 - A11
    this.setState({
      level: level + 1,
      sortCode: sortCode
    });
  }
  render() {
    return (
      <div className="clc-wrapper">
        <ClcList
          handleItemClick={this.handleItemClick.bind(this)}
          level={this.state.level}
          sortCode={this.state.sortCode}
          clc={this.props.clc}
        />
        <Manipulate />
      </div>
    );
  }
}

ReactDOM.render(<App clc={clc} />, document.getElementById('mount-point'));
