import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  tag: {
    color: '#FFFFFF',
    backgroundColor: '#FFE867',
    borderRadius: 8,
    padding: 4,
    margin: 4,
  },
}

const Tag = ({ classes, tag }) => <span className={classes.tag}>{tag}</span>

export default injectSheet(styles)(Tag)
