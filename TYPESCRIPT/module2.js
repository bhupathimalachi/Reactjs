"use strict";
exports.__esModule = true;
var module1_1 = require("./module1");
console.log(module1_1.varone);
//import vartwo from "./module1";
//console.log(vartwo);
var module1_2 = require("./module1");
console.log(module1_2.varthree, module1_2.varfour, module1_2.varfive);
var myvar = require("./module1");
console.log(myvar.varthree, myvar.varfour, myvar.varfive);
var module1_3 = require("./module1");
console.log((0, module1_3.fun_one)());
console.log((0, module1_3.fun_one)().key1);
var module1_4 = require("./module1");
console.log((0, module1_4.fun_two)());
console.log((0, module1_4.fun_two)().key2);
var module1_5 = require("./module1");
console.log((0, module1_5.fun_three)(), (0, module1_5.fun_four)(), (0, module1_5.fun_five)());
var myfun = require("./module1");
console.log(myfun.fun_three(), myfun.fun_four(), myfun.fun_five());
var module1_6 = require("./module1");
var obj = new module1_6.classone("hello_11", "hello_12", "hello_13");
console.log(obj.arg1, obj.arg2, obj.arg3);
var obj2 = {
    "sub1": "reactjs",
    "sub2": "nodejs",
    "sub3": "mongodb"
};
exports["default"] = obj2;
