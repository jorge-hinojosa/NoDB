import React, {Component} from 'react';
import './Muse.css';

class Muse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      image: '',
      link: '',
      description: '',
    }
  }
  render() {
    return(
      <article className="Post">
        <h3>Hello</h3>
        <img src='https://via.placeholder.com/280x200' />
        <p>I love cats. I love cats. I love cats. </p>
      </article>

    )
  }
}

export default Muse;