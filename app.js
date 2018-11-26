const express = require('express')
const auth = require('./controllers/auth')
const app = express()
const methodOverride = require('method-override')
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const port = process.env.PORT || 3000;
app.listen(port);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

auth(app); 

module.exports = app;