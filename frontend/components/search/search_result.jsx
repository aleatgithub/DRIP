import React from 'react';
import { Link } from 'react-router-dom';
import SneakerIndexItem from '../sneaker/sneaker_index_item';


const SearchResult = ({ sneakers, search }) => {

  if (sneakers.length) {
    return (
      <div>
        <p className="search-results-header">
          Showing Results 1-{`${sneakers.length}`} out of X.
        </p>
        <div>
          <ul className="sneaker-items-container">
            {
              Object.values(sneakers).map((sneaker, idx) => {
                return (
                  <Link to={`/sneakers/${sneaker.id}`} key={idx} >
                    <SneakerIndexItem sneaker={sneaker} key={idx} />
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  } else if (!sneakers.length && search.length ) {
    return (
      <div className="no-results-text"><p>There are no matching results please try a different search.</p></div>
    )
  } else {
    return null;
    <div></div>
  }
}

export default SearchResult;

