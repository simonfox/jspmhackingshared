import $ from 'jquery';

class Bootstrap {
	constructor() {
		console.log("simon");
		console.log($.fn.jquery);
	}
}

export bootstrap = function() {
	return new Bootstrap();
};