import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import clc from './clc';
import ClcList from './components/ClcList';
require('./css/main.css');

class App extends React.Component {
  static defaultProps = {
    level: 0,
    sortCode: 'all'
  }
  static propTypes = {
    level: PropTypes.number.isRequired,
    sortCode: PropTypes.string.isRequired,
    clc: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      level: props.level,
      sortCode: props.sortCode,
      shouldUpdatePath: true
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.pathToState();
    this.listenPopState();
  }
  componentDidUpdate() {
    this.changePath();
  }

  handleItemClick(sortCode) {
    const level = this.state.level;

    // 0    1 - A    2 - A1    3 - A11
    this.setState({
      level: level + 1,
      sortCode: sortCode,
      shouldUpdatePath: true
    });
  }
  pathToState() {
    const url: URL = new URL(window.location.href);
    const path: string = url.pathname;
    if (path === '/') {
      this.changePath();
    } else {
      const pathPartials = path.replace(/^\//, '').split('/');
      const [level, sortCode] = pathPartials;
      this.setState({
        level: +level,
        sortCode,
        shouldUpdatePath: true
      });
    }
  }
  changePath() {
    if (this.state.shouldUpdatePath) {
      const newPath: string = '/' +
        this.state.level + '/' +
        this.state.sortCode;
      window.history.pushState(this.state, 'history path', newPath);
    }
  }
  listenPopState() {
    window.addEventListener('popstate', (e) => {
      this.setState({
        ...e.state,
        shouldUpdatePath: false
      });
    });
  }

  render() {
    return (
      <div className="clc-wrp">
        <div className="clc-container">
          <ClcList
            handleItemClick={this.handleItemClick}
            level={this.state.level}
            sortCode={this.state.sortCode}
            clc={this.props.clc}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App clc={clc} />, document.getElementById('mount-point'));
