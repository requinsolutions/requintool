const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../../controllers/user/index');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
router.get('/view', user_controller.user_view);
router.post('/create', user_controller.user_create);
router.post('/login', user_controller.user_login);
router.put('/resetpass', user_controller.reset_pass);
router.get('/token', user_controller.gettoken);
router.get('/logout', user_controller.logout);
router.get('/:id', user_controller.user_details);
// router.put('/:id', freelancer_controller.freelancer_update);
router.delete('/:id', user_controller.user_delete);

module.exports = router;