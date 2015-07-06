This provides a sails hook integrating the Sprokets inspired asset compiler [Mincer](https://github.com/nodeca/mincer).  This uses the the [Connect-Assets](https://github.com/adunkman/connect-assets) module for integrating mincer, registering it as a http middleware.

[![NPM version][npm-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url]
[npm-url]: https://npmjs.org/package/sails-hook-mincer
[npm-image]: http://img.shields.io/npm/v/sails-hook-mincer.svg
[david-dm-url]:https://david-dm.org/dapriett/sails-hook-mincer
[david-dm-image]:https://david-dm.org/dapriett/sails-hook-mincer.svg

## Install
```sh
$ npm install sails-hook-mincer --save
```

## Configuration
Simply create a `config/mincer.js` to modify the options
```js
module.exports.mincer = {
  // Enable/Disable mincer
	enable: true,
	
	// Add a custom on initialize function to setup mincer
	// @see [Connect-Assets](https://github.com/adunkman/connect-assets#custom-configuration-of-mincer)
	onInit: function(instance) {
	  // Custom configuration of the mincer environment can be placed here
    instance.environment.registerHelper(/* ... */);
	},
	
	// @see [Connect-Assets](https://github.com/adunkman/connect-assets#options) for all available options
	paths: ['assets/']
}
```

For all available options, see [Connect-Assets Options](https://github.com/adunkman/connect-assets#options)