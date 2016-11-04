'use strict';

const connect = require('electron-connect');

let electron;
const tar = 'dist';
const node = 'node_modules';

const src = {
	app: 'src/index.js',
	css: 'src/styles/**/*.sass',
	copy: 'src/*.html',
	js: 'src/scripts/*.js',
	vendor: [
		`${node}/todomvc-common/base.js`
	]
};

exports.watch = function * () {
	yield this.clear(tar);
	yield this.watch(src.js, 'scripts');
	yield this.watch(src.vendor, 'vendor');
	yield this.watch(src.copy, 'copies');
	yield this.watch(src.css, 'styles');
	yield this.watch(src.app, 'core');
	process.env.ELECTRON_DEV = 1;
	this.start('server');
}

exports.build = function * () {
	yield this.clear(tar);
	yield this.serial(['lint', 'core', 'styles', 'copies', 'vendor']);
}

exports.lint = function * (o) {
	yield this.source(o.src || src.js).xo();
}

exports.scripts = function * (o) {
	yield this.source(o.src || src.js).xo().babel({preload: 1}).target(tar);
	reload();
}

exports.core = function * () {
	yield this.source(src.app).xo().target(tar);
	restart();
}

exports.vendor = function * () {
	yield this.source(src.vendor).concat('vendor.js').target(tar);
	reload();
}

exports.styles = function * () {
	yield this.source('src/styles/app.sass').sass({
		outputStyle: 'compressed',
		includePaths: [node]
	}).target(tar);
	reload();
}

exports.copies = function * () {
	yield this.source(src.copy).target(tar);
	reload();
}

exports.server = function * () {
	electron = connect.server.create({stopOnClose: 1});
	electron.start(tar, ev => {
		if (ev === 'stopped') {
			this.$.log('Quit application! Shutting down...');
			process.exit(0);
		}
	});
}

function reload() {
	electron && electron.reload();
}

function restart() {
	electron && electron.restart();
}
