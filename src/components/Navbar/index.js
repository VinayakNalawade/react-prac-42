import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const switchTheme = () => toggleTheme()
      return (
        <nav className={`navbar-${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
          <Link
            className={`link-${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
            to="/"
          >
            <img
              className="website-logo"
              alt="website logo"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
            />
          </Link>
          <ul className="navbar-tabs">
            <li className="li">
              <Link
                className={`link-${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="li">
              <Link
                className={`link-${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            className="theme-button"
            type="button"
            onClick={switchTheme}
          >
            <img
              className="theme-logo"
              alt="theme"
              src={
                !isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
              }
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
