var os = require('../../js/component/os');
require('../../js/component/zepto');
require('../../js/component/dialog');
var tapEvent = 'tap';
// Why not use tap event? We know click event has a 300+ delay, on iOS 5- this will trigger click event on backdrop.
if(os.ios < 5){
    tapEvent = "click";
}
var dismissDialogEventName = tapEvent + '.dismiss.dialog';

var $target = $("#myAlert");
var options  = {
	toggle: "dialog", 
	type: "alert", 
	effect: "from-left", 
	cache: false,
	backdrop: true,
	show: true,
	expires: 0,
	yes: function(){
		console.log("select yes!");
	},
	no: function(){
		console.log("select no!");
	},
	_default: function(){
		console.log("nothing");
	}
};
var dialog = new $.Dialog($target,options);
$target.on(dismissDialogEventName,function(e){
	var op = $(e.target || e.srcElement).data('op');
	options[op] ? options[op]() : options['_default']();
})
if (options.show)	dialog.show();
