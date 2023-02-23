const express = require('express')
const router = express.Router();

const { Posts } = require("../models")


router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts)
})

router.get("/:id", async (req,res) => {
  const id = req.params.id
  const post = await Posts.findByPk(id)
  res.json(post)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  await Posts.destroy({
    where: {
      id: id
    }
  })

  const listOfPosts = await Posts.findAll()
  res.json(listOfPosts)
});

router.put("/:id", async (req, res) => {
  const id = req.params.id

  const newTitle = req.body.title
  const newText = req.body.postText

  await Posts.update({title: newTitle,  postText: newText, }, { where: { id: id } });
 
  const listOfPosts = await Posts.findAll()
  res.json(listOfPosts);
})


router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post)
  res.json(post);
});



module.exports = router 