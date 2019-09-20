// import React from 'react';
// import SearchResults from './search_results';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { search: '' };
//     this.page = 1
//     this.loadMore = this.loadMore.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     window.scrollTo(0, 0);
//     dispatch(this.props.resetSneakers());
//   }

//   componentDidUpdate(prevState, prevProps) {
//     if (prevProps.search !== this.state.search) {
//       dispatch(this.props.resetSneakers());
//       this.page = 1;
//       this.props.searchSneakers(this.state.search, this.page);
//     }
//   }

//   componentWillUnmount() {
//     dispatch(this.props.resetSneakers());
//   }

//   loadMore() {
//     this.page++;
//     this.props.searchSneakers(this.state.search, this.page);
//   }

//   handleSearch() {
//     return (e) => {
//       this.props.searchSneakers(e.target.value, 1);
//       this.setState({ search: e.target.value });
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//   }

//   render() {
//     let loadDisplay = this.props.sneakers.length < this.props.sneakerCount ? (
//       <button className="load-more" onClick={this.loadMore}>
//         See More
//       </button>
//     ) : (
//         <div></div>
//       )

//     if (this.props.sneakers.length === 0) {
//       loadDisplay = <div></div>
//     }

//     return (
//       <div>
//         <section className="search-container">
//           <div className="search-bar-container">
//             <form className="search-bar">
//               <input type="text" className="search-query" placeholder="Type to search" onChange={this.handleSearch()} />
//             </form>
//           </div>
//         </section>
//         <section className="search-results">
//           <SearchResults
//             sneakers={this.props.sneakers}
//             search={this.state.search}
//             searchResults={this.props.sneakerCount}
//           />
//         </section>
//         <div className="load-more-container">
//           {loadDisplay}
//         </div>
//       </div>
//     )
//   }
// }

// export default Search;

// in navbar: link to / <Link to="/search"