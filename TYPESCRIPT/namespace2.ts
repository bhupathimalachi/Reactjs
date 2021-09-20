/// <reference path="namespace1.ts" />
console.log(namespace1.var_one);



/// <reference path="namespace2.ts" />
console.log(namespace2.var_two,
             namespace2.var_three,
              namespace2.var_four);



/// <reference path="namespace3.ts" />
console.log(namespace3.obj.key1);
console.log(namespace3.obj.key2);
console.log(namespace3.obj.key3);














/// <reference path="namespace4.ts" />
let obj1:any=namespace4.funfour();
console.log(obj1.key1,obj1.key2,obj1.key3);









/// <reference path="namespace5.ts" />
let obj2:namespace5.classone=new namespace5.classone(
    {"subone":"reactjs"},
    {"subtwo":"nodejs"},
    {"subthree":"mongoDB"});
console.log(obj2.arg1.subone);
console.log(obj2.arg2.subtwo);
console.log(obj2.arg3.subthree);



/// <reference path="namespace6" />
let obj3:namespace6.interface1={
    fun_one:():any=>{
        return "hello_8";
    },
    fun_two:():any=>{
        return "hello_9";
    },
    fun_three:():any=>{
        return "hello_10"
    }
}
console.log(obj3.fun_one(),obj3.fun_two(),obj3.fun_three());
