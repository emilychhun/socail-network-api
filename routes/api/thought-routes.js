let router = require('express').Router();

let {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller')
//set up GET all and POST at /api/Thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
//set up GET one, PUT, and DELETE at api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
//set up POST at api/addReaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
//set up DELECT at api/addReaction/:id
router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;