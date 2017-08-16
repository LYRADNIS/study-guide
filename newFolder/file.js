function loopThrough (array, func) {
	for(var index = 0; index < array.length; index++) {
		var element = array[index];
		func(element);
	}
}


function m (objects, transform) {
	var final = [];
	for (var p = 0; p < objects.length; ++p){
		var lol = objects[p];
		final.push(transform(lol));
	}
	return final;
}

function filter (array, callback) {
	var	result = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			result.push(array[i]);
		}
	} 
	return result;

}