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
var class1 = /** @class */ (function () {
    function class1() {
        this.sub1 = "angular12";
        this.sub2 = "nodeJs";
        this.sub3 = "mongodb";
    }
    class1.prototype.frontend = function () {
        return this.sub1;
    };
    class1.prototype.backend = function () {
        return this.sub2;
    };
    class1.prototype.database = function () {
        return this.sub3;
    };
    return class1;
}());
;
var obj = new class1();
console.log(obj.frontend(), obj.backend(), obj.database());
var class2 = /** @class */ (function () {
    function class2(arg1) {
        this.var1 = arg1;
    }
    class2.prototype.getvar1 = function () {
        return this.var1;
    };
    return class2;
}());
var obj1 = new class2("hello_1");
console.log(obj1.getvar1());
var class3 = /** @class */ (function () {
    function class3(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class3;
}());
var obj2 = new class3({ "key1": "hello_1" }, { "key2": "hello_2" }, { "key3": "hello_3" });
console.log(obj2.arg1.key1, obj2.arg2.key2, obj2.arg3.key3);
var class4 = /** @class */ (function () {
    function class4() {
        this.var1 = "hello_4";
    }
    return class4;
}());
var class5 = /** @class */ (function (_super) {
    __extends(class5, _super);
    function class5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var2 = "hello_5";
        return _this;
    }
    return class5;
}(class4));
var obj3 = new class5();
console.log(obj3.var1, obj3.var2);
var class6 = /** @class */ (function () {
    function class6() {
    }
    class6.prototype.fun1 = function () {
        return "hello_6";
    };
    return class6;
}());
var class7 = /** @class */ (function (_super) {
    __extends(class7, _super);
    function class7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class7.prototype.fun2 = function () {
        return "hello_7";
    };
    return class7;
}(class6));
var class8 = /** @class */ (function (_super) {
    __extends(class8, _super);
    function class8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class8.prototype.fun3 = function () {
        return "hello_8";
    };
    return class8;
}(class7));
var obj4 = new class8();
console.log(obj4.fun1(), obj4.fun2(), obj4.fun3());
var class9 = /** @class */ (function () {
    function class9(arg4) {
        this.var1 = arg4;
    }
    return class9;
}());
var class10 = /** @class */ (function (_super) {
    __extends(class10, _super);
    function class10(arg5, arg6) {
        var _this = _super.call(this, arg5) || this;
        _this.var2 = arg6;
        return _this;
    }
    return class10;
}(class9));
var obj5 = new class10("hello_9", "hello_10");
console.log(obj5.var1, obj5.var2);
var class11 = /** @class */ (function () {
    function class11() {
    }
    class11.fun1 = function () {
        return "welcome";
    };
    class11.var1 = "hello_11";
    return class11;
}());
console.log(class11.var1, class11.fun1());
var class12 = /** @class */ (function () {
    function class12() {
    }
    ;
    class12.fun1 = function () {
        return new class12();
    };
    class12.prototype.fun2 = function () {
        return "hello_12";
    };
    return class12;
}());
console.log(class12.fun1().fun2());
//readonly we can read the data by won't modify
var class13 = /** @class */ (function () {
    function class13() {
        this.var1 = "hello_13";
    }
    return class13;
}());
var obj6 = new class13();
console.log(obj6.var1);
