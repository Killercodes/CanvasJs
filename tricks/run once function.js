//run once function
function RunOnce(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = RunOnce(function() {
	console.log('Fired!');
});
