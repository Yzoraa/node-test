const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

// 전체 리스트 가져오는 라우터
router.get('/', actorController.getAllactor);

// 남자 배우 리스트 가져오는 라우터
router.get('/man', actorController.getManactor);

// 여자 배우 리스트 가져오는 라우터
router.get('/woman', actorController.getWomanactor);

// 같은 작품에 출연한 배우 가져오는 라우터
router.get('/same', actorController.getSameactor);

// 영화 카테고리만 가져오는 라우터
router.get('/movie', actorController.getMovie);

// 드라마 카테고리만 가져오는 라우터
router.get('/drama', actorController.getDrama);

module.exports = router;