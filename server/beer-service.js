const Beer = require('./beer-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
    const docquery = Beer.find({}).read(ReadPreference.NEAREST);
    docquery.exec()
    .then(beers => {
        res.json(beers)
    }).catch(err => {
        res.status(500).send(err);
    })
}

module.exports = {
    get
};