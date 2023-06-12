const router = require('express').Router();
let Weed = require('../models/weed.model');

router.route('/').post((req, res) => {
  Weed.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/del').post((req, res) => {
  const email = req.body.email;
  Weed.findOneAndRemove({"email":email})
  
    .then(() => res.json('weed Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Weed.find({email:email})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const amount = req.body.amount;
  const wallet = req.body.wallet;
  const type = req.body.type;
  const idd = req.body.idd;

  const newWeed = new Weed({email,amount,wallet,type,idd});

    newWeed.save()
    .then(() => res.json('Weed created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Weed.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Weed.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const email = req.body.email
  Fund.findOne({"email":email})
    .then(exercise => {
      exercise.email = req.body.email;
      exercise.amount = req.body.amount;
      exercise.wallet = req.body.wallet;
      exercise.type = req.body.type;
      exercise.idd = req.body.idd;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;