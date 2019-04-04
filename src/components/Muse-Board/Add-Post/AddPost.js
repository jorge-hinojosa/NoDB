import React, {Component} from 'react';
import './AddPost.css';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      link: '',
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    const {addPost} = this.props;
    const {title, image, link, comment} = this.state;

    return (
      <footer className="Footer">
        <form className="AddPostForm">
          Title: <input onChange={this.handleChange} name='title'/>
          Image Source: <input onChange={this.handleChange} name='image'/>
          External Link: <input onChange={this.handleChange} name='link' />
          Description: <input onChange={this.handleChange} name='comment'/>
        <button 
          className="AddPostBtn"
          onClick={() => addPost({title, image, link, comment})}
        >Add Post</button>
        </form>
      </footer>
    )
  }
}

export default AddPost;