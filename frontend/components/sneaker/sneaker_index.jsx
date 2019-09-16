
import React from 'react';
import SneakerIndexItem from './sneaker_index_item';
import { Link } from 'react-router-dom';

class SneakerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSneakers();
  }

  render() {
    return (
      <div className="test-div">
        <p className="index-header">Shop All</p>
        <div className="sneaker-index-container">
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
      </div>
    )
  }
}

export default SneakerIndex;