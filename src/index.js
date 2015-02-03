import $ from 'jquery';

class Bootstrap {
	constructor() {
		console.log("simon");
		console.log($.fn.jquery);
	}
}

export bootstrap = function() {
	retuurn new Bootstrap();
};