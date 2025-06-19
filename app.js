const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/country.routes')(app);
require('./routes/state.routes')(app);
require('./routes/city.routes')(app);

module.exports = app;
