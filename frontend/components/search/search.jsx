import React from 'react';
import SearchResult from './search_result';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.page = 1
    this.loadMore = this.loadMore.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    (this.props.resetSneakers());
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.search !== this.state.search) {
      this.props.resetSneakers();
      this.page = 1;
      this.props.searchSneakers(this.state.search, this.page);
    }
  }
  componentWillUnmount() {
    this.props.resetSneakers();
  }

  loadMore() {
    this.page++;
    this.props.searchSneakers(this.state.search, this.page);
  }

  handleSearch() {
    return (e) => {
      this.props.searchSneakers(e.target.value, 1);
      this.setState({ search: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <section className="search-container">
          <div className="search-bar-container">
            <form className="search-bar">
              <input type="text" className="search-input" placeholder="Type to search" onChange={this.handleSearch()} />
            </form>
          </div>
        </section>
        <section className="search-results">
          {/* <SearchResult
            sneakers={this.props.sneakers}
            search={this.state.search}
            searchResults={this.props.sneakerCount}
          /> */}
        </section>
        <div className="load-more-container">
        </div>
      </div>
    )
  }
}

export default Search;
