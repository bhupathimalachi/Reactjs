var namespace1;
(function (namespace1) {
    namespace1.var_one = "hello_1";
})(namespace1 || (namespace1 = {}));
var namespace2;
(function (namespace2) {
    namespace2.var_two = "reactjs";
    namespace2.var_three = "nodejs";
    namespace2.var_four = "mongodb";
})(namespace2 || (namespace2 = {}));
var namespace3;
(function (namespace3) {
    namespace3.obj = {
        key1: funone(),
        key2: funtwo(),
        key3: funthree()
    };
    function funone() {
        return "hello_2";
    }
    function funtwo() {
        return "hello_3";
    }
    function funthree() {
        return "hello_4";
    }
})(namespace3 || (namespace3 = {}));
var namespace4;
(function (namespace4) {
    function funfour() {
        return {
            "key1": "hello_5",
            "key2": "hello_6",
            "key3": "hello_7"
        };
    }
    namespace4.funfour = funfour;
})(namespace4 || (namespace4 = {}));
var namespace5;
(function (namespace5) {
    var classone = /** @class */ (function () {
        function classone(arg1, arg2, arg3) {
            this.arg1 = arg1;
            this.arg2 = arg2;
            this.arg3 = arg3;
        }
        return classone;
    }());
    namespace5.classone = classone;
})(namespace5 || (namespace5 = {}));
/// <reference path="namespace1.ts" />
console.log(namespace1.var_one);
/// <reference path="namespace2.ts" />
console.log(namespace2.var_two, namespace2.var_three, namespace2.var_four);
/// <reference path="namespace3.ts" />
console.log(namespace3.obj.key1);
console.log(namespace3.obj.key2);
console.log(namespace3.obj.key3);
/// <reference path="namespace4.ts" />
var obj1 = namespace4.funfour();
console.log(obj1.key1, obj1.key2, obj1.key3);
/// <reference path="namespace5.ts" />
var obj2 = new namespace5.classone({ "subone": "reactjs" }, { "subtwo": "nodejs" }, { "subthree": "mongoDB" });
console.log(obj2.arg1.subone);
console.log(obj2.arg2.subtwo);
console.log(obj2.arg3.subthree);
/// <reference path="namespace6" />
var obj3 = {
    fun_one: function () {
        return "hello_8";
    },
    fun_two: function () {
        return "hello_9";
    },
    fun_three: function () {
        return "hello_10";
    }
};
console.log(obj3.fun_one(), obj3.fun_two(), obj3.fun_three());
