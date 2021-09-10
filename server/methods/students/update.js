import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'students.update',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    student: StudentSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    Students.update({ _id: data._id }, {
      $set: data.student
    });

  }
});