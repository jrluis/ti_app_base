/*
	Header Control
	in case of needing a specific header, just derive for here and override the behavior
		ex: add new factory function "app.controls.MyHeader"
			instantiate header "new app.controls.Header();"
			than you can add functions, properties, ou change the base properties of the control
*/

(function() {
	app.controls.Header = function(props) {
		if (typeof props == 'undefined') { props = {}; }
		if (typeof props.title == 'undefined') { props.title = 'Header'; }
		
		var control = Ti.UI.createView({
			top: 0,
			left: 0,
			width: Ti.Platform.displayCaps.platformWidth,
			height: app.height(54),
			backgroundImage: 'interior/1px_barrasuperior.png'
		});
	
		var topLabel = Ti.UI.createLabel({
			top: app.top(2),
			left: 0,
			width: Ti.Platform.displayCaps.platformWidth,
			height: app.height(45),
			color: '#ffffff',
			font: {fontSize: app.font(14)},
			textAlign: 'center',
			text: props.title
		});
	
		control.add(topLabel);
	
		if (!app.isAndroid) {
			var backButton = Ti.UI.createButton({
				top: app.top(10),
				left: app.left(5),
				width: app.width(70),
				height: app.height(30),
				backgroundImage: 'interior/bt_peq_cinza.png',
				backgroundSelectedImage: 'interior/bt_peq_cinza_HIT.png',
				color: '#ffffff',
				font: {fontSize: app.font(12)},
				title: 'VOLTAR'
			});
			
			control.add(backButton);
			
			backButton.addEventListener('click', function(e){
				control.fireEvent('back', {});
			});
		}
		
		control.sRightView = function(view) {
			view.top = app.top(10);
			view.right = app.right(5);
			this.add(view);
		};
		
		return control;
	};
})();