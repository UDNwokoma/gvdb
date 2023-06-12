const router = require('express').Router();
const Ref = require('../models/ref.model');

router.route('/').post((req, res) => {
    Ref.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Ref.find({email:email})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/r').post((req, res) => {
  const ref = req.body.ref;
  Ref.find({ref:ref})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/q').post((req, res) => {
  const qlink = req.body.qlink;
  Ref.find({qlink:qlink})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const email = req.body.email
  const ref = req.body.ref
  const amount = req.body.amount
  const qlink = req.body.qlink

  const newRef = new Ref({email,ref,amount,qlink});

  newRef.save()
    .then(() => res.json('Ref sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Ref.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const email = req.body.email;
  Ref.deleteMany({"email":email})
  
    .then(() => res.json('Ref Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const ref = req.body.ref
  Ref.findOne({ref:ref})
    .then(refer => {
      refer.email = req.body.email;
      refer.ref = req.body.ref;
      refer.amount = req.body.amount;
      refer.qlink = req.body.qlink;

      refer.save()
        .then(() => res.json('rff updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;