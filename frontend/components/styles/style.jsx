import React from 'react';
import { Link } from 'react-router-dom';

class Styles extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="styles-container">
        <div className="styles-header">
          OnFeet Styles
        </div>
        <div className="styles-subheader">
          Daily inspiration from the community.
          <br></br>
          Scroll to discover and shop trending styles.
        </div>
        <div className="styles-column-container">
          <div className="styles-column">
            <Link to="sneakers/110" >
              <img src={window.air_mag} alt="" className="style-image" title="Nike Mag 2016 'Auto-Lacing'" />
            </Link>
            <Link to="sneakers/1">
              <img src={window.banned} alt="" className="style-image" title="Air Jordan 1 Retro High OG 'Banned' 2016" />
            </Link>
            <Link to="sneakers/33">
              <img src={window.creams} alt="" className="style-image" title="Yeezy Boost 350 V2 'Cream'" />
            </Link>
            <Link to="sneakers/49">
              <img src={window.inertia} alt="" className="style-image" title="Yeezy Boost 700 'Inertia'" />
            </Link>
            <Link to="sneakers/87">
              <img src={window.bc3} alt="" className="style-image" title="Air Jordan 3 Retro OG 'Black Cement' 2018" />
            </Link>
            <Link to="sneakers/122">
              <img src={window.sacai} alt="" className="style-image" title="Sacai x LDWaffle 'Summit White'" />
            </Link>
          </div>
          <div className="styles-column">
            <Link to="sneakers/46">
              <img src={window.wave_runners} alt="" className="style-image" title="Yeezy Boost 700 'Wave Runner'" />
            </Link>
            <Link to="sneakers/19">
              <img src={window.ts1_low} alt="" className="style-image" title="Travis Scott x Air Jordan 1 Low 'Mocha'" />
            </Link>
            <Link to="sneakers/2">
              <img src={window.royal} alt="" className="style-image" title="Air Jordan 1 Retro High OG 'Royal' 2017" />
            </Link>
            <Link to="sneakers/18">
              <img src={window.ts1_high} alt="" className="style-image" title="Travis Scott x Air Jordan 1 Retro High OG 'Mocha'" />
            </Link>
            <Link to="sneakers/56">
              <img src={window.red_octobers} alt="" className="style-image" title="Air Yeezy 2 SP 'Red October'" />
            </Link>
            <Link to="sneakers/48">
              <img src={window.statics} alt="" className="style-image" title="Yeezy Boost 700 V2 'Static'" />
            </Link>
          </div>
          <div className="styles-column">
            <Link to="sneakers/55">
              <img src={window.plats} alt="" className="style-image" title="Air Yeezy 2 NRG 'Pure Platinum'" />
            </Link>
            <Link to="sneakers/101">
              <img src={window.atmos} alt="" className="style-image" title="Atmos x Air Max 1 Retro 'Elephant' 2017" />
            </Link>
            <Link to="sneakers/71">
              <img src={window.chicago} alt="" className="style-image" title="OFF-WHITE x Air Jordan 1 Retro High OG 'Chicago'" />
            </Link>
            <Link to="sneakers/15">
              <img src={window.unions} alt="" className="style-image" title="Union x Air Jordan 1 Retro High 'Black Toe'" />
            </Link>
            <Link to="sneakers/45">
              <img src={window.gg750} alt="" className="style-image" title="Yeezy Boost 750 'Grey Gum'" />
            </Link>
            <Link to="sneakers/74">
              <img src={window.blazer} alt="" className="style-image" title="OFF-WHITE x Blazer Mid 'The Ten'" />
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Styles;