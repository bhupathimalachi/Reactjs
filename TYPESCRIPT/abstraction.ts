abstract class class_one{
    fun_one():any{return "hello"};
    abstract fun_two():any;
}
class class_two extends class_one{ 
    fun_two():any{
        return "hello_1";
    }
}
let obj12:class_two=new class_two();
console.log(obj12.fun_one(),obj12.fun_two());


interface interface7{
    fun_three():any;
}
class class_three implements interface7{
    fun_three():any{return {"key1":"hello_2"}}
}
let obj13:class_three=new class_three();
console.log(obj13.fun_three());
console.log(obj13.fun_three().key1);


interface interface8{
    fun_four():any;
}
interface interface9 extends interface8{
    fun_five():any;
}
abstract class class_four{
    fun_four():any{
        return "hello_3"
    }
    fun_five():any{
        return "hello_4";
    }
    abstract fun_six():any;
}
class class_five extends class_four{
    fun_six():any{
        return "hello_5";
    }
}
let obj14:class_five=new class_five();
console.log(obj14.fun_four(),obj14.fun_five(),obj14.fun_six());