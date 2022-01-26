const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const eventSchema = new Schema({
  event_name: String,
  venue_name: String,
  address: String,
  description: String,
  image: String,
  geometry: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  guests: [
    {
      phone: Number,
      attended: String 
    }
  ],
  created: {
    type: Date,  // Captures both date and time
    default: Date.now
  },
  event_start: {
    type: Date,
    required: [true, 'Date & time of event start required']
    },
  event_end: {
    type: Date,
    required: [true, 'Date & time of event end required']
  },
}, opts);

eventSchema.virtual('properties.popUpMarkup').get(function () {
  return `
  <strong><a href="/events/${this._id}">${this.event_name}</a><strong>
  <p>${this.description.substring(0, 20)}...</p>`
});

module.exports = mongoose.model('Event', eventSchema);
