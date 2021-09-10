import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'students.show',
  validate: new SimpleSchema({
    classId: SimpleSchema.RegEx.Id,
    student: StudentSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    return Students.findOne({classId: data.classId}).fetch();

  }
});