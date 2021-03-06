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

function create(req, res) {
    const { id, name, untappd } = req.body;
    const beer = new Beer( { id, name, untappd });
    beer.save().then(() => {
        res.json(beer);
    }).catch( err => {
        res.status(500).send(err);
    })
}

function update(req, res) {
    const { id, name, untappd } = req.body;
    Beer.findOne({ id }).then (beer =>  {
        beer.name = name;
        beer.untappd = untappd;
        beer.save().then(res.json(beer));
    }).catch(err => {
        res.status(500).send(err);
    })
}

function destroy(req, res) {
    const { id } = req.body;
    Beer.findOneAndRemove( {id }).then(beer => {
        res.json(beer)
    }).catch(err => {
        res.status(500).send(err);
    })
}

module.exports = {
    get, create, update, destroy
};