import React, { Component } from "react";
import axios from "axios";
import "./MuseBoard.css";
import Post from "./Post/Post";
import AddPost from "./Add-Post/AddPost";

class Muse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addPost = this.addPost.bind(this);
  }
  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }
  addPost(newPost) {
    axios.post("/api/posts", newPost).then(res => {
      this.setState({ posts: res.data });
    });
  }
  editPost(id, text) {
    console.log("editPost:", id, text);
    axios.put(`/api/posts/${id}`, { text }).then(res => {
      console.log(res);
      this.setState({ posts: res.data });
    });
  }
  deletePost(id) {
    axios.delete(`/api/posts/${id}`).then(res => {
      this.setState({ posts: res.data });
    });
  }
  updateLikes = id => {
    let postsCopy = this.state.posts.slice();
    let index = postsCopy.findIndex(post => post.id === id);
    postsCopy[index].likes += 1;
    this.setState({ posts: postsCopy });
  };

  render() {
    const { posts } = this.state;

    let viewPosts = posts
      .map(post => {
        return (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            image={post.image}
            link={post.link}
            comment={post.comment}
            likes={post.likes}
            editPost={this.editPost}
            deletePost={this.deletePost}
            updateLikes={this.updateLikes}
          />
        );
      })
      .reverse();
    console.log(viewPosts);
    return (
      <main className="Main">
        <div className="Board">{viewPosts}</div>
        <div>
          <AddPost addPost={this.addPost} />
        </div>
      </main>
    );
  }
}

export default Muse;
