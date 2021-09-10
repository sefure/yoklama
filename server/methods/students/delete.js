import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'students.delete',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: function (data) {
    this.unblock();

    return Students.remove({ id: data._id });
  }
});