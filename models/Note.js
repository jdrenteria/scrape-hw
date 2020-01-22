var mongoose = require ("mongoose");
 
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    _headlineID: {
        type:Schema.Types.ObjectId,
        ref:"Headline"
    },

    date:{ 
        type:Date,
        default:Date.now
    },
    noteText:String
});
var Note = mongoose.model  ( "Note", noteSchema);

module.exports = Note; 
