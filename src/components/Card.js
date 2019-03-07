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
      <h3 className="c-ttl">
        {props.content.frontmatter.title}
      </h3>

      <div>
        {/*
          props.tags.map(({ node: tag }) => (
            <Tag content={tag} />
          ))
          */}
        <Date content={props.content.frontmatter.date} />
      </div>

    </StyledContainer>

  )
}

export default Card