const express = require('express')
const auth = require('./controllers/auth')
const app = express()



var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




const port = process.env.PORT || 3000;
app.listen(port);

auth(app); 

module.exports = app;