const router = require('express').Router();
const {
  createReaction,
  removeReaction, 
} = require('../../controllers/reactionController');

router.route('/:thoughtId/reactions')
  .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); 

  module.exports = router;