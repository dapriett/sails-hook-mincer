/**
 * Module dependencies
 */
var Mincer = require('mincer');
var _ = require('lodash');
var util = require('util');


/**
 * Mincer Hook
 *
 * Sails Integration with Mincer, using the connect-assets module.
 *
 * @param  {App} sails
 * @return {Object}
 * @hook
 */

module.exports = function Mailin (sails) {

	var self;

	return {

		/**
		 * Default configuration
		 * @type {Object}
		 */
		defaults: {
			__configKey__: {
				enable: true,
				paths: ['assets/'],
				onInit: function(instance) { }
			}
		},


		/**
		 * @param  {Function} cb
		 */
		initialize: function (cb) {
			self = this;

			if(!sails.config[self.configKey].enable) return cb();


			if (!sails.hooks.http) {
				return cb(new Error('Cannot use the `mincer` hook without the `http` hook.'));
			}

			var onInit = sails.config[self.configKey].onInit;
			var opts = _.omit(sails.config[self.configKey], "enable", "onInit");

			// If http hook is enabled, wait until the http hook is loaded
			// before trying to attach the socket.io server to our underlying
			// HTTP server.
			sails.after('hook:http:loaded', function (){
				// Register connect-assets middleware
				sails.hook.http.app.use(require('connect-assets')(opts, onInit));
			});

			cb();
		}
	};
};
