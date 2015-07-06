This provides a sails hook integrating the Sprokets inspired asset compiler [Mincer](https://github.com/nodeca/mincer).  This uses the the [Connect-Assets](https://github.com/adunkman/connect-assets) module for integrating mincer, registering it as a http middleware.  It supports everything [mincer](https://github.com/nodeca/mincer) supports: Coffeescript, SCSS, LESS, Stylus, Jade, HAML, and EJS.

[![NPM version][npm-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url]
[npm-url]: https://npmjs.org/package/sails-hook-mincer
[npm-image]: http://img.shields.io/npm/v/sails-hook-mincer.svg
[david-dm-url]:https://david-dm.org/dapriett/sails-hook-mincer
[david-dm-image]:https://david-dm.org/dapriett/sails-hook-mincer.svg

#### Features
The advantages of using connect-mincer compared to sails's built-in asset manager includes:
- **Bust Caching**: All assets are fingerprinted using an MD5 hash, so if an asset changes, the filename also changes (in production).
- **Asset Helpers**: Referencing assets is a breeze with built in asset helpers such as `<%- css('path/to/asset') %>` and `<%- js('path/to/js') %>`
- **Directives**: You can require files and whole directories of js/coffeescript in a single file.
- **Multiple Loaders**: Instead of having just one minified and concatenated js file as defined by any assets in the [linker](http://sailsjs.org/#!documentation/assets) folder, you can have as many as you want via directives.

---

## Install
```sh
$ npm install sails-hook-mincer --save
```

---

## Setup

You'll need to modify the default sails grunt tasks to disable it's builtin assets compiler and linker

Dev Environment: `tasks/register/default.js`
```
  grunt.registerTask('default', function() {
    // Do Nothing
    return;
  });

```

Prod Environment: `tasks/register/prod.js`
```
  grunt.registerTask('prod', function() {
    // Do Nothing
    return;
  });
```

`TODO:` Add precompile scripts for `tasks/register/build.js` and `tasks/register/buildProd.js`

** When switching, make sure to clear any compiled assets in your `.tmp` directory

---

## Configuration
Simply create a `config/mincer.js` to modify the options
```js
module.exports.mincer = {
  // Enable/Disable mincer - Default: true
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

---
