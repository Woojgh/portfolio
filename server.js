const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 31337;

var resources = [
    {
        id: 1,
        name: 'Foo'
    }
];

app.get('/resources', function(req, res) {
    res.send(resources);
});

app.get('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = resources.filter(r => r.id === id)[0];

    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});

app.post('/resources', function(req, res) {
    var item = req.body;

    if (!item.id) {
        return res.sendStatus(500);
    }

    resources.push(item);

    res.send('/resources/' + item.id);
});

app.put('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = resources.filter(r => r.id === id)[0];

    if (!existingItem) {
        var item = req.body;
        item.id = id;
        resources.push(item);
        res.setHeader('Location', '/resources/' + id);
        res.sendStatus(201);
    } else {
        existingItem.name = req.body.name;
        res.sendStatus(204);
    }
});

app['delete']('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = resources.filter(r => r.id === id)[0];

    if (!existingItem) {
        return res.sendStatus(404);
    }

    resources = resources.filter(r => r.id !== id);
    res.sendStatus(204);
});

var apiRouter = express.Router();
app.use('/api', apiRouter);

var apiV1 = express.Router();
apiRouter.use('/v1', apiV1);

var playersApiV1 = express.Router();
apiV1.use('/players', playersApiV1);

var boardsApiV1 = express.Router();
apiV1.use('/leaderboards', boardsApiV1);

var PlayersController = require('./controllers/players');
var pc = new PlayersController(playersApiV1);
var BoardsController = require('./controllers/boards');
var bc = new BoardsController(boardsApiV1);
var ScoresController = require('./controllers/scores');
var sc = new ScoresController(boardsApiV1);

// seeds for testing
var PlayersService = require('./services/players');
var p1 = PlayersService.addPlayer({firstName: 'Ben', lastName: 'Sparks', displayName: 'Warspawn'});
var p2 = PlayersService.addPlayer({firstName: 'Joe', lastName: 'Blow', displayName: 'Joey558'});
var p3 = PlayersService.addPlayer({firstName: 'Danny', lastName: 'Danger', displayName: 'DD83'});
var BoardsService = require('./services/boards');
var b1 = BoardsService.addBoard('Total Score', 1);
var b2 = BoardsService.addBoard('Times Died', 0);
var ScoresService = require('./services/scores');
ScoresService.addScore(b1.id, p1.id, 3000);
ScoresService.addScore(b1.id, p2.id, 2345);
ScoresService.addScore(b1.id, p3.id, 15238);
ScoresService.addScore(b2.id, p1.id, 33);
ScoresService.addScore(b2.id, p2.id, 7);
ScoresService.addScore(b2.id, p3.id, 67);

var swaggerTools = require('swagger-tools');
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers'
};

var swaggerDoc = require('./swagger.json');

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());
});

app.use(express.static('./public'));

app.get('/', function(request, response){
	response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
	console.log(PORT + 'This is prteter');
	console.log(`My server is running on port: ${PORT}`);
});
