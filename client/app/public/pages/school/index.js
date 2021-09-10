import Swal from 'sweetalert2';
Template.publicPageSchool.onCreated(function () {
  this.state = new ReactiveDict(null, {
    students: [ ],
    class: null
    
  });
});

Template.publicPageSchool.helpers({
  classes: function () {
    return Classes.find({}).fetch();
  },
});

Template.publicPageSchool.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('students');

    const _class = self.state.get('class');

    if(!_class){
      return;
    }

    Meteor.call('students.list', {classId: _class._id}, function (error, result){
      if (error) {
        console.log('error', error);
      }
      if (result){

        console.log(result);
        self.state.set('students', result)
      }
    })

  });
});

Template.publicPageSchool.events({
   'submit form#brdPublicPageSchoolClassCreateForm': function (event, template) {
    event.preventDefault();

    const name = event.target.name.value;

    const obj = {
      class: {
        name: name,
        
      }
    }

    Meteor.call('classes.create', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }

      event.target.reset();

    });

  },
  'submit form#brdPublicPageSchoolStudentCreateForm': function (event, template) {
    event.preventDefault();

    const student = event.target.student.value;

    const obj = {
      student: {
        name: name,
        surname: surname,
        schoolNumber: schoolNumber,
        age: age,
        height: height,
        weight: weight,
        classId: classId,
        
      }
    }

    Meteor.call('students.create', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }

      event.target.reset();

    });

  },
  
  
  'click .brd-student-update': function (event, template) {
    AppUtil.temp.set('student', this)
  },
  'click .brd-class-add' : function (event, template) {
    AppUtil.temp.set('classId', this._id)
  },
  'click .brd-select-class': function (event, template) {
    event.preventDefault();

    console.log(this);
    template.state.set('class', this);
  },
  // 'click .brd-status': function (event, template) {

  //   const student = this;

  //   console.log(this);
  // }

});

