var db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Headline
            .find(req,query)
            .sort({date:-1})
            .then(function(dbHeadline){
                res.json(dbHeadline);
            });
    },
    delete: function(req, res){
        dbHeadline.remove({ _id:req.params.id}).then(function(dbHeadline){
            res.json(dbHeadline);
        }); 
    },
    update:function(req, res){
        dbHeadline.findOneAndUpdate({ _id:req.params.id}, {$set:req.body}, { new: true }).then(function(dbHeadline) {
            res.json(dbHeadline);
        });
    }
};