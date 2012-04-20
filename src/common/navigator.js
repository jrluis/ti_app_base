/*
	Controller for window navigation
	this object, abstract the window navigation in android and iphone, 
		maintaining native transitons for each platform
	
	to open window, call app.navigator.push
	to close window, call app.navigator.pop
	if there are several windows open, to get back to menu 
		call app.navigator.popMiddle before closing the current window
*/

(function(){
	var queue = [];
	
	var hiddenWindow = null;
	var navigationGroup = null;
	
	app.navigator.push = function(window, animated){
		if (typeof animated == 'undefined') {
			animated = true;
		}
		
		queue.push(window);
		
		if (app.isAndroid) {
			window.open();
		} else {
			if (navigationGroup === null) {
				hiddenWindow = Ti.UI.createWindow();
				navigationGroup = Ti.UI.iPhone.createNavigationGroup({
				   window: window
				});
				hiddenWindow.add(navigationGroup);
				hiddenWindow.open();
			} else {
				
				navigationGroup.open(window, {animated:animated});
			}
		}
	};
	
	app.navigator.pop = function(window, animated){
		if (typeof window == 'undefined' || window === null) {
			window = queue.pop();
		} else {
			for(var i=0; i<queue.length; ++i) {
				if (window == queue[i]) {
					break;
				}
			}
			queue.splice(i, 1);
		}
		
		if (typeof animated == 'undefined') {
			animated = true;
		}
		
		if (app.isAndroid) {
			window.close();
		} else {
			navigationGroup.close(window, {animated:animated});
		}
	};
	
	app.navigator.alert = function(msg) {
		queue[0].fireEvent('alert', {message:msg});
	};
	
	app.navigator.alertTop = function(msg) {
		queue[queue.length-1].fireEvent('alert', {message:msg});
	};
	
	app.navigator.alertByIndex = function(msg, index) {
		queue[index].fireEvent('alert', {message:msg});
	};
	
	app.navigator.popMiddle = function() {
		for (var i=queue.length-2; i>0; i--){
			if (app.isAndroid) {
				queue[i].close();
			} else {
				navigationGroup.close(queue[i], {animated:false});
			}
		}
		
		queue.splice(1, queue.length-2);
	};
	
	app.navigator.printQueueLength = function() {
		Ti.API.info('QueueLength: ' + queue.length);
	};
})();
