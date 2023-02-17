import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'} `}
          >
            <img
              className="home-logo"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              Lost Your Way ?
            </h1>
            <p className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              We cannot seem to find the page you are looking for?
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
