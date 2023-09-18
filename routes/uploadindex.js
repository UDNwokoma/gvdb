const router = require('express').Router();
const Uploadindex = require('../models/uploadindex.model');

router.route('/').post((req, res) => {
    Uploadindex.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const subject = req.body.subject;
  Uploadindex.find({subject:subject})
  .then(subject => res.json(subject))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findn').post((req, res) => {
  const account = req.body.account;
  Uploadindex.find({account:account})
  .then(account => res.json(account))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findid').post((req, res) => {
  const id = req.body.id;
  Uploadindex.find({id:id})
  .then(id => res.json(id))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const account = req.body.account
  const subject = req.body.subject
  const upload = req.body.upload
  const id = req.body.id

  const newCoupon = new Uploadindex({
    account,subject,upload,id});

  newCoupon.save()
    .then(() => res.json('test gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Uploadindex.findByIdAndDelete(req.params.id)
    .then(exercise => res.json("deleted"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  Uploadindex.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const id = req.body.id
  Uploadindex.findOne({id:id})
    .then(id => {
      id.subject = req.body.subject;
      id.id = req.body.id;

      test.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;