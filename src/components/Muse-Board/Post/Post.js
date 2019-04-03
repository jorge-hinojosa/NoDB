import React from 'react';
import './Post.css'

function Post(props) {
  return(
    <article className="Post">
      <h3>{props.title}</h3>
      <img className="Image"
        src={props.image} 
        alt='placeholder'/>
      <p>{props.comment}</p>
    </article>
  )
}

export default Post;