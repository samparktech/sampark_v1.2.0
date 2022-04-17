const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true,
        unique : false
    },
    lastName : {
        type : String,
        required : true,
        unique : false
    },
    email : {
        type : String,
        // required : true,
    },
    age : {
        type : Number,
        required : false,
        unique : false
    },
    phnumber : {
        type : Number,
        required : false,
    },
    country : {
        type : String,
        required : false,
        unique : false
    },
    gender:{
        type: String
    },
    password:{
        type : String,
        required : true,

    },
    createdOn : {
        type : String,
        default : new Date().toLocaleDateString()
    },
    avatarImage : {
        type : String,
        required : false,
        unique : false,
        default : 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png'
    },
    followerArray : {
        type : [{followers : String, followerAvatar : String}]
    },
    followingArray : {
        type : [{following : String}]
    },
    verified : { 
        type : Boolean
    },
    likedPost : {
        type : [{likedPostId : String}]
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;