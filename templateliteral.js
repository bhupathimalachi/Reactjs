//data type 
console.log(typeof("welcome to javascript"));
console.log(typeof(100));
console.log(typeof 20n);// any number with sufix with n is called bigint(to store the bulk data)
console.log(typeof undefined);
console.log(typeof null);// null is not datatype it is object
console.log(typeof []);// size of an array is also a object
console.log(typeof 23.5);
console.log(typeof Symbol(100));//symbol  to provide a security for that number



//templet litterals anf variables
var sub="reactjs";
var wish=`welcome to ${sub}`;
console.log(wish);


var tbl_name="employess";
var sal=50000;
var sql_query=`select * from ${tbl_name} where sal > ${sal}`;
console.log(sql_query);

var usernaem="bhupathi";
var upwd="malachi"
var login_query=`select * from ${tbl_name} where usernaem="${usernaem}" and upwd="${upwd}`;
console.log(login_query);


var sub_one="react js";
var sub_two="node js";
var sub_three="magoDB";
var mearn=`
           MERN stact Development
           **********************
           front end ==>${sub_one}
           back end  ==>${sub_two}
           data base ==>${sub_three}`;
console.log(mearn);// templet litterial is called as backtrick 

//undefined and null

var x;
console.log(x);

x= null;
console.log(x);


console.log(undefined==undefined);//1 have work and 2  have work  ans true
console.log(undefined===undefined);//1 person and  work have 2 person and work have 
console.log(null==null);//1 no work 2 no work
console.log(null===null);// 1 no person and work 2 no person and work
// ****** important interview question
console.log(undefined==null);//1 no work 2 no work
console.log(undefined===null); //1 person have but no work 2 no work and no person


//boolean data types

true ? console.log("hello"):console.log("hi");

0 ? console.log("hello"): console.log("hi");

false ? console.log("hello"): console.log("hi");


// ***  interview question

if(undefined)  // it execute the false statement because no variable and no value 
{
    console.log("hellow")
}
else
{
    console.log("hi");
}



var v1=10;
if(v1)
    console.log("hello");
else    
    console.log("hi");


var v2;
if(v2)
    console.log("hello");
else    
    console.log("hi");

if (v2== undefined)
    console.log("hello 1")
else
    console.log("hii 1")


if(00)
    console.log("hello 2")
else    
    console.log("hii 2")


if(100)
    console.log("hello 3")
else    
    console.log("hii 3")



console.log(true+true);//2
console.log(true>true);//false
console.log(false<=false);//true
console.log(true+true+10);//12
console.log(true + "1"); //true1
console.log(true + + "10");//11
console.log(true - "1" -"0" - "2");//-2
console.log((true * true + false) / true);//1



for(var i=0;i<5;i++)
    console.log(i)

 for(var i=0;i<5;i++)
 { 

 }
 console.log(i); /* basiclly it is wriong but we got answer
  but we wan an error  insted of var we have to use let */

for(let z=0;z<5;z++)
 { 
    console.log(z);
 }
 


for(let x=0;x<5;x++)
 { 
    console.log(x);
 }
 
//var keyword breaks the scope rule
//let keyword obeys the scope rule

var z1=100
 {
     var z1=200;
 }
console.log(z1);
 
// effecting global members effected because of code called as global poluting
// global polluting issues raised because of var keyword
//we can overcome global polluting issue by using  "let " keyword
let z2=100
 {
     let z2=200;
 }
console.log(z1);


var y=300
var y=400
console.log(y);// it is a bug
            // var can acceptin the duplicate values according to program it can not accept

let y1=300
let y2=400
console.log(y1);//getting syntax error
// var keywords allows the drulicate varable
// let keywords not allows the duplicate variables


//function concept
function fun_one(){
    return "hello"
}
 console.log(fun_one);// calling only function defination
 console.log(fun_one());// calling value form function


 function fun_two(){
     return(fun_three);
 };
 function fun_three(){
     return "this is function three";
 };
    console.log(fun_two);// calling only function fun-two defination
    console.log(fun_two());// calling only function fun_three defination
    console.log(fun_two()());// get out of the fun_three

//in array
function fun_four(){
    return "isaacraj"
}
let arr=[];
for(let i=0;i<5;i++){
       arr.push(fun_four())
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}