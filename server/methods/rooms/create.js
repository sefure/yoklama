import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'rooms.create',
  mixins: [SignedInMixin, RoleMixin],
  roles: ['roles.admin'],
  validate: new SimpleSchema({
    room: RoomSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    return Rooms.insert(data.room);
  }
});