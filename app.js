const express = require('express');
const app = express();
const port = 80;
app.use(express.static("static"));

app.listen(port);