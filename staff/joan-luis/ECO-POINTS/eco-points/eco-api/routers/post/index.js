const express = require('express')
const postController= require('../../logic/post/index')
const router = express.Router();

router.get ('/', postController.index)
router.post ('/', postController.store)

module.exports= router; 