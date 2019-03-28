import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  container: {
    width: '100%',
    height: 64,
    position: 'fixed',
    top: 0,
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
    padding: '12px 24px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  list: {
    fontSize: 20,
    height: 40,
    padding: '0 16px',
    fontWeight: 700,
    lineHeight: '32px',
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
      isScrollTop: 0
    }
  }

  render() {

    return(
      <header style={styles.container}>
        <div style={styles.inner}>
          <ul style={styles.nav}>
            <li style={styles.list}>UPDATE</li>
            <li style={styles.list}>BLOG</li>
            <li style={styles.list}>NEWS</li>
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