var orm = require('../config/orm.js');

var burger = {

	//createTable (tableName, attributes, options)
	queryInterface.createTable('burgers', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	})


	//addColumn (tableName, attrName, dataType, options)
	queryInterface.addColumn('burgers', 'burger_name'{
	type: Sequelize.STRING,
	allowNull: false
	})

	//addColumn (tableName, attrName, dataType, options)
	queryInterface.addColumn('burgers', 'devoured'{
	type: Sequelize.STRING,
	allowNull: false
	})


	db.syn({force: true})
	};

