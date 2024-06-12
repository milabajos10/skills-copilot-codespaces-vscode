//Create web server with express.Router() to handle comments routes

const express = require('express');
const router = express.Router();
const comments = require('../storage/comments');

router.get('/', (req, res) => {
    const allComments = comments.getAllComments();
    res.json(allComments);
});

router.post('/', (req, res) => {
    const newComment = req.body;
    comments.addComment(newComment);
    res.status(201).send(newComment);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.getCommentById(id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedComment = req.body;
    const comment = comments.updateCommentById(id, updatedComment);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.deleteCommentById(id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

module.exports = router;
