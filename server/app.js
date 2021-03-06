var	fs =					require('fs'),
		express =			require('express'),
		livereload =	require('livereload');

var app = express();

app.use(express.static(__dirname + '/../app/'));

app.get('*', function(req, res) {
	fs.readFile(__dirname + '/../app/index.html', 'utf-8', function (err, data) {
		if (err) throw err;
		res.send(data);
	});
});

app.listen(4000);

var server = livereload.createServer();
server.watch(__dirname + "/../app");