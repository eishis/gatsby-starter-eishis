import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  text: {
    color: '#aaaaaa',
    fontWeight: 700,
    fontSize: '0.9em',
    marginRight: 4,
  },
  icon: {
    marginRight: 8
  }
}

const Date = props => (

  <span style={styles.text}>
    <FontAwesomeIcon icon={['fas', 'clock']} style={styles.icon} />
    {props.content}
  </span>

)

export default Date