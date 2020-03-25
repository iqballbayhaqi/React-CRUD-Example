const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Member = new Schema({
    person_name: {
        type: String
    },
    job_title_name: {
        type: String
    },
    phone_number: {
        type: Number
    }
}, {
    collection: 'member'
})

module.exports = mongoose.model('Member', Member)