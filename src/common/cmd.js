/*
	Command pattern
	create commands here that are going to be used by several windows or controls
	don't make this ui specific
	pass needed values in props parameter (don't pass ui object)
*/

(function() {
	app.cmd.executeCommand1 = function(props) {
		if (typeof props == 'undefined') { props = {}; }
		
		/*logic here*/
	};
	
	app.cmd.executeCommand2 = function(props) {
		if (typeof props == 'undefined') { props = {}; }
		
		/*logic here*/
	};
})();