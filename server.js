const express = require('express');

const app = express();

const bodyParser = require('body-parser').urlencoded();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response){
	response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
	console.log(PORT + 'This is prteter');
	console.log(`our server is running on port: ${PORT}`);
});
