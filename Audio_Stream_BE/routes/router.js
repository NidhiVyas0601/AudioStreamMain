var express = require('express');
 
var userController = require('../controller/userController');
var audioController = require('../controller/audioController');
const router = express.Router();
 
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);

router.route('/audio/create').post(audioController.addAudio);
router.get('/audio/get').get(audioController.fetchAudio);
router.put('/audio/update/:id').put(audioController.updateAudio);
router.delete('audio/delete/:id').delete(audioController.deleteAudio);

 
 
module.exports = {router};
