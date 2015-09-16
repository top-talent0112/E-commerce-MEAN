var mongoose = require('mongoose');

var ItemsSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: {type: Number, default: 0},
    imageURL: String
});

mongoose.model('Items', ItemsSchema);