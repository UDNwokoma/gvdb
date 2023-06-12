const router = require('express').Router();
const Question = require('../models/question.model');

router.route('/').post((req, res) => {
    Question.find()
    .then(quest => res.json(quest))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const question = req.body.question;
  Question.find({quest:quest})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const question = req.body.question;
  const fullname = req.body.fullname;
  const email = req.body.email;
  const category = req.body.category;
  const id = req.body.id;

  const newCoupon = new Question({ question,fullname,email,category,id});

  newCoupon.save()
    .then(() => res.json('quest gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const quest = req.body.quest;
  Question.findOneAndRemove({"quest":quest})
  
    .then(() => res.json('quest Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const quest = req.body.quest
  Question.findOne({quest:quest})
    .then(quest => {
      quest.question = req.body.question;
      quest.fullname = req.body.fullname;
      quest.email = req.body.email;
      quest.category = req.body.category;
      quest.id = req.body.id;

      quest.save()
        .then(() => res.json('quest updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;