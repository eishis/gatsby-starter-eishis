import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  tag: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: '#FFE867',
    borderRadius: 4,
    paddingTop: 2,
    paddingRight: 8,
    paddingBottom: 2,
    paddingLeft: 8,
    marginRight: 8,
  },
}

const Tag = ({ classes, tag }) => <span className={classes.tag}>{tag}</span>

export default injectSheet(styles)(Tag)
