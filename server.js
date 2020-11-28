const express = require('express');
const app = express();
const port = 80;


app.get('/', (request, response) => {
	response.send('Hello Express :)');
});

app.listen( port, () => {
	console.log(`Express SEever Listening on port ${port}`);
});
