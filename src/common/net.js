/*
	Facade to access the rest server
	all remote call go in here
*/

(function() {
	var base_url = 'http://example.com';
	var timeout = 10000;
	
	function request(props, url, verb, data) {
		if (typeof props == 'undefined') { props = {}; }
		if (typeof props.onload == 'undefined') { props.onload = function(e) { alert('load'); }; }
		if (typeof props.onerror == 'undefined') { props.onerror = function(e) { alert('error'); }; }
		if (typeof props.timeout == 'undefined') { props.timeout = timeout; }

		Ti.API.info(verb + ' ' + url + ' ' + JSON.stringify(data));
		var client = Ti.Network.createHTTPClient(props);
		
		client.open(verb, url);
		client.setRequestHeader('Accept', 'application/json');
		
		if (typeof data == 'undefined') {
			client.send();
		} else {
			client.send(data);
		}
	}
	
	app.net.userRegister = function(name, email, password, phone, birthDate, sex, district, professional, authorize,
		props) {
		var url = base_url + "/user?" +
			"name=" + name + "&" +
			"email=" + email + "&" +
			"password=" + password + "&" +
			"phone=" + phone + "&" +
			"birthDate=" + birthDate + "&" +
			"sex=" + sex + "&" +
			"district=" + district + "&" +
			"professional=" + professional + "&" +
			"authorize=" + authorize;
		request(props, url, 'POST');
	};
	
	app.net.authentication = function(email, password,
			props) {
		var url = base_url + "/authentication?" +
			"email=" + email + "&" +
			"password=" + password;
		request(props, url, 'GET');
	};

})();