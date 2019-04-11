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
    '&:hover': { boxShadow: '0 4px 24px rgba(0,0,0,0.12)' },
    '@media (max-width: 960px)': { display: 'block' },
  },
  flexInner: {
    width: 'calc( 48% - 24px )',
    '@media (max-width: 960px)': {
      width: '100%',
      marginTop: 16,
    },
  },
  
  tagInner: {
    marginTop: 12,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (max-width: 960px)': { marginTop: 0 }
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '@media (max-width: 960px)': {
      margin: {
        top: 16,
        bottom: 16
      }
    }
  },
  title: {
    font: {
      size: '1.8em',
      weight: 700
    },
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    letterSpacing: 2,
    '@media (max-width: 960px)': { fontSize: '1.4em' }
  },
  thumbnail: {
    width: '100%',
    maxWidth: 480,
    height: 280,
    backgroundColor: '#cccccc',
    borderRadius: 4,
    textAlign: 'center',
    lineHeight: '60px',
    '@media (max-width: 960px)': { height: 180 }
  },
  text: { marginTop: 16 }
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
        <h3 className="c-ttl" className={classes.title}>
          {props.content.frontmatter.title}
        </h3>
        <div className={classes.inner}>
          <div className={classes.tagInner}>
            {tags && tags.map(tag => <Tag tag={tag.toUpperCase()} />)}
          </div>
          <Date content={props.content.frontmatter.date} />
        </div>
        <p className={classes.text}>{props.content.excerpt}</p>
      </div>
    </Link>
  )
}

export default injectsheet(styles)(Card)
