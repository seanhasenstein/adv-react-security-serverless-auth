const data = require('../data/dashboard');

exports.handler = async function(event, context, callback) {
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify(data)
	});
};
