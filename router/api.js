'use strict';
let router = require('koa-router')();

router.get('/get/marker', function *(next) {
	this.response.body = JSON.stringify({
		markers: [
			{
				position: [116.368904, 39.923423],
				info: "$('#cc').attr('love', '++');",
			},

			{
				position: [116.382122, 39.921176],
				info: "$('#cc').attr('love', '++');",
			},

			{
				position: [116.387271, 39.922501],
				info: "$('#cc').attr('love', '++');",
			},

			{
				position: [116.398258, 39.914600],
				info: "$('#cc').attr('love', '++');",
			},
		],
	});
});

module.exports = router;
