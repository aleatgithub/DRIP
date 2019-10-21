import React from 'react';
import { Link } from 'react-router-dom';
import SneakerIndexItem from '../sneaker/sneaker_index_item';


const SearchResult = ({ sneakers, search, searchResults }) => {

  if (sneakers.length) {
    return (
      <div>
        <p> Showing Results {`${sneakers.length}`} results</p>
          <ul className="sneaker-items-container">
            {
              this.props.sneakers.map((sneaker, idx) => {
                return (
                  <Link to={`/sneakers/${sneaker.id}`} key={idx} >
                    <SneakerIndexItem sneaker={sneaker} key={idx} />
                  </Link>
                )
              })
            }
          </ul>  
      </div>
    )
  } else if (!sneakers.length && search.length ) {
    return (
      <p>There are no matching results please try a different search.</p>
    )
  } else {
    return 
    <div></div>
  }
}

export default SearchResult;

