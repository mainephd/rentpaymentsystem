define(['marionette', 'templates'], function (Marionette, templates) {
    return Marionette.ItemView.extend({
        template: templates.registerView,
        initialize: function () {
            console.log("Initialize RegisterView");
        }
    });
});