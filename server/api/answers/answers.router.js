const router = require('express').Router();
const { solveQuestion, getAnswerByQuestionId } = require('./answers.controller');

router.post('/', solveQuestion);
router.get('/:id', getAnswerByQuestionId);

module.exports = router;