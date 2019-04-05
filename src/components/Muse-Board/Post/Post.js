import React, { Component } from "react";
import "./Post.css";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.comment,
      likes: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.editText = this.editText.bind(this);
    this.likeCounter = this.likeCounter.bind(this);
  }
  handleChange(val) {
    this.setState({ text: val });
  }
  editText(event) {
    const { text } = this.state;
    const { id, editPost } = this.props;

    if (event.key === "Enter" && text.length !== 0) {
      editPost(id, text);
      this.setState({ editting: false });
    }
  }
  likeCounter(id, likes) {
    axios.put(`/api/posts/likes/${id}`, { likes }).then(res => {
      // console.log(res);
      this.props.updateLikes(id);
    });
  }

  render() {
    const { id, title, image, link, comment, likes, deletePost } = this.props;
    const { editting } = this.state;

    const thumbsUpIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
      </svg>
    );
    const pencilIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
    const trashIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );

    return (
      <article className="Post">
        <h3>{title}</h3>
        <a href={link} target=".blank">
          <img className="Image" src={image} alt={title} />
        </a>
        {editting ? (
          <input
            onChange={e => this.handleChange(e.target.value)}
            onKeyPress={this.editText}
            placeholder="Edit post here"
          />
        ) : (
          <p className="Caption">{comment}</p>
        )}
        <span className="Post-btn-container">
          <div>
            <button
              className="Post-btn"
              onClick={() => this.likeCounter(id, likes)}
            >
              {thumbsUpIcon}
            </button>{" "}
            <span className="Likes">{likes}</span>
          </div>
          <div>
            <button
              className="Post-btn"
              onClick={() => this.setState({ editting: !editting, comment })}
            >
              {pencilIcon}
            </button>
            <button className="Post-btn" onClick={() => deletePost(id)}>
              {trashIcon}
            </button>
          </div>
        </span>
      </article>
    );
  }
}

export default Post;
