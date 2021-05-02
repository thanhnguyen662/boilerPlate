class NewsController{

    //[GET] /home
    index(req, res, next){
        res.render('news')
    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new NewsController();  