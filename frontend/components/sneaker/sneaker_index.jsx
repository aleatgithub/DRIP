import React from 'react';
import SneakerIndexItem from './sneaker_index_item';
import { Link } from 'react-router-dom';

class SneakerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSneakers();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="index-header">Shop All</h3>
          </div>
          <ul className="sneaker-items-container">
            {
              this.props.sneakers.map((sneaker, idx) => {
                return (
                  <Link to={`/sneakers/${sneaker.id}`} key={idx} >
                    <SneakerIndexItem sneaker={sneaker} key={idx}/>
                  </Link>
                )
              })
            }
          </ul>
        </div>
    )
  }
}

export default SneakerIndex;