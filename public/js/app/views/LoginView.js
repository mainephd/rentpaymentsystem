define(['marionette','templates'], function (Marionette, templates) {
    return Marionette.ItemView.extend({
        template: templates.loginView,
        initialize: function () {
            console.log("Initialize LoginView");
        }
    });
});