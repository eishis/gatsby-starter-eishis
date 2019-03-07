import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'
import injectsheet from 'react-jss'

const styles = {
  card: {
    composes: 'p-card'
  }
}

const postCard = ({ classses, children, props }) => (
  <Link
    to={props.content.fields.slug}
    className={classses.card}>
    {children}
  </Link>
)

const styledCard = injectsheet(styles)(card)

const Card = props => (

  <StyledCard>

    <div>
      <h3 className="c-ttl">{props.content.frontmatter.title}</h3>
      <div>
        {/*
          props.tags.map(({ node: tag }) => (
            <Tag content={tag} />
          ))
          */}
        <Date content={props.content.frontmatter.date} />
      </div>

    </div>

  </StyledCard>
)

export default Card