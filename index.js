var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use('/styles', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // redirect CSS bootstrap
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));

const MovieDB = require('moviedb')('354ccc9e4b55046c82b0e4f531c08080');

app.get('/', function (req, res) {
    
    MovieDB.discoverMovie({ 
        year: 2016,
        "vote_average.lte": 7,
        "vote_average.gte": 5,
        "with_genres": 16
    }, (err, data) => {        
        res.render('index', { movie: data.results[0] });
    })

})

app.listen(8080);