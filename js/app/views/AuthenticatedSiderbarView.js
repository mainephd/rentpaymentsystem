define(['marionette', 'templates'], function (Marionette, templates) {
    return Marionette.ItemView.extend({
        template: templates.authenticatedSidebarView,
        initialize: function () {
            console.log("Initialize AuthenticatedSidebarView");
        }
    });
});