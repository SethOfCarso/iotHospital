'use strict';

const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.route('/')
    .get(UserController.getUsers)      // Add more middlewares if needed
    .post(UserController.saveUser);

router.route('/names')
    .get(UserController.getUsersName)      // Add more middlewares if needed

router.route('/folio/:username')
    .delete(UserController.deleteUserByUID)
    .put(UserController.updateUserByUID)
    .get(UserController.getUserByUID)



module.exports = router;