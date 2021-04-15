import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import hostServer from './utils/hostServer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.updateReposList();
  }

  updateReposList() {
    $.ajax({
      url: `${hostServer}/repos`,
      method: 'GET',
      success: (data) => this.setState({ repos: data }),
      error: (err) => console.error(err)
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: `${hostServer}/repos`,
      method: 'POST',
      data: { username: term },
      success: () => this.updateReposList(),
      error: (err) => console.error(err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));