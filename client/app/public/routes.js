import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'public.home',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageHome' });
  }
});

FlowRouter.route('/chat', {
  name: 'public.chat',
  triggersEnter: [MustSignIn],
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageChat' });
  }
});

FlowRouter.route('/school', {
  name: 'public.school',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageSchool' });
  }
});