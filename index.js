/**
 * Module dependencies
 */
var _ = require('lodash');

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

		routes: {

			before: {

			}
		},


		/**
		 * @param  {Function} cb
		 */
		initialize: function (cb) {
			self = this;

			if(!sails.config[self.configKey].enable) return cb();

			var onInit = sails.config[self.configKey].onInit;
			var opts = _.omit(sails.config[self.configKey], "enable", "onInit");

			this.routes.before['all /*'] = connectAssets = require('connect-assets')(opts, onInit);

			cb();
		}
	};
};
