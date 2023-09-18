const router = require('express').Router();
const Upload = require('../models/upload.model');

router.route('/').post((req, res) => {
    Upload.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const upload = req.body.upload;
  Upload.find({upload:upload})
  .then(upload => res.json(upload))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/findid').post((req, res) => {
  const id = req.body.id;
  Upload.find({id:id})
  .then(id => res.json(id))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  Upload.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const account = req.body.account
  const classtype = req.body.classtype
  const upload = req.body.upload
  const subject = req.body.subject
  const question  = req.body.question
  const qimg = req.body.qimg
  const A = req.body.A
  const B = req.body.B
  const C = req.body.C
  const D = req.body.D
  const E = req.body.E
  const ANS = req.body.ANS
  const explanation = req.body.explanation
  const id = req.body.id

  const newCoupon = new Upload({
    account,classtype,upload,subject,question,qimg,A,B,C,D,E,ANS,explanation,id});

  newCoupon.save()
    .then(() => res.json('test gen sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Upload.findByIdAndDelete(req.params.id)
    .then(exercise => res.json("deleted"))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/kol').get((req, res) => {
  Upload.findByIdAndDelete(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  Upload.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const test = req.body.test
  Upload.findOne({test:test})
    .then(test => {
      test.account = req.body.account;
      test.classtype = req.body.classtype;
      test.upload = req.body.upload;
      test.subject = req.body.subject;
      test.question = req.body.question;
      test.qimg = req.body.qimg;
      test.A = req.body.A;
      test.B = req.body.B;
      test.C = req.body.C;
      test.D = req.body.D;
      test.E = req.body.E;
      test.ANS = req.body.ANS;
      test.explanation = req.body.explanation;
      test.id = req.body.id;

      test.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;