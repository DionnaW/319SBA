import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true }
});


  const Schedule = mongoose.model('Schedule', scheduleSchema);

  export default Schedule;