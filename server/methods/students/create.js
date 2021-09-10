import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'students.create',
  validate: new SimpleSchema({
    student: StudentSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    return Students.insert(data.student);
  }
});