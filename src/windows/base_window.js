/*
	Base window for all windows (this should be abstract, but javascript doesn't has it,
		so we create a protocol, only the window creator should instantiate base windows,
		check main_window.js for example)
*/

(function() {
	app.windows.BaseWindow = function(props) {
		var window = Ti.UI.createWindow({
			width: Ti.Platform.displayCaps.getPlatformWidth(),
			height: Ti.Platform.displayCaps.getPlatformHeight() - 20,
			backgroundImage: 'interior/fd_interior.jpg',
			navBarHidden: true,
			orientationModes: [Ti.UI.PORTRAIT]
		});
		
		window.openWithAnimation = function() {
			if (app.isAndroid) {
				window.open();
			} else {
				var animation = Ti.UI.createAnimation({
					left: 0,
			    	duration: 300
				});

				window.left = 320;
				window.open(animation);
			}
		};
		
		window.closeWithAnimation = function() {
			if (app.isAndroid) {
				window.close();
			} else {
				var animation = Ti.UI.createAnimation({
					left: 320,
			    	duration: 300
				});

				window.close(animation);
			}
		};
		
		if (app.isAndroid) {
			window.addEventListener('android:back', function(e){
				app.navigator.pop(window);
			});
		}
		
		window.addEventListener('alert', function(e){
			alert(e.message);
		});
		
		var loading = null;
		
		window.showLoading = function() {
			loading = Ti.UI.createView({
				top: app.top(0),
				left: app.left(0),
				width: app.width(320),
				height: app.height(480),
				backgroundColor: 'black',
				opacity: 0.7 		
			});
			
			var loadingLabel = Ti.UI.createLabel({
				top: app.top(10),
				left: app.left(10),
				width: app.width(300),
				height: app.height(420),
				color: '#ffffff',
				textAlign: 'center',
				text: 'Loading...',
				font: {fontSize: app.font(20)}
			});
			loading.add(loadingLabel);
			
			window.add(loading);
		};
		
		window.hideLoading = function() {
			if (loading !== null) {
				window.remove(loading);
				loading = null;
			}
		};

		return window;
	};
})();