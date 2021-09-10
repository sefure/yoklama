Meteor.publish(null, function () {
    if (Meteor.userId()) {
      return Classes.find({});
    }
  });
  
  Meteor.publish(null, function () {
    if(!this.userId){
      return this.ready() 
    }
    
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  
  });