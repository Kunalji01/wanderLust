const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title :{
        type : String,
    },
    description :{
        type : String,
    },
    image : {
        type :String,
        default : "https://unsplash.com/photos/wooden-balcony-overlooking-autumn-lake-c_ETvJjiDtU",
        set : (v)=> v ===""?"https://unsplash.com/photos/wooden-balcony-overlooking-autumn-lake-c_ETvJjiDtU" :v
    },
    price :{
        type : Number,
    },
    location :{
        type : String,
    },
    country :{
        type : String,
    },
});

const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;