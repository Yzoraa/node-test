const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// 전체 리스트 가져오는 라우터
router.get('/', itemController.getItems);

// 특정 아이디 가져오는 라우터
router.get('/detail/:id', itemController.getItem);

// 가장 비싼 물건 가져오는 라우터
router.get('/price', itemController.getPrice);

module.exports = router;