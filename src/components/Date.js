import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Date = props => (

  <span className="c-txt">
    <FontAwesomeIcon icon={['fas', 'clock']} />
    {props.content}
  </span>

)

export default Date