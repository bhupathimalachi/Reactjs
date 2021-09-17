class class1{
    private sub1:string="angular12";
    private sub2:string="nodeJs";
    private sub3:string="mongodb";
    public frontend():string{
        return this.sub1;
    }
    public backend():string{
        return this.sub2;
    }
    public database():string{
        return this.sub3
    }
};
let obj:class1=new class1();
console.log(obj.frontend(),obj.backend(),obj.database());


class  class2{
    private var1:string;
    constructor(arg1:string){
        this.var1=arg1;
    }
    public getvar1():string{
        return this.var1;
    }
}
let obj1:class2=new class2("hello_1");
console.log(obj1.getvar1());


class class3{
    constructor (public arg1:any, public arg2:any, public arg3:any){

    }
}
let obj2:class3=new class3({"key1":"hello_1"},{"key2":"hello_2"},{"key3":"hello_3"});
console.log(obj2.arg1.key1,obj2.arg2.key2,obj2.arg3.key3);



class class4{
    var1:string="hello_4";
}
class class5 extends class4{
    var2:string="hello_5";
}
let obj3:class5=new class5();
console.log(obj3.var1,obj3.var2);

class class6{
    fun1():string{
        return "hello_6";
    }
}
class class7 extends class6{
    fun2():string{
        return "hello_7";
    }
}
class class8 extends class7{
    fun3():string{
        return "hello_8";
    }
}
let obj4:class8=new class8();
console.log(obj4.fun1(),obj4.fun2(),obj4.fun3());


class class9{
    public    var1:string;
    constructor(arg4:string){
        this.var1=arg4;
    }
}
class class10 extends class9{
    public var2:string;
    constructor(arg5:any,arg6:any){
        super (arg5);
        this.var2=arg6;
    }
}
let obj5:class10=new class10("hello_9","hello_10");
console.log(obj5.var1,obj5.var2);


class class11{
    static var1:string="hello_11";
    static fun1():string{
        return "welcome"
    }
}
console.log(class11.var1,class11.fun1());


class class12{
    private constructor(){};
    static fun1():any{
        return new class12();
    }
    fun2():any{
        return "hello_12"
    }
}
console.log(class12.fun1().fun2());


//readonly we can read the data by won't modify
class class13{
    readonly var1:string="hello_13";
}
let obj6:class13=new class13();
console.log(obj6.var1);
