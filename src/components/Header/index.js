import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

// const onHamBurgerClick = () => {
//   return (
//     <Popup
//       modal
//       trigger={
//         //write code here
//       }
//       className="popup-content"
//     >
//       //write code here
//     </Popup>
//   )
// }

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-bar-content-container">
      <Link to="/" className="link-item">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <div>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="hamburger-button"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          }
        >
          {close => (
            <div className="pop-up-container">
              <div className="close-mark-icon-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  testid="closeButton"
                >
                  <IoMdClose className="close-icon" />
                </button>
              </div>
              <div className="pop-up-bottom-container">
                <ul className="navigation-items-container">
                  <li className="icon-and-text-container">
                    <Link to="/" className="link-item">
                      <AiFillHome className="home-about-icon" />
                      <h1 className="home-about-text">Home</h1>
                    </Link>
                  </li>

                  <li className="icon-and-text-container">
                    <Link to="/about" className="link-item">
                      <BsInfoCircleFill className="home-about-icon" />
                      <h1 className="home-about-text">About</h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)

export default Header
