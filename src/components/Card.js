import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'

const Card = props => (

  <Link
    className="p-card"
    to={props.content.fields.slug}>

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

  </Link>
)

export default Card