var os = require('../../js/component/os');
require('../../js/component/zepto');
require('../../js/component/dialog');
var tapEvent = 'tap';
// Why not use tap event? We know click event has a 300+ delay, on iOS 5- this will trigger click event on backdrop.
if(os.ios < 5){
    tapEvent = "click";
}
var dismissDialogEventName = tapEvent + '.dismiss.dialog';

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
