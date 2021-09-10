Meteor.publish(null, function () {
  return Students.find({ classId: classId });
});