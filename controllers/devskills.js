const Devskill = require('../models/devskill');

module.exports = {
    index,
    show,
    new: newDevskills,
    create
};

function create(req, res) {
    res.redirct('/devskills');
}

function newDevskills(req, res) {
    res.render('devskills/new');
}

function show(req, res) {
    res.render('devskills/show', {
        devskill: Devskill.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('devskills/index', {
        devskills: Devskill.getAll()
    });
}