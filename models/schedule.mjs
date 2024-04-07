import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    date: {
      type: Date,
      required: true
    },
    timeSlots: [{
      startTime: {
        type: String,
        required: true
      },
      endTime: {
        type: String,
        required: true
      },
      isAvailable: {
        type: Boolean,
        default: true
      }
    }]
  });

  const Schedule = mongoose.model('Schedule', scheduleSchema);

  export default Schedule;