const DevskillModel = require('../models/devskill');

module.exports = {
    index,
    show,
    new: newDevskills,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    DevskillModel.deleteOne(req.params.id);
    res.redirect('/devskills');
}

function create(req, res) {
    console.log(req.body, "<_contents of our form");
    const devskill = DevskillModel.create(req.body)
    res.redirect(`/devskills/${devskill.id}`);
}

function newDevskills(req, res) {
    res.render('devskills/new');
}

function show(req, res) {
    res.render('devskills/show', {
        devskill: DevskillModel.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('devskills/index', {
        devskills: DevskillModel.getAll()
    });
}