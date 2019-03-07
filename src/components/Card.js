import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'

const Card = props => {
  const {
    content: {
      fields: { slug },
      frontmatter: { title, date, tags },
    },
  } = props

  return (
    <Link className="p-card" to={slug}>
      <div>
        <h3 className="c-ttl">{title}</h3>
        <div>
          tags
          {tags && tags.map(tag => <Tag tag={tag.toUpperCase()} />)}
          <Date content={date} />
        </div>
      </div>
    </Link>
  )
}

export default Card
