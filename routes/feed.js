const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed')

//GET /feed /posts
router.get("/posts", feedController.getPosts);
router.post("/post", feedController.postPost);


module.exports = router;