define(function (require) {
    'use strict';
    return {
        loginView: require('tpl!templates/LoginViewTemplate.html'),
        registerView: require('tpl!templates/RegisterViewTemplate.html'),
        authenticatedSidebarView: require('tpl!templates/AuthenticatedSidebarViewTemplate.html'),
        unauthenticatedSidebarView: require('tpl!templates/UnauthenticatedSidebarViewTemplate.html')
    }
});