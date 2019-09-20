import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
 
     <div>

        <div className="hero-img-container"> 
            <h3 className="hero-img-subheader">
              Featured Release
              </h3>
              <h1 className="hero-model">
              SACAI X LDWaffle 'Black'
              </h1>
              <Link to="/sneakers/21" className="hero-cta">
               Shop Now
              </Link>
            </div>
     </div>
)

export default Home;

