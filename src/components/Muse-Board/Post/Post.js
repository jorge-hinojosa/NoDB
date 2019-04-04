import React, {Component} from 'react';
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.comment,
    }
    this.handleChange = this.handleChange.bind(this);
    this.editText = this.editText.bind(this);
  }
  handleChange(val) {
    this.setState({text: val});
  }

  editText(event) {
    const {text} = this.state;
    const {id, editPost} = this.props;

    if (event.key === 'Enter' && text.length !== 0) {
      editPost(id, text);
      this.setState({editting: false});
    }
  }

  render() {
    const {id, title, image, link, comment, editPost, deletePost} = this.props;
    const {editting} = this.state;

    return(
      <article className="Post">
        <h3>{title}</h3>
        <a href={link} target='.blank'>
          <img className="Image"
            src={image} 
            alt={title} />
        </a>
        {
          editting ?
          <input 
            onChange={(e) => this.handleChange(e.target.value)} 
            onKeyPress={this.editText}
            placeholder='Edit post here'/> : 
          <p>{comment}</p>
        }
        <span>
          <button
            onClick={() => this.setState({editting: !editting, comment})}
          >Edit</button>
          <button 
            onClick={() => deletePost(id)}
          >Delete</button>
        </span>
      </article>
    )
  }
}

export default Post;