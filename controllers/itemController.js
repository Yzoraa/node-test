// 생활 아이템 모델
const itemModel = require('../models/itemModel');

// 전체 리스트 가져오는 컨트롤러
const getItems = (req, res) =>{
    const items = itemModel.getAllItem();
    res.render('items/index', {items});
};

// 특정 아이디 가져오는 컨트롤러
const getItem = (req, res) =>{
    const item = itemModel.getItemById(req.params.id);
    if(item){
        res.render('items/show', {item});
    } else{
        res.status(404).send('해당하는 상품이 없습니다.');
    }
}

// 가장 비싼 물건 가져오는 컨트롤러
const getPrice = (req, res) =>{
    const price = itemModel.getItemByPrice();
    res.render('items/show2', {price});
    // if(price){
    //     res.render('items/show2', {price});
    // } else{
    //     res.status(404).send('해당하는 상품이 없습니다.');
    // }
}

module.exports = {getItems, getItem, getPrice};