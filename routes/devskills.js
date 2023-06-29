var express = require('express');
var router = express.Router();
var devskillsCtrl = require('../controllers/devskills')
//all actual paths start with "/devskills"

//get/devskills
router.get('/', devskillsCtrl.index);
//get/todos/:id
router.get('/new', devskillsCtrl.new);
router.get('/:id', devskillsCtrl.show);
router.post('/', devskillsCtrl.create);
router.delete('/:id', devskillsCtrl.delete);

module.exports = router;