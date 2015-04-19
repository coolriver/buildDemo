require('../../js/component/zepto');
require('../../js/component/dialog');

var $target = $("#myNotify");
var options  = { 
	type: "notity", 
	effect: "from-top", 
	cache: false,
	backdrop: true,
	show: true,
	expires: 2000
};
var dialog = new $.Dialog($target,options);
if (options.show)	dialog.show();
