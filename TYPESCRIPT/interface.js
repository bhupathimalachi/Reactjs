var obj7 = {
    sub1: "reactjs",
    sub2: "nodejs",
    sub3: "mongodb"
};
console.log(obj7.sub1, obj7.sub2, obj7.sub3);
;
var obj8 = {
    fun1: function () { console.log("Reactjs"); },
    fun2: function () { console.log("nodejs"); },
    fun3: function () { console.log("mongodb"); }
};
obj8.fun1();
obj8.fun2();
obj8.fun3();
var obj9 = {
    fun1: function () { console.log("AnjularJs"); },
    fun2: function () { console.log("Anjular12"); },
    fun3: function () { console.log("mongodb"); }
};
obj9.fun1();
obj9.fun2();
obj9.fun3();
var class15 = /** @class */ (function () {
    function class15() {
        this.var1 = "hello_1";
        this.var2 = "hello_2";
        this.var3 = "hello_3";
    }
    return class15;
}());
;
var obj10 = new class15();
console.log(obj10.var1, obj10.var2, obj10.var3);
var class16 = /** @class */ (function () {
    function class16() {
        this.var4 = "welcome-1";
        this.var5 = "welcome-2";
        this.var6 = "welcom-3";
    }
    return class16;
}());
var obj11 = new class16();
console.log(obj11.var4, obj11.var5, obj11.var6);
