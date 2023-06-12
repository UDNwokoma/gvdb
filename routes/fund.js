const router = require('express').Router();
let Fund = require('../models/fund.model');

router.route('/').post((req, res) => {
    Fund.find()
    .then(type => res.json(type))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const type = req.body.type;
  Fund.find({type:type})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/find_p').post((req, res) => {
  const type = req.body.type;
  Fund.find({type:type})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type
  const USDT = req.body.USDT
  const id = req.body.id

  const newLove = new Fund({
    type,USDT,id});

  newLove.save()
    .then(() => res.json('money updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const type = req.body.type
  Fund.findOne({"type":type})
    .then(amount => {
      amount.type = req.body.type;
      amount.USDT = req.body.USDT;
      amount.id = req.body.id;

      
      amount.save()
        .then(() => res.json('cash updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Fund.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Fund.findOneAndRemove({"id":id})
    .then(() => res.json('money Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
  Fund.findById(req.params.id)
    .then(amount => {
      amount.username = req.body.username;
      amount.description = req.body.description;
      amount.duration = Number(req.body.duration);
      amount.date = Date.parse(req.body.date);

      amount.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;