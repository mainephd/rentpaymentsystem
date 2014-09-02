define(['backbone', 'marionette'],function(Backbone, Marionette){
	'use strict';
	var UserModel = new Backbone.Model.extend({
		defaults : {
			name : '',
			email : ''
		}
	});

	return UserModel;
});