var base = {
    lib: 'lib/',
    app: 'app/'    
};
require.config({
    paths: {
        underscore: base.lib + 'underscore-min',
        backbone: base.lib + 'backbone-min',
        marionette: base.lib + 'backbone.marionette-min',
        jquery: base.lib + 'jquery.min',       
        tpl: base.lib + 'tpl',
        app: base.app + 'app',
        views: base.app + 'views',
        models: base.app + 'models',
        templates: base.app + 'templates'
    },
    shim: {
        underscore: {
            exports : '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery','underscore']
        },
        marionette: {
            exports: 'Marionette',
            deps:['backbone']
        },
        deps: ['jquery','underscore']
    }
});
require(['app', 'backbone'], function (App, Backbone) {
    app.start();
    Backbone.history.start();
});