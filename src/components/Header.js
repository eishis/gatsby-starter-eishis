import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  container: {
    width: '100%',
    height: 64,
    opacity: 1,
    position: 'fixed',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff'
  },
  containerNone: {
    width: '100%',
    height: 64,
    opacity: 0,
    position: 'fixed',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff'
  },
  inner: {
    width: '100%',
    maxWidth: 1008,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  icon: {
    fontSize: 24,
    marginLeft: 16
  }
}

export default class Header extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      isDisplay: false,
      isNone: true
    }
  }

  componentDidMount() {

    setInterval(() => {
      const value = document.documentElement.scrollTop
      console.log(value)
      if (600 < value) {
        this.setState({isDisplay: true})
      } else {
        this.setState({isDisplay: false})
      }
    }, 800)

    setTimeout(() => this.setState({isNone: false}), 600)

  }

  render() {

    return(
      <header
        className={this.state.isDisplay === true ? 'a-header-show' : 'a-header-hide'}
        style={this.state.isNone === false ? styles.container : styles.containerNone}>
        <div style={styles.inner}>
          <ul style={styles.nav}>
            <li className="c-nav c-nav-active">UPDATE</li>
            <li className="c-nav">BLOG</li>
            <li className="c-nav">NEWS</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={['fab', 'facebook']} style={styles.icon} />
            <FontAwesomeIcon icon={['fab', 'twitter']} style={styles.icon} />
          </div>
        </div>
      </header>
    )

  }

}