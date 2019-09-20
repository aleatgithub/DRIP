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
            <Link to="sneakers/12" >
              <img src="https://sneakernews.com/wp-content/uploads/2018/09/air-jordan-1-pine-green-where-to-buy-3.jpg?w=780&h=550&crop=1" alt="" className="style-image" title="AIR JORDAN 1 RETRO HIGH OG 'OBSIDIAN'" />
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
          <div className="styles-column">
            <Link to="sneakers/14">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/014/954/758/original/temp1537996640.jpeg" alt="" className="style-image" title="Yeezy Boost 700 'Wave Runner'" />
            </Link>
            <Link to="sneakers/3">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/018/319/945/original/temp1548858660.jpeg" alt="" className="style-image" title="Travis Scott x Air Jordan 1 Low 'Mocha'" />
            </Link>
            <Link to="sneakers/16">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/021/212/412/original/temp1557113529.jpeg" className="style-image" title="Air Jordan 1 Retro High OG 'Royal' 2017" />
            </Link>
            <Link to="sneakers/16">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/014/577/862/original/temp1536580356.jpeg" alt="" className="style-image" title="Travis Scott x Air Jordan 1 Retro High OG 'Mocha'" />
            </Link>
        
          </div>
          <div className="styles-column">
            <Link to="sneakers/19">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/024/069/627/original/temp1564420578.jpeg" alt="" className="style-image" title="Yeezy Boost 700 'Wave Runner'" />
            </Link>
            <Link to="sneakers/6">
              <img src="https://www.goat.com/sneakers/air-jordan-1-retro-high-og-bg-bred-toe-575441-610" alt="" className="style-image" title="Travis Scott x Air Jordan 1 Low 'Mocha'" />
            </Link>
            <Link to="sneakers/13">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/013/371/976/original/temp1531968677.jpeg" className="style-image" title="Air Jordan 1 Retro High OG 'Royal' 2017" />
            </Link>
            <Link to="sneakers/6">
              <img src="https://image.goat.com/crop/750/attachments/micropost_pictures/images/010/352/542/original/685B7894-9E1A-4835-955E-39ADB849A942.jpeg" alt="" className="style-image" title="Travis Scott x Air Jordan 1 Retro High OG 'Mocha'" />
            </Link>
            <Link to="sneakers/11">
              <img src=" https://image.goat.com/crop/750/attachments/micropost_pictures/images/008/496/630/original/3D00D6C1-C60B-4C18-AEA0-B932906FCDB1.jpeg" alt="" className="style-image" title="Air Yeezy 2 SP 'Red October'" />
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Styles;