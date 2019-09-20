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
            <Link to="sneakers/5" >
              <img src="https://www.goat.com/sneakers/air-jordan-1-retro-high-og-obsidian-555088-140" alt="" className="style-image" title="AIR JORDAN 1 RETRO HIGH OG 'OBSIDIAN'" />
            </Link>
            <Link to="sneakers/10">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/022/482/499/original/temp1560455165.jpeg" alt="" className="style-image" title="TRAVIS SCOTT X AIR JORDAN 1 RETRO HIGH OG 'MOCHA'" />
            </Link>
            <Link to="sneakers/6">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/013/505/475/original/temp1532498130.jpeg" alt="" className="style-image" title="Yeezy Boost 350 V2 'Cream'" />
            </Link>
            <Link to="sneakers/2">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/007/811/072/original/14CC391C-93B8-4E43-B557-CC8B65F90CA3.jpeg" alt="" className="style-image" title="Yeezy Boost 700 'Inertia'" />
            </Link>
            </div>
        </div>
      </section>
    )
  }
}

export default Styles;