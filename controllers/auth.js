module.exports = function (app) {

    // INDEX
    app.get('/', (req, res) => {
        res.render('home');
    })
}