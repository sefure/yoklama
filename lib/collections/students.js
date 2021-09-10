import SimpleSchema from "simpl-schema";

Students = new Mongo.Collection("students");

StudentSchema = new SimpleSchema({
  name: String,
  surname: String,
  schoolNumber: String,
  age: String,
  length: String,
  weight: String,
  attendanceAt: String,
  
  status: String,

  classId: SimpleSchema.RegEx.Id,

  payload: {
    type: Object,
    blackbox: true,
    optional: true,
  },
});

Students.attachSchema(StudentSchema);