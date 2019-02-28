import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'

const Card = props => (

  <Link
    className="p-card"
    to={props.postUrl}>

    <div>

      <h3 className="c-ttl">{props.postTitle}</h3>

      <div>
        {/*
          props.tags.map(({ node: tag }) => (
            <Tag content={tag} />
          ))
          */}
        <Date content={props.postDate} />
      </div>

    </div>

  </Link>
)

export default Card