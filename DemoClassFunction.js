// examples on constructor
/* 
    class: class is a collection of datamembers (variables) member function 
    before "ES6" version  contians CONSTRUCT FUNCTION 
    in constructor function all the members (data members and member function) will start with "this" keyword"
    we can create obhect to the class by using "new" keyword*/
console.log("\n first program");
    function class_one(){
        this.sub_one="reactJs";
        this.sub_two="nodeJs";
        this.sub_three="MonogoDB";
    }
    
    let  obj=new class_one();
    console.log(obj.sub_one,obj.sub_two,obj.sub_three);
    let obj2=new class_one();
    console.log(obj.sub_one+ "  <====>  "+obj.sub_two+"  <====>  "+obj.sub_three);



console.log("\n second program")
    function class_two(){
    this.sub_one="reactjs";
    this.getsub=function(){
        //return this.sub_one;
        return `welcome to ${this.sub_one}`;
    }
}
let obj3=new class_two();
console.log(obj3.getsub());

console.log("\n third program")
function class_three(arg1,arg2,arg3){
    this.var1=arg1;
    this.var2=arg2;
    this.var3=arg3;
}
let obj4=new class_three("reactjs","nodejs","mongodb");
console.log(obj4.var1+"\n"+obj4.var2+"\n"+obj4.var3);

console.log("\n fourth program");
/*for the class one want to add the members dynamically we use prototype */
function class_four(){
    class_four.prototype.var1="hello"
    class_four.prototype.var2="welcome"
}
let obj5=new class_four();
console.log(obj5.var1,obj5.var2);

console.log("\n fourth program");
/*for the class and function  want to add the members  dynamically we use prototype */
function class_five(){
    class_five.prototype.var1="reactjs";
    class_five.prototype.fun_one=function(){
        return "second part is reactJs with TSX"
    }
}
let obj6=new class_five();
console.log(obj6.var1+", "+obj6.fun_one());

console.log("\n fifth program");
function class_six(){

}
class_six.prototype.var4="hello_1";
function class_seven(){

}
class_seven.prototype=Object.create(class_six.prototype);// it is a inheritance consept
// the above line indacate "class_six"  is a base class and "class_seven" is subclass 
class_seven.prototype.var5="hello_2"
let obj7=new class_seven();
console.log(obj7.var4+" <--> "+obj7.var5)


console.log("\n sixth program");
function class_eight(){

}
class_eight.prototype.var6="parent_class"
function class_nine(){

}
class_nine.prototype=Object.create(class_eight.prototype);
class_nine.prototype.var7="child_class"
function class_ten(){

}
class_ten.prototype=Object.create(class_nine.prototype);
class_ten.prototype.var8="subchild_class"

let p=new class_eight();
console.log(p.var6);

let c=new class_nine();
console.log(c.var6+" <== "+c.var7);

let sc=new class_ten();
console.log(sc.var6+" <== "+sc.var7+" <== "+sc.var8);


console.log("\n seventh program");
 
function class_eleven(){

}
class_eleven.prototype.fun_two=function(){
    return "parent class function"
}
function class_tweleve(){

}
class_tweleve.prototype=Object.create(class_eleven.prototype);
class_tweleve.prototype.fun_three=function(){
    return "sub class function"
}
function class_thirteen(){

}
class_thirteen.prototype=Object.create(class_tweleve.prototype);
class_thirteen.prototype.fun_four=function(){
    return "sub child class function";
}

let pcf=new class_eleven();
console.log(pcf.fun_two())

let scf=new class_tweleve();
console.log(scf.fun_two()+" <== "+scf.fun_three())

let sccf=new class_thirteen();
console.log(sccf.fun_two()+" <== "+sccf.fun_three()+" <== "+sccf.fun_four());



console.log("\n eighth  program");
function parent(){

}
parent.prototype.dbfun=function(){
    return "data form mogoDB somm.....!"
}    
function child(){

}
child.prototype=Object.create(parent.prototype);
child.prototype.dbfun=function(){
    return "data from cassandraDB soon.....!"
}
let scor =new child();
//overriding the parent functionlality with the child functionlaity is called overieiding
console.log(scor.dbfun());



/* from ES6  version  we have used class keyword
    before Es6 version we have used construct  function */
    console.log("\n nineth  program");
class class_fourteen{
    fun_five(){
        return "hello_1"
    }
    fun_six(){
        return "hello_2"
    }
    fun_seven(){
        return "hello_3"
    }

};
let obj8=new class_fourteen();
console.log(obj8.fun_five()+" <== "+obj8.fun_six()+" <== "+obj8.fun_seven());


console.log("\n tenth  program");
class class_fifteen{
     var9;
     constructor(){
         this.var9="hello"
     }
}
let obj9=new class_fifteen();
console.log(obj9.var9);
