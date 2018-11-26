
module.exports = function (app) {

    // INDEX
    app.get('/', (req, res) => {
        res.render('home', {});
    })

    // SHOW
    app.get('/sign-up', (req, res) => {
        res.render('form', {});
    })

}