const router = require('express').Router();
const authController = require('../controllers/carrier/auth');
// router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

// router.post('/logout', authController.postLogout);

module.exports = {
  router: router,
  basePath: '/carrier'
};
