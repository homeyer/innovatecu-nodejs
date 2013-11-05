var restify = require('restify');

var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/example11');

var server = restify.createServer({
    name: 'Example 11 Server'
});

server.use(restify.bodyParser());

var Item = mongoose.model('Item', { name: {type: String, required: true }});

server.get('/items', function(req, res, next) {
    Item.find(function(err, items) {
        res.json(items);
    });
});

server.post('/items', function(req, res, next) {
    var item = new Item();
    item.name = req.body.name;
    item.save(function(err, item) {
        res.json(item);
    })
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

