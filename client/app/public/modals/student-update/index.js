import bootstrap from "bootstrap";

Template.publicModalStudentUpdate.onRendered(function() {
  const self = this;

  const modalElement = document.getElementById('brdPublicModalStudentUpdateModal');
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener('hidden.bs.modal', function (event) {
    AppUtil.temp.set('classId', null);
    self.$('form#brdPublicModalStudentUpdateForm').trigger("reset");
  });
});

Template.publicModalStudentUpdate.events({
  'submit form#brdPublicModalStudentCreateForm': function (event, template) {
    event.preventDefault();
    const classId = AppUtil.temp.get('classId');

    const name = event.target.name.value
    const surname = event.target.surname.value
    const schoolNumber = event.target.schoolNumber.value
    const age = event.target.age.value
    const length = event.target.length.value
    const weight = event.target.weight.value
    const attendanceAt = event.target.attendanceAt.value
    const status = event.target.status.value

    const obj = {
      student: {
        name: name,
        surname: surname,
        schoolNumber: schoolNumber,
        age: age,
        length: length,
        weight: weight,
        classId: classId,
        attendanceAt: attendanceAt,
        status: status,
      }
    }

    console.log(obj);
    
    Meteor.call('students.update', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }


      console.log(result);
      AppUtil.refreshTokens.set('students', Random.id());
      event.target.reset();
      template.modal.hide();
    });
  }
});