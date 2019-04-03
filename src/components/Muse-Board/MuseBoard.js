import React, {Component} from 'react';
import axios from 'axios';
import './MuseBoard.css';
import Post from './Post/Post';

class Muse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const baseUrl = "/api/posts"
    axios.get(baseUrl).then(
      res => {
        this.setState({posts: res.data})
      }
    )
  }
  
  render() {
    const posts = this.state.posts;
    let viewPosts = posts.map(post => {
      return (
        <Post 
          title={post.title} 
          image={post.image} 
          link={post.link} 
          comment={post.comment}
        />
      )
    })
    console.log(viewPosts);
    return(
      <div>
       {viewPosts}
      </div>
    )
  }
}

export default Muse;