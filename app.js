'use strict';
let app = require('koa')();
let error = require('koa-error');

let router = require('koa-router')();
let apiRouter = require('./router/api');

app.use(function *(next) {
	this.set('Access-Control-Allow-Origin', '*');
	this.set('Access-Control-Allow-Credentials', true);
	this.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
	this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	if (this.request.method === 'OPTIONS') {
		this.status = 200;
	}
	yield next;
});

router.get('/', function *(next) {
	this.response.body = 'Koa';
});

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

app.use(error());
app.use(router.routes()).use(router.allowedMethods());

let port = process.env.PORT || 8081;
app.listen(port);
