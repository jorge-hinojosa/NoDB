import React, {Component} from 'react';
import axios from 'axios';
import './MuseBoard.css'
import Post from './Post/Post';
import AddPost from './Add-Post/AddPost';

class Muse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addPost = this.addPost.bind(this);
  }
  componentDidMount() {
    axios.get("/api/posts").then(
      res => {
        this.setState({posts: res.data})
      });
  }
  addPost(newPost) {
    axios.post("/api/posts", newPost).then(
      res => {
        this.setState({posts: res.data})
      });
  }
  editPost(id, text) {
    console.log('editPost:', id, text)
    axios.put(`/api/posts/${id}`, {text}).then(
      res => {
        console.log(res)
        this.setState({posts: res.data})
      });
  }
  deletePost(id) {
    axios.delete(`/api/posts/${id}`).then(
      res => {
        this.setState({posts: res.data})
      });
  }
  
  render() {
    const posts = this.state.posts;
    let viewPosts = posts.map(post => {
      return (
        <Post 
          id={post.id}
          key={post.id}
          title={post.title} 
          image={post.image} 
          link={post.link} 
          comment={post.comment}
          editPost={this.editPost}
          deletePost={this.deletePost}
        />
      )
    })
    console.log(viewPosts);
    return(
      <main>
        <div className="Board">
        {viewPosts}
        </div>
        <AddPost addPost={this.addPost}/>        
      </main>
    )
  }
}

export default Muse;