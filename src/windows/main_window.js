/*
	Main window for the app
	create a menu control, and add it
	the menu should open the other windows (use command to do that) 
	ATTENTION: don't block the ui, avoid ui friezes (good UX)
		when appropriate show loading window or progress reports
*/

(function() {
	app.windows.MainWindow = function () {
		var window = new app.windows.BaseWindow();
		window.backgroundImage = 'fd.jpg';
		window.exitOnClose = true;
		
		/*put logic here*/
		
		return window;
	};
})();
