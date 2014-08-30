define(['marionette', 'templates'], function (Marionette, templates) {
    return Marionette.ItemView.extend({
        template: templates.unauthenticatedSidebarView,
        initialize: function () {
            console.log('Initialize UnauthenticatedSidebarView');
        },
        events: {
            'click #nav-register': 'onClickRegister',
            'click #nav-login': 'onClickLogin'
        },
        onClickRegister: function () {
            console.log('Register Link Clicked');
        },
        onClickLogin: function () {
            console.log('Login Link Clicked');
        }
    });
});