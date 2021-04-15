import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  clear() {
    this.setState({ term: '' })
  }

  search() {
    this.props.onSearch(this.state.term);
    this.clear();
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>)
  }
}

export default Search;