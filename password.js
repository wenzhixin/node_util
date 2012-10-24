/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2012-10-24
 */

var PASSWORD_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var PASSWORD_LENGTH = 6;

exports.random = function(length) {
	length = length || PASSWORD_LENGTH;
	var randomString = "";
	for (var i = 0; i < length; i++) {
		var rnum = Math.floor(Math.random() * PASSWORD_CHARS.length);
		randomString += PASSWORD_CHARS.substring(rnum, rnum + 1);
	}
	return randomString;
};
