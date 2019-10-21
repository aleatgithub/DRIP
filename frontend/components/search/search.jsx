import React from 'react';
import Link from 'react-router-dom';
import SearchResult from './search_result';
import SneakerIndexItem from '../sneaker/sneaker_index_item';

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

    let loadDisplay = this.props.sneakers.length < this.props.sneakerCount ? (
      <button className="load-more" onClick={this.loadMore}>
        See More
      </button>
    ) : (
        <div></div>
      )

    if (this.props.sneakers.length === 0) {
      loadDisplay = <div></div>
    }

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
          <SearchResult
            sneakers={this.props.sneakers}
            search={this.state.search}
            />
        </section>
        <div className="load-more-container">
        </div>
      </div>
    )
  }
}

export default Search;
