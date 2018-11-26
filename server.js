const app = express()
const express = require('express')
const auth = require('./controllers/auth')

app.use(bodyParser.urlencoded({ extended: true }));
var exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;
app.listen(port);

app.get('/', (req, res) => {
    res.render("alalal");
})


auth(server);

module.exports = server;