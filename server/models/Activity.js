const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  timeFrom: {
    type: String
  },
  timeTo: {
    type: String
  },
  notes: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  date: {
    type: String,
    trim: true
  },
  itineraryId: {
    type: String
  },
  rating: {
    type: Number,
  }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
