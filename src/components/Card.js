import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'
import injectsheet from 'react-jss'

const styles = {
  container: {
    composes: 'p-inner',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
    },
    '@media screen and (max-width: 960px)': {
      padding: 16
    },
  },
  flexInner: {
    width: 'calc( 100% - 76px )',
  },
  tagInner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: {
      top: 5
    }
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '@media screen and (max-width: 960px)': {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    }
  },
  title: {
    composes: 'c-ttl',
    fontSize: '1.6em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    '@media screen and (max-width: 960px)': {
      fontSize: '1.25em',
    }
  },
  thumbnail: {
    width: 60,
    height: 60,
    backgroundColor: '#cccccc',
    borderRadius: 4,
    textAlign: 'center',
    lineHeight: '60px',
  },
}

const Card = props => {
  const {
    content: {
      frontmatter: { tags },
    },
    classes,
  } = props

  return (
    <Link to={props.content.fields.slug} className={classes.container}>
      <div className={classes.thumbnail} />
      <div className={classes.flexInner}>
        <h3 className={classes.title}>
          {props.content.frontmatter.title}
        </h3>
        <div className={classes.inner}>
          <div className={classes.tagInner}>
            {tags && tags.map(tag => <Tag tag={tag.toUpperCase()} />)}
          </div>
          <Date content={props.content.frontmatter.date} />
        </div>
      </div>
    </Link>
  )
}

export default injectsheet(styles)(Card)
