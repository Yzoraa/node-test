// 배우 모델
const actorModel = require('../models/actorModel');

// 전체 리스트 가져오는 컨트롤러
const getAllactor = (req, res) =>{
    const actors = actorModel.getAllactor();
    res.render('actors/index', {actors});
};

// 남자배우 리스트 가져오는 컨트롤러
const getManactor = (req, res) =>{
    const manActors = actorModel.getManactor();
    res.render('actors/man', {man: manActors});
};

// 여자배우 리스트 가져오는 컨트롤러
const getWomanactor = (req, res) =>{
    const womanActors = actorModel.getWomanactor();
    res.render('actors/woman', {woman: womanActors});
};

// 같은 드라마 || 같은 영화 || 같은 뮤지컬에 출연한 배우 가져오는 컨트롤러
const getSameactor = (req, res) =>{
    const getSameActors = actorModel.getSameActor();
    res.render('actors/same', {same: getSameActors});
};

// 영화 카테고리만 가져오는 컨트롤러
const getMovie = (req, res) =>{
    const getMovies = actorModel.getMovie();
    res.render('actors/movie', {movie: getMovies});
};

// 드라마 카테고리만 가져오는 컨트롤러
const getDrama = (req, res) =>{
    const getDramas = actorModel.getDrama();
    res.render('actors/drama', {drama: getDramas});
}

module.exports = { getAllactor, getManactor, getWomanactor, getSameactor, getMovie, getDrama };