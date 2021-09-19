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
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () { return "hello"; };
    ;
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "hello_1";
    };
    return class_two;
}(class_one));
var obj12 = new class_two();
console.log(obj12.fun_one(), obj12.fun_two());
var class_three = /** @class */ (function () {
    function class_three() {
    }
    class_three.prototype.fun_three = function () { return { "key1": "hello_2" }; };
    return class_three;
}());
var obj13 = new class_three();
console.log(obj13.fun_three());
console.log(obj13.fun_three().key1);
var class_four = /** @class */ (function () {
    function class_four() {
    }
    class_four.prototype.fun_four = function () {
        return "hello_3";
    };
    class_four.prototype.fun_five = function () {
        return "hello_4";
    };
    return class_four;
}());
var class_five = /** @class */ (function (_super) {
    __extends(class_five, _super);
    function class_five() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_five.prototype.fun_six = function () {
        return "hello_5";
    };
    return class_five;
}(class_four));
var obj14 = new class_five();
console.log(obj14.fun_four(), obj14.fun_five(), obj14.fun_six());
