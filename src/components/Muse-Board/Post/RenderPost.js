import React from "react";

function RenderPost(props) {
  return (
    <article className="Post">
      <h3 className="Post-title">{props.title}</h3>
      <a href={props.link} target=".blank">
        <img className="Image" src={props.image} alt={props.title} />
      </a>
      {props.editting ? (
        <input
          onChange={e => props.handleChange(e.target.value)}
          onKeyPress={props.editText}
          placeholder="Edit post here"
        />
      ) : (
        <p className="Caption">{props.comment}</p>
      )}
      <span className="Post-btn-container">
        <div>
          <button
            className="Post-btn"
            onClick={() => props.likeCounter(props.id, props.likes)}
          >
            {props.thumbsUpIcon}
          </button>{" "}
          <span className="Likes">{props.likes}</span>
        </div>
        <div>
          <button className="Post-btn" onClick={() => props.handleClick()}>
            {props.pencilIcon}
          </button>
          <button
            className="Post-btn"
            onClick={() => props.deletePost(props.id)}
          >
            {props.trashIcon}
          </button>
        </div>
      </span>
    </article>
  );
}

export default RenderPost;
