const express = require('express');
const app = express();

// const sampleData = require('./post_samples.json')
const pc = require('./posts_controller');

app.use(express.json());

const baseUrl = '/api/posts'
app.post(baseUrl, pc.createPost);
app.get(baseUrl, pc.getAllPosts);
app.put(`${baseUrl}/:id`, pc.editPost);
app.delete(`${baseUrl}/:id`, pc.deletePost);

const PORT = 4020;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))