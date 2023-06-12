const router = require('express').Router();
const Answer = require('../models/answer.model');

router.route('/').post((req, res) => {
    Answer.find()
    .then(quest => res.json(quest))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const id = req.body.id;
  Answer.find({id:id})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const answer = req.body.answer;
  const fullname = req.body.fullname;
  const email = req.body.email;
  const id = req.body.id;

  const newCoupon = new Answer({
    answer,fullname,email,id});

  newCoupon.save()
    .then(() => res.json('answer Send sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Answer.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const quest = req.body.quest;
  Answer.findOneAndRemove({"quest":quest})
  
    .then(() => res.json('quest Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const quest = req.body.quest
  Answer.findOne({quest:quest})
    .then(quest => {
      quest.answer = req.body.answer;
      quest.fullname = req.body.fullname;
      quest.email = req.body.email;
      quest.id = req.body.id;

      quest.save()
        .then(() => res.json('quest updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;