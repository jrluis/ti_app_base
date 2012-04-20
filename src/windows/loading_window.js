/*
	Loading window
	while making a remote call, show this window so the user can understand what the app
	is doing, providing feedback is very important for the UX.
*/
(function() {	
	app.windows.LoadingWindow = function(props) {
		if (typeof props == 'undefined') { props = {}; }
		
		var loadingWindow = new app.windows.BaseWindow();
		
		var top_ = app.getAvailableHeight() / 2 - app.height(30);
		var width_ = Ti.Platform.displayCaps.platformWidth - app.width(100);
		
		var loadingLabel = Ti.UI.createLabel({
			top: app.top(10),
			left: app.left(10),
			width: app.width(300),
			height: app.height(420),
			color: '#ffffff',
			textAlign: 'center',
			text: 'Loading...'
		});
		loadingWindow.add(loadingLabel);
		
		if (!app.isAndroid) {
			var cancelButton = Ti.UI.createButton({
				bottom: app.bottom(50),
				left: app.left(50),
				width: Ti.Platform.displayCaps.platformWidth - app.width(100),
				height: app.height(30),
				opacity: 1,
				title: 'Cancel',
				backgroundImage: 'interior/bt_cinza.png',
				backgroundSelectedImage: 'interior/bt_cinza_HIT.png'
			});
			loadingWindow.add(cancelButton);
			
			cancelButton.addEventListener('click', function(e){
				app.navigator.pop();
			});
		}
		
		loadingWindow.loadingLabel = loadingLabel;
		loadingWindow.sText = function(text){
			loadingWindow.loadingLabel.text = text;
		};
		
		return loadingWindow;
	};
})();