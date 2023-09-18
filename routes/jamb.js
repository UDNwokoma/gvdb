const router = require('express').Router();
const Jamb = require('../models/jamb.model');

router.route('/').post((req, res) => {
    Jamb.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const id = req.body.id;
  Jamb.find({id:id})
  .then(id => res.json(id))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  Jamb.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const account = req.body.account
  const subject = req.body.subject
  const question  = req.body.question
  const qimg = req.body.qimg
  const A = req.body.A
  const B = req.body.B
  const C = req.body.C
  const D = req.body.D
  const E = req.body.E
  const ANS = req.body.ANS
  const id = req.body.id

  const newCoupon = new Jamb({
    account,subject,question,qimg,A,B,C,D,E,ANS,id});

  newCoupon.save()
    .then(() => res.json('test gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Jamb.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  Jamb.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const test = req.body.test
  Jamb.findOne({test:test})
    .then(test => {
      test.account = req.body.account;
      test.subject = req.body.subject;
      test.question = req.body.question;
      test.qimg = req.body.qimg;
      test.A = req.body.A;
      test.B = req.body.B;
      test.C = req.body.C;
      test.D = req.body.D;
      test.E = req.body.E;
      test.ANS = req.body.ANS;
      test.id = req.body.id;

      test.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;