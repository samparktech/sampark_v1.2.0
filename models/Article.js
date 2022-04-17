const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type : String
    },
    post : {
        type : String
    },
    createdAt:{
        type: Date,
        default: Date.now() 
    },
    postedBy:{
        type: String
    },
    comments : {
        type : [{commentedBy : String, commentMsg : String, avatarImage : String}],
    },
    likes : {
        type : [{likedBy : String}],
        
    },
    dislikes : {
        type : [{dislikedBy : String}]
    },
    articleImage : {
        type : String,
        required : false,
        unique : false
    } 
});

const Article = mongoose.model('Articles', ArticleSchema);

module.exports = Article;