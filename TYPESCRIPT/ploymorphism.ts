//overriding the function
class class17{
    dbfun():any{
        return "mangoDB data soon.......!";
    }
}
class class18  extends class17{
    dbfun():any{
        return "cassandraDB data soon....!";
    }
}
let obj15:class18=new class18();
console.log(obj15.dbfun());



//overloading the function

class class19{
    fun_one(arg1:number,arg2:number):void;
    fun_one(arg1:string,arg2:string):void;
    fun_one(arg1:boolean,arg2:boolean):void;
    fun_one(arg1:string,arg2:number):void;
    fun_one(arg1:any,arg2:any):void{
        console.log(arg1,arg2);
    }
}
let obj16:class19=new class19();
obj16.fun_one(100,100);
obj16.fun_one("bhupathi","malachi");
obj16.fun_one(true,false);
obj16.fun_one("malachi",9640709601);


//interview questions 

enum enum1{const1,const2,const3,const4};
console.log(enum1.const1,enum1.const2,enum1.const3,enum1.const4);


enum holidays{
    vinayaka=1,
    pongal=3,
    diwali=1,
    dusheera=11
}
console.log(holidays.vinayaka,holidays.pongal,holidays.diwali,holidays.dusheera);

enum enum2{
    const5=10,
    const6,
    const7,
    const8
}
console.log(enum2.const5,enum2.const6,enum2.const7,enum2.const8);

enum enum3{
    const9
}
function fun_seven():enum3{return 14}
console.log(fun_seven());


enum enum4{
    const10=100,
    const11,
    const12,
    const13,
}
function fun_eight(arg1:enum4,arg2:enum4,arg3:enum4,arg4:enum4):void{
    console.log(arg1,arg2,arg3,arg4);
}
fun_eight(enum4.const10,enum4.const11,enum4.const12,enum4.const13);



enum enum5{
    str1="hello_1",
    str2="hello_2",
    str3="hello_3",
    str4="hello_4",
}
console.log(enum5.str1,enum5.str2,enum5.str3,enum5.str4);



enum enum6{
    str5="hello_5",
    str6=100,
    str7="hello_6",
    str8=200,
}
console.log(enum6.str5,enum6.str6,enum6.str7,enum6.str8);



//union
let var_one:string|number|boolean;
var_one="hello_7";
var_one=100;
var_one=true;
console.log(var_one);


//new type datatype keyword
 type var1=string;
 let msg:var1="welcome to type keyword in typescript ";
 console.log(msg);


 type var2 = string|number|boolean;
 let msg2:var2="hello";
 console.log(msg2);
 msg2=1000;
 console.log(msg2);
 msg2=true;
 console.log(msg2);

/*
    function   fun_one(msg3:string):never{
        throw new Error(msg);
        
    }fun_one("hello");
*/

 function fun_two():any{
     while(true){
         console.log("hello");
     }
 }
fun_two();


