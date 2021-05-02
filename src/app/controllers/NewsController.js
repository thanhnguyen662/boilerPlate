class NewsController{

    //[GET] ./news
    index(req, res){
        res.render('index');
    }

    //[GET] ./news/:slug
    show(req, res){
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();  