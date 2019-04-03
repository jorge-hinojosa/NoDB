let posts = [
  {
    "title": "Tokyo Lights",
    "image": "https://live.staticflickr.com/8153/7001598946_279f6bfb5e_b.jpg",
    "link": "https://www.youtube.com/watch?v=ZJPjSaOcVwg",
    "comment": "This photo rocks"
  },
  {
    "title": "Mexico Sounds",
    "image": "https://live.staticflickr.com/824/42155484242_112e01ed94_n.jpg",
    "link": "https://www.youtube.com/watch?v=IKmPci5VXz0",
    "comment": "Hola mundo!"
  }
];
let id = 0;

module.exports ={
  getAllPosts: (req, res) => {
    res.status(200).json(posts)
  }
}