const { createConnection } = require('../data/InventoryItemConnection');
const { checkAuth } = require('../util');

exports.handler = async function(event, context, callback) {
	context.callbackWaitsForEmptyEventLoop = false;
	try {
		const user = await checkAuth(event);
		console.log('user', user);
		const InventoryItem = await createConnection();
		console.log('InventoryItem', InventoryItem);
		const items = await InventoryItem.find({
			user: user.sub
		});
		
		return callback(null, {
			statusCode: 200,
			body: JSON.stringify(items)
		});
	} catch (err) {
		return callback(null, {
			statusCode: 400,
			body: JSON.stringify({
				error: err
			})
		});
	}	
};
