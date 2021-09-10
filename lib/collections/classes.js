import SimpleSchema from "simpl-schema";

Classes = new Mongo.Collection("classes");

ClassSchema = new SimpleSchema({
  name: String,

});

Classes.attachSchema(ClassSchema);