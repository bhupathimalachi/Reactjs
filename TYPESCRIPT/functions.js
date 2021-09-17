console.log("\n first program");
var fun_one = function () {
    return "welcome to arrow function";
};
console.log(fun_one());
console.log("\n second program");
var mern = function (arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
};
mern("reactjs", "nodejs", "mongodb");
mern("angularjs", "nodejs", "mongodb");
console.log("\n third program");
var fun_two = function () {
    return function () {
        return { "key1": "hello_1" };
    };
};
console.log(fun_two()().key1);
console.log("\n fourth program");
var outer = function () {
    return function () {
        return function () {
            return { "key": function () { return "hello"; } };
        };
    };
};
console.log(outer()()().key());
console.log("\n fifth program");
var mern1 = function (arg1, arg2, arg3) {
    console.log(arg1(), arg2(), arg3());
};
mern1(function () { return "reactjs"; }, function () { return "nodejs"; }, function () { return "MonogoDB"; });
console.log("\n sixth program");
var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1.push(function () { return "hello"; });
}
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]());
}
