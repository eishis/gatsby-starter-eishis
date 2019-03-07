import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'
import injectsheet from 'react-jss'

const styles = {
  container: {
    composes: 'p-inner',
    '&:hover': {
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
    }
  },
  inner: {
    marginTop: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.6em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}

const Card = props => {

  const container = ({ classes, children }) => (
    <Link
      to={props.content.fields.slug}
      className={classes.container}>
      {children}
    </Link>
  )

  const StyledContainer = injectsheet(styles)(container)
  
  return(

    <StyledContainer>
      <h3 className="c-ttl" style={styles.title}>{props.content.frontmatter.title}</h3>

      <div style={styles.inner}>
        {/*
          props.tags.map(({ node: tag }) => (
            <Tag content={tag} />
          ))
          */}
          <div></div>
        <Date content={props.content.frontmatter.date} />
      </div>

    </StyledContainer>

  )
}

export default Card