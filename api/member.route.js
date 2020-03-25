const express = require('express');
const memberRoutes = express.Router();

// Require member model in our routes model
let Member = require('./member.model');

// Defined store route
memberRoutes.route('/add').post(function (req, res) {
    let member = new Member(req.body);
    business.save()
    .then(member => {
        res.status(200).json({'member': 'member in added successfully'})
    })
    .catch(error => {
        res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
memberRoutes.route('/').get(function (req, res) {
    Member.find(function (err, member) {
        if(err){
            console.log(err);
        }else {
            res.json(member)
        }
    });
});

// Defined edit route
memberRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Member.findById(id, function (err, member) {
        res.json(member);
    });
});

// Defined update route
memberRoutes.route('/update/:id').post(function (req, res) {
    Member.findById(req.params.id, function(err, member) {
        if (!member){
            res.status(404).send("data is not found");
        }else {
            member.person_name = req.body.person_name;
            member.job_title_name = req.body.job_title_name;
            member.phone_number = req.body.phone_number;

            member.save().then(member => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
        });
        }
    });
});

// Defined delete | remove | destry route
memberRoutes.route('/delete/:id').get(function (req, res) {
    Member.findByIdAndRemove({_id: req.params.id}, function(err, member){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = memberRoutes;