var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//overriding the function
var class17 = /** @class */ (function () {
    function class17() {
    }
    class17.prototype.dbfun = function () {
        return "mangoDB data soon.......!";
    };
    return class17;
}());
var class18 = /** @class */ (function (_super) {
    __extends(class18, _super);
    function class18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class18.prototype.dbfun = function () {
        return "cassandraDB data soon....!";
    };
    return class18;
}(class17));
var obj15 = new class18();
console.log(obj15.dbfun());
//overloading the function
var class19 = /** @class */ (function () {
    function class19() {
    }
    class19.prototype.fun_one = function (arg1, arg2) {
        console.log(arg1, arg2);
    };
    return class19;
}());
var obj16 = new class19();
obj16.fun_one(100, 100);
obj16.fun_one("bhupathi", "malachi");
obj16.fun_one(true, false);
obj16.fun_one("malachi", 9640709601);
//interview questions 
var enum1;
(function (enum1) {
    enum1[enum1["const1"] = 0] = "const1";
    enum1[enum1["const2"] = 1] = "const2";
    enum1[enum1["const3"] = 2] = "const3";
    enum1[enum1["const4"] = 3] = "const4";
})(enum1 || (enum1 = {}));
;
console.log(enum1.const1, enum1.const2, enum1.const3, enum1.const4);
var holidays;
(function (holidays) {
    holidays[holidays["vinayaka"] = 1] = "vinayaka";
    holidays[holidays["pongal"] = 3] = "pongal";
    holidays[holidays["diwali"] = 1] = "diwali";
    holidays[holidays["dusheera"] = 11] = "dusheera";
})(holidays || (holidays = {}));
console.log(holidays.vinayaka, holidays.pongal, holidays.diwali, holidays.dusheera);
var enum2;
(function (enum2) {
    enum2[enum2["const5"] = 10] = "const5";
    enum2[enum2["const6"] = 11] = "const6";
    enum2[enum2["const7"] = 12] = "const7";
    enum2[enum2["const8"] = 13] = "const8";
})(enum2 || (enum2 = {}));
console.log(enum2.const5, enum2.const6, enum2.const7, enum2.const8);
var enum3;
(function (enum3) {
    enum3[enum3["const9"] = 0] = "const9";
})(enum3 || (enum3 = {}));
function fun_seven() { return 14; }
console.log(fun_seven());
var enum4;
(function (enum4) {
    enum4[enum4["const10"] = 100] = "const10";
    enum4[enum4["const11"] = 101] = "const11";
    enum4[enum4["const12"] = 102] = "const12";
    enum4[enum4["const13"] = 103] = "const13";
})(enum4 || (enum4 = {}));
function fun_eight(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4);
}
fun_eight(enum4.const10, enum4.const11, enum4.const12, enum4.const13);
var enum5;
(function (enum5) {
    enum5["str1"] = "hello_1";
    enum5["str2"] = "hello_2";
    enum5["str3"] = "hello_3";
    enum5["str4"] = "hello_4";
})(enum5 || (enum5 = {}));
console.log(enum5.str1, enum5.str2, enum5.str3, enum5.str4);
var enum6;
(function (enum6) {
    enum6["str5"] = "hello_5";
    enum6[enum6["str6"] = 100] = "str6";
    enum6["str7"] = "hello_6";
    enum6[enum6["str8"] = 200] = "str8";
})(enum6 || (enum6 = {}));
console.log(enum6.str5, enum6.str6, enum6.str7, enum6.str8);
//union
var var_one;
var_one = "hello_7";
var_one = 100;
var_one = true;
console.log(var_one);
var msg = "welcome to type keyword in typescript ";
console.log(msg);
var msg2 = "hello";
console.log(msg2);
msg2 = 1000;
console.log(msg2);
msg2 = true;
console.log(msg2);
/*
    function   fun_one(msg3:string):never{
        throw new Error(msg);
        
    }fun_one("hello");
*/
function fun_two() {
    while (true) {
        console.log("hello");
    }
}
fun_two();
