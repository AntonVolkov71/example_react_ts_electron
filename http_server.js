const express = require("express");
const PATH = require("path");
const DEFAULT_PORT = 3000;
const STATIC_DIR = PATH.resolve('dist');
const HTML_FILE = 'index.html';
const app = express();

app.use(express.static(STATIC_DIR));

app.use('*', function (_, res) {
    res.sendFile("".concat(STATIC_DIR, "/").concat(HTML_FILE));
});
app.listen(DEFAULT_PORT, function () {
    console.info("App start on PORT ");
});