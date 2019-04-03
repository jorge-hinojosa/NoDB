const express = require('express');
const app = express();

// const sampleData = require('./post_samples.json')
const pc = require('./posts_controller');

app.use(express.json());

const baseURL = '/api/posts'
app.get(baseURL, pc.getAllPosts);

const PORT = 4020;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))