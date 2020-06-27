// Create Artist Model
const mongoose = require('mongoose');
const AlbumSchema = require('./album');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String, //String is JS global object
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  age: { type: Number },
  yearsActive: { type: Number },
  image: { type: String },
  genre: { type: String },
  website: { type: String },
  netWorth: { type: Number },
  labelName: { type: String },
  retired: { type: Boolean },
  albums: [AlbumSchema]   //subdocument collection - Album schema used
});

// Artist represents the entire collection
const Artist = mongoose.model('artist', ArtistSchema); // collection "artists" is created if doesnt exist

module.exports = Artist;
