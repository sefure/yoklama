import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'students.list',
  validate: new SimpleSchema({
    classId: SimpleSchema.RegEx.Id,
  }).validator(),
  run: function (data) {
    this.unblock();

    return Students.find({classId: data.classId}).fetch();
  }
});