const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))