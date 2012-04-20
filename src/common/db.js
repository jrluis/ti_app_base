/*
	Facade to access the sqlite database on device
	this file, should be the only one with sql commands
	app.db is an data access object DAO
	TODO: investigate use of ORM, to avoid putting sql statements in code
*/

(function() {
	app.db.isLoggedIn = function() {
		var strSQL = 'SELECT userName, password from login';
	
		var db = Ti.Database.open('db');
		var rows = db.execute(strSQL);
		
		var result = rows.isValidRow();
		
		rows.close();
		db.close();
	
		return result;
	};
	
	app.db.getLogin = function() {
		var strSQL = 'SELECT userName, password from login';
	
		var db = Ti.Database.open('db');
		var rows = db.execute(strSQL);
		
		var login = {
			userName: rows.fieldByName('userName'),
			password: rows.fieldByName('password')
		};
		
		rows.close();
		db.close();
	
		return login;
	};
	
	app.db.saveLogin = function(userName, password) {
		var strDeleteSQL = 'DELETE FROM login';
		var strInsertSQL = 'INSERT INTO login(userName, password) values (?, ?)';
		var values = [
			userName,
			password
		];
		
		var db = Ti.Database.open('db');				
		db.execute(strDeleteSQL);
		db.execute(strInsertSQL, values);
		db.close();
	};
	
	app.db.logoff = function() {
		var strSQL = 'DELETE FROM login';
	
		var db = Ti.Database.open('db');
		db.execute(strSQL);
		db.close();
	};
})();