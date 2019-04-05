import React, { Component } from "react";
import "./AddPost.css";
import AddPostForm from "./Add-Post-Form/AddPostForm";
import AddPostLauncher from "./Add-Post-Launcher/AddPostLauncher";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      title: "",
      image: "",
      link: "",
      comment: "",
      likes: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddPost = this.toggleAddPost.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  toggleAddPost() {
    this.setState({
      adding: !this.state.adding,
      title: "",
      image: "",
      link: "",
      comment: "",
      likes: 0
    });
  }
  render() {
    const { addPost } = this.props;
    const { title, image, link, comment, likes, adding } = this.state;

    return this.state.adding ? (
      <AddPostForm
        title={title}
        image={image}
        link={link}
        comment={comment}
        likes={likes}
        addPost={addPost}
        handleChange={this.handleChange}
        toggle={this.toggleAddPost}
      />
    ) : (
      <AddPostLauncher adding={adding} toggle={this.toggleAddPost} />
    );
  }
}

export default AddPost;
