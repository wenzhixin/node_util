/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2012-10-24
 */

var password = require("./password");
console.log("test password start...");
console.log(password.random());
console.log(password.random(10));
console.log(password.random(15));
console.log("test password end...\n\n");


var encrypt = require("./encrypt");
console.log("test encrypt start...");
console.log(encrypt.sha1("test"));
console.log(encrypt.sha1("test", true));
console.log("test encrypt end...\n\n");