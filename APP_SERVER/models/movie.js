const mongoose = require('mongoose');

// review schema
const reviewSchema = new mongoose.Schema(
    {
        reviewTitle: {
            type: String, 
            required:true,
            minlength:3,
            maxlength:20
        },
        
        name: {
            type: String,
            required:true
        },
        
        reviewRating:{
            type:Number,
            required:true,
            minlength:1,
            maxlength:2
            
        }
});

// book schema
const movieSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required:true,
            minlength:3,
            maxlength:50
        },
        
        type: {
            type: String,
            required:true
        },
        
        rating:{
            type:Number,
            required:true,
            minlength:1,
            maxlength:2
            
        },
        
        review : [reviewSchema],
        
        author:{
            type: String,
            required:true   
        }
    });

mongoose.model('movie',movieSchema)