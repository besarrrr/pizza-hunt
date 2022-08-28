const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    createdBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

//create the Pizza model usig the PizzaSchema

const Comment = model('Comment', CommentSchema)

//export the pizza model

module.exports = Comment;