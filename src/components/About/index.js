import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <img
              className="home-logo"
              alt="about"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
            />
            <h1 className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
