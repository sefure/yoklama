import SimpleSchema from "simpl-schema";

Attendances = new Mongo.Collection("attendances");

AttendanceSchema = new SimpleSchema({
  attendanceAt: String,
  
  status: String,

  description: {
    type: String,
    optional: true,
  },
});

Attendances.attachSchema(AttendanceSchema);