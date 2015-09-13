#!/usr/bin/env node

"use strict"

var fs = require('fs')
var Parser = require('ansidown')
var minimist = require('minimist')
var config = require('../config/config')

var bwave = (function () {

	var argv = minimist(process.argv.slice(2), {boolean: ['t', 'g']})

	// change location to global if -g flag set
	var logdir = argv.g ? config.logpath + '/' : ''

	// location of current log
	var log = logdir + config.logname

	// if no message entered, read the log and return
	if (!argv._.length) {
		read(log)
		return
	}

	// otherwise let's make an entry...

	// include timestamp unless -t flag set
	var timestamp = argv.t ? '\n' : '\n## ' + new Date() +'\n\n'

	// join the _ argument string
	var message = argv._.join(' ') + '\n'

	// join atoms into final entry string
	var entry = timestamp + message

	function write (logfile) {
		if (argv._.length) {
			fs.appendFile(logfile, entry, function (err) {
		    if (err) {
		      console.log(err)
		    } else {
		      console.log('bwave.md << ' + entry)
		    }
			})
		} else {
			console.log("Error: No message specified\n", manual())
		}
	}

	function read (logfile) {
		fs.exists(logfile, function (exists) {
    	if (exists) {
				var parsed = new Parser(fs.readFileSync(logfile, 'utf8'))
				console.log(parsed.toString())
    	} else {
				console.log('Error: No bwave file exists here yet!\n', manual())
			}
		})
	}

	function manual () {
		return "\tUse\n\t$ bwave <your entry>\n \tto create an entry."
	}

	// write!
	write(log)

}())