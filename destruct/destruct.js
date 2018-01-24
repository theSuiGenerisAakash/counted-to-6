module.exports = function (arr) {
	let obj =  {};
	[ , obj.username, obj.email, , ] = arr;
	return obj;
};
