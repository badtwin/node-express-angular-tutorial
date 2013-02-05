var	fs =					require('fs'),
		express =			require('express');

var app = express();

app.get('*', function(req, res) {
	fs.readFile(__dirname + '/../app/index.html', 'utf-8', function (err, data) {
		if (err) throw err;
		res.send(data);
	});
});

app.listen(4000);