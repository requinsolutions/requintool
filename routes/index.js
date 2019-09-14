const express = require('express');
const check_auth = require('../middleware/check-auth');
const auth = require('../middleware/auth');
const router = express.Router();

// api calling
router.use('/api/user', require('./user/index'));
router.use('/api/user/document', require('./user/documents'));

//view calling
router.get('/', auth, function (req, res) { res.render('index'); });
router.get('/login', auth, function (req, res) { res.render('login'); });
router.get('/dashboard', check_auth, function (req, res) { res.render('dashboard'); });
router.get('/turnitin', check_auth, function (req, res) { res.render('turnitin'); });
router.get('/user/add', check_auth, function (req, res) { res.render('user/add_user'); });

//vardhaman dental routing
router.get('/vardhaman/dashboard', check_auth, function (req, res) { res.render('vardhaman/dashboard'); });
router.get('/vardhaman/fservices_add', check_auth, function (req, res) { res.render('vardhaman/add_fservices'); });
router.get('/vardhaman/fservices_view', check_auth, function (req, res) { res.render('vardhaman/view_fservices'); });

module.exports = router;