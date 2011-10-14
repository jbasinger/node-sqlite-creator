var db_creator = require('../node-sqlite-creator');
var sqlite = require('sqlite');

var db = new sqlite.Database();

db.open('test.db', function(error){
	
	if (error){
		console.log('It broked.');
		throw error;
	}
	
	var tblCreator = new db_creator.TableCreator(db);

	console.log(tblCreator.drop_sql('test'));
	
	console.log(tblCreator.create_sql('test',{
			col1: 'INTEGER',
			col2: 'TEXT'
		})
	);
	
	console.log(tblCreator.add_columns_sql('newTest',{
			col2: 'TEXT'
		})
	);
	
	tblCreator.drop('test');
	
	tblCreator.drop('newTest');
	
	tblCreator.create('test',{
		col1: 'INTEGER',
		col2: 'TEXT'
	});

	tblCreator.create('newTest',{
		col1: 'INTEGER'
	});
	
	tblCreator.add_columns('newTest',{
		col2: 'TEXT'
	});
	
});