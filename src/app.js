/*
	this file bootstraps the app
*/

/*global app object, used to create a namespace*/
var app = {
	isAndroid: Ti.Platform.name == 'android',
	cmd: {},
	net: {},
	db: {},
	controls: {},
	windows: {},
	navigator: {}
};

Ti.include('/common/layout.js');
Ti.include('/common/net.js');
Ti.include('/common/db.js');
Ti.include('/common/cmd.js');
Ti.include('/common/navigator.js');
/*include other common code here*/

Ti.include('/controls/header.js');
/*include controls implementation here*/

Ti.include('/windows/base_window.js');
Ti.include('/windows/loading_window.js');
Ti.include('/windows/info_window.js');
Ti.include('/windows/main_window.js');
/*include windows implementation here*/

var db = Ti.Database.install('example.sqlite', 'example');
db.close();

/*show the user interface*/
var main_window = new app.windows.MainWindow();
app.navigator.push(main_window, false);