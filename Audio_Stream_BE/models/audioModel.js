var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var audioSchema = new Schema({
 
    songName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
 
});
 
module.exports = mongoose.model('audio', audioSchema);
