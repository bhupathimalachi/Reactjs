var namespace1;
(function (namespace1) {
    namespace1.var_one = "hello_1";
})(namespace1 || (namespace1 = {}));
/// <reference path="namespace1.ts" />
console.log(namespace1.var_one);
