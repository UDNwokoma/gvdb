const router = require('express').Router();
const Status = require('../models/status.model');

router.route('/').post((req, res) => {
    Status.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Status.find({email:email})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email
  const chart = req.body.chart
  const Sound = req.body.Sound
  const tooltip = req.body.tooltip
  const history = req.body.history
  const language = req.body.language
  const indicators = req.body.indicators
  const trading = req.body.trading
  const trade = req.body.trade

  const newLove = new Status({
    email,chart,Sound,tooltip,history,language,
    indicators,trading,trade});

  newLove.save()
    .then(() => res.json('STATUS RED!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Status.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Status.findOneAndRemove({"id":id})
    .then(() => res.json('Like Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const email = req.body.email
  Status.findOne({email:email})
    .then(account => {
      account.email = req.body.email;
      account.chart = req.body.chart;
      account.Sound = req.body.Sound;
      account.tooltip = req.body.tooltip;
      account.history = req.body.history;
      account.language = req.body.language;
      account.indicators = req.body.indicators;
      account.trading = req.body.trading;
      account.trade = req.body.trade;
      
      account.save()
        .then(() => res.json('account updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;