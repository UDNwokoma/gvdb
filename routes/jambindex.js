const router = require('express').Router();
const Jambindex = require('../models/jambindex.model');

router.route('/').post((req, res) => {
    Jambindex.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const subject = req.body.subject;
  Jambindex.find({subject:subject})
  .then(subject => res.json(subject))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const upload = req.body.upload
  const subject = req.body.subject
  const id = req.body.id

  const newCoupon = new Jambindex({
    upload,subject,id});

  newCoupon.save()
    .then(() => res.json('test gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Jambindex.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  Jambindex.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const id = req.body.id
  Jambindex.findOne({id:id})
    .then(id => {
      id.upload = req.body.upload;
      id.subject = req.body.subject;
      id.id = req.body.id;

      test.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;