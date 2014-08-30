define(['marionette', 'views/LoginView', 'views/UnauthenticatedSidebarView'],
    function (Marionette, LoginView, UnauthenticatedSidebarView) {
        'use strict';
        var app = new Marionette.Application();
        var maincontent = new LoginView();
        var sidebar = new UnauthenticatedSidebarView();
        app.addRegions({       
            appcontentRegion: '#applicationContentRegion',
            sidebarRegion: '#sidebarRegion'
        });
        app.addInitializer(function () {
            app.appcontentRegion.show(maincontent);
            app.sidebarRegion.show(sidebar);
        });
        $(function () {
            $(".toggle-left-sidebar").on("click", function () {
                $(".row-offcanvas").toggleClass("active-left");
            });
        });
        return window.app = app;
});