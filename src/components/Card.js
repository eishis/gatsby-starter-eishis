import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'
import injectsheet from 'react-jss'

const styles = {
  container: {
    composes: 'p-card'
  }
}

const container = ({ classes, children }) => (
  <div className={classes.container}>{children}</div>
)

const StyledContainer = injectsheet(styles)(container)

const Card = props => (

  <Link
    to={props.content.fields.slug}>

    <StyledContainer>
      <h3 className="c-ttl">{props.content.frontmatter.title}</h3>
      <div>
        {/*
          props.tags.map(({ node: tag }) => (
            <Tag content={tag} />
          ))
          */}
        <Date content={props.content.frontmatter.date} />
      </div>

    </StyledContainer>

  </Link>
)

export default Card