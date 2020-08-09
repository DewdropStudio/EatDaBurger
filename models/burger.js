const orm = require('../config/orm.js');

// burger model
const burger = {
	select: function(cbBurger) {
		orm.selectAll(function(response) {
			cbBurger(response);
		});
	},
	insert: function(burgerName, cbBurger) {
		orm.insertOne(burgerName, function(response) {
			cbBurger(response);
		});
	},
	update: function(burgerStatus, burgerId, cbBurger) {
		orm.updateOne(burgerStatus, burgerId, function(response) {
			cbBurger(response);
		});
	}
}

// export burger model
module.exports = burger;