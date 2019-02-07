import React from 'react'

const styles = {
  top: {
    fontSize: 48,
    fontWeight: 900,
  },
  xl: {
    fontSize: 40,
    fontWeight: 900,
  },
  lg: { fontSize: 28 },
  md: { fontSize: 24 },
  sm: { fontSize: 20 },
  xs: { fontSize: 16 }
}

const Title = props => (

  props.type === 'top' ?

    <h1 className="c-ttl" style={styles.top}>{props.content}</h1>

  : props.type === 'xl' ?

    <h2 className="c-ttl" style={styles.xl}>{props.content}</h2>

  : props.type === 'lg' ?

    <h3 className="c-ttl" style={styles.lg}>{props.content}</h3>

  : props.type === 'md' ?

    <h4 className="c-ttl" style={styles.md}>{props.content}</h4>

  : props.type === 'sm' ?

    <h5 className="c-ttl" style={styles.sm}>{props.content}</h5>

  :

    <h6 className="c-ttl" style={styles.xs}>{props.content}</h6>

)

export default Title