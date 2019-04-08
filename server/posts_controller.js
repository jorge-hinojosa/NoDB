let posts = [
  {
    id: 1,
    title: "Tokyo Lights",
    image: "https://live.staticflickr.com/8153/7001598946_279f6bfb5e_b.jpg",
    link: "https://www.youtube.com/watch?v=ZJPjSaOcVwg",
    comment: "So aesthetic",
    likes: 0
  },
  {
    id: 2,
    title: "Mexico Sounds",
    image: "https://live.staticflickr.com/824/42155484242_112e01ed94_n.jpg",
    link: "https://www.youtube.com/watch?v=IKmPci5VXz0",
    comment: "Hola mundo!",
    likes: 0
  },
  {
    id: 3,
    title: "Pyramids",
    image:
      "https://cdn.images.express.co.uk/img/dynamic/151/590x/great-pyramid-996800.jpg?r=1533041321463",
    link: "https://www.youtube.com/watch?v=dMV31MWIjLE",
    comment: "Couldn't find the egyptian god cards :(",
    likes: 0
  }
];
let id = 4;

module.exports = {
  createPost: (req, res) => {
    const { title, image, link, comment, likes } = req.body;
    posts.push({ id, title, image, link, comment, likes });
    id++;
    res.status(200).json(posts);
  },
  getAllPosts: (req, res) => {
    res.status(200).json(posts);
  },
  editPost: (req, res) => {
    const comment = req.body.text;
    const updateId = req.params.id;
    const postIndex = posts.findIndex(post => {
      return post.id == updateId;
    });
    posts[postIndex].comment = comment;
    res.status(200).json(posts);
  },
  deletePost: (req, res) => {
    const index = req.params.id;
    const postIndex = posts.findIndex(post => {
      return post.id == index;
    });
    posts.splice(postIndex, 1);
    res.status(200).json(posts);
  },
  addLike: (req, res) => {
    const likes = req.params.likes;
    // console.log(likes);
    const id = req.params.id;
    const postID = posts.findIndex(post => {
      return post.id == id;
    });
    posts[postID].likes += 1;
    res.status(200).json(posts[postID].likes);
  }
};
