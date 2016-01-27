'use strict'

/**
 * Module dependencies
 */
var Config = require('configstore')
var pkg = require('./package')

/**
 * Initial config store
 */
var config = new Config(pkg.name)

/**
 * Get duration
 */
function getDuration() {
	var startAt = config.get('startAt')
	var duration = new Date() - new Date(startAt)
	return String(duration / 1000) + ' seconds'
}

/**
 * Expose api
 */
module.exports = function (command) {
	if (['start', 'on'].indexOf(command) > -1) {
		var startAt = new Date()
		config.set('startAt', startAt)
		console.log('Start at', startAt)
	} else if (['stop', 'off', 'tick'].indexOf(command) > -1) {
		var duration = getDuration()
		console.log(duration)
	} else if (['print', 'progress', 'show', 'log'].indexOf(command) > -1) {
		setInterval(function () {
			var duration = getDuration()
			process.stdout.clearLine()
			process.stdout.write('\r' + duration)
		}, 100)
	} else {
		console.log('unknown command')
	}
}
