
    interface interface1{
        sub1:string;
        sub2:string;
        sub3:string;
    }
    let obj7:interface1={
        sub1:"reactjs",
        sub2:"nodejs",
        sub3:"mongodb"
    }
    console.log(obj7.sub1,obj7.sub2,obj7.sub3);


interface interface2{
    fun1():void,
    fun2():void,
    fun3():void
};
let obj8:interface2={
    fun1:():void=>{console.log("Reactjs")},
    fun2:():void=>{console.log("nodejs")},
    fun3:():void=>{console.log("mongodb")}
};
obj8.fun1();
obj8.fun2();
obj8.fun3();
let obj9:interface2={
    fun1:():void=>{console.log("AnjularJs")},
    fun2:():void=>{console.log("Anjular12")},
    fun3:():void=>{console.log("mongodb")}

}
obj9.fun1();
obj9.fun2();
obj9.fun3();



interface interface3{
    var1:string;
    var2:string;
    var3:string;
}
class class15 implements interface3{
    var1:string="hello_1";
    var2:string="hello_2";
    var3:string="hello_3";
};
let obj10:class15=new class15();
console.log(obj10.var1,obj10.var2,obj10.var3);

interface interface4{
    var4:string;
}
interface interface5 extends interface4{
    var5:string;
}
interface interface6 extends interface5{
    var6:string;
}
class class16 implements interface6{
    var4:string="welcome-1";
    var5:string="welcome-2";
    var6:string="welcom-3";
}
let obj11:class16=new class16();
console.log(obj11.var4,obj11.var5,obj11.var6);
