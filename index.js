const express = require('express');
const app = express();
const candlestickData = require('./candlestickDataGathering');
const ama = require('./ama/amaMain');
ama.runAma();

app.listen(3000, ()=>"Server is running")