/*
	helper functions for automatic ui resize on different screen resolutions
	ATTENTION: screens with resize ratio width/height very different, will distort the ui
		iphones don't have this problem, androids are more problematic
*/

(function() {	
	var ratio_width = Ti.Platform.displayCaps.platformWidth / 320;
	var ratio_height = Ti.Platform.displayCaps.platformHeight / 480;
	var ratio_font = Ti.Platform.displayCaps.platformHeight === 480 ? 1 : Ti.Platform.displayCaps.platformHeight / 480 - 0.2;
	
	app.getAvailableHeight = function() {
		var statusBarHeight = 20;
	 
	 	if (Ti.Platform.name == 'android') {
			switch (Ti.Platform.displayCaps.density) {
			case 160:
			    statusBarHeight = 25;
			    break;
			case 120:
			    statusBarHeight = 19;
			    break;
			case 240:
			    statusBarHeight = 38;
			    break;
			case 320:
			    statusBarHeight = 50;
			    break;
			default:
			    statusBarHeight = 25;
			    break;
			}
		}
		
		return Ti.Platform.displayCaps.platformHeight - statusBarHeight;
	};
	
	app.top = function(val) {
		return val * ratio_height;
	};
	
	app.left = function(val) {
		return val * ratio_width;
	};
	
	app.bottom = function(val) {
		return val * ratio_height;
	};
	
	app.right = function(val) {
		return val * ratio_width;
	};
	
	app.width = function(val) {
		return val * ratio_width;
	};
	
	app.height = function(val) {
		return val * ratio_height;
	};
	
	app.font = function(val) {
		return (val * ratio_font) + 'px';
	};
})();