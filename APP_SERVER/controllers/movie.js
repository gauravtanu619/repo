var aboutTitle="";

const listdisplay = function(req, res){
    res.render('listdisplay', {movie: movieArray});
};

const about = function(req, res){
    res.render('about', {movie: aboutTitle});
};

var movieArray = [
    {
        name:'Batman',
        type: 'Fiction'
    },
    {
        name:'Spiderman',
        type:'Action'
    },
    {
        name:'Superman',
        type:'Fight'
    }
];
module.exports = {
    listdisplay,
    about
};