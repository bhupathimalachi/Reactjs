// first example
/*  callback: passing one function t0 another function is called as callback*/ 
function fun_one(){
    
    return "this fun_one is passing into fun_two "
}
function fun_two(arg /* fun_one*/){
    console.log("first example")
    console.log("--------------")
    console.log(arg /* fun_one  here call the fuction fun_one defination*/ );
    console.log(arg());/*fun_one  here call the fuction fun_one  result*/
}
fun_two(fun_one /* this is a fun_one argument passing in to fun_two argument */);


//second example
function mern(arg1,arg2,arg3,arg4){
    console.log("second example");
    console.log("---------------")
    console.log(arg1,arg2,arg3,arg4);//returns the function defination
    console.log(arg1(),arg2(),arg3(),arg4());//returns of the function result
};
mern(
    function frontend(){return "reactjs"},
     function backend(){ return "nodejs"},
     function database(){ return "monogoDB"},
     function general(){return "renuka"});


//not only the named function we can use anonymous function( is also called as arrow function) 
//third Example
let fun_three=(arg5)=>{
    console.log("third Example")
    console.log("--------------")
    return arg5("welcome to third example for anonymous function")
};
fun_three((param)=>{
    console.log(param);
});

//fourth example
let fun_four=(arg)=>{
    return arg("hello_1","hii","welcome","fine")
};
fun_four((param1,param2,param3,param4)=>{
    console.log("fouth porgram")
    console.log("--------------")
    console.log(param1,param2,param3,param4);
});


//fifth example
//callback hell that means one function is depened upon another function is called callback hell
//function have a dependency 
let add=(num,callback)=>{
    return callback(num+5,false);
}
add(5,(addRes)=>{
    console.log(`this is fifth example result`)
    console.log("------------------------------")
    console.log(addRes);
});

//sixth example
let sub=(num1,callback1)=>{
    return callback1((num1-5),false);
}
sub(10,(subres,error)=>{
    console.log("six example result")
    console.log("--------------------")
    if(!error){
        console.log(subres);
    }
    else{
        console.log(error);
    }
    
});

//seventh example
let add1=(num1,callback)=>{
    return callback(num1+10,false);
}
let sub1=(num1,callback)=>{
    return callback((num1-5),false);
}
let div=(num1,callback)=>{
    return callback(num1/3,false);
}
function mul(num1,callback){
    return callback(num1*2,false)
}
add1(10,(addres,error)=>{
    if(!error){
        console.log("seven example");
        console.log("--------------")
        console.log("this is add function result")
        console.log("-----------------------------")
        console.log(addres);
       sub1(addres,(subres,error)=>{
           if(!error){
            console.log("this is sub function result")
            console.log("-----------------------------")
               console.log(subres);
               div(subres,(divres,error)=>{
                   if(!error){
                    console.log("this is div function result")
                    console.log("----------------------------")
                       console.log(divres);
                       mul(divres,(mulres,error)=>{
                           if(!error){
                            console.log("this is mul function result") 
                            console.log("-----------------------------")
                               console.log(mulres);

                           }
                       })
                   }
               })
           }
       })    
    }
    
})// this is callback hell
//this is a bug 
//this type of program is never write in the realtime projects
//the remedi of this callback function is "promise"
//insted of the above program we have use "promise"



//eighth example

function add2(num2){
    return new Promise((resolve,reject)=>{
        resolve(num2+10)
    });
}
function sub2(num2){
    return new Promise((resolve,reject)=>{
        resolve(num2-5);
    });
}
function multiplication(num2){
    return new Promise((resolve,reject)=>{
        resolve(num2*2);
    });
}
function  division(num2){
    return new Promise((resolve,reject)=>{
        resolve(num2/2);
    });
}
async function cal(){
    let addres = await add2(20);
    let subres= await sub2(addres);
    let mulres= await multiplication(subres);
    let divres= await division(mulres);
    console.log("eighth  example");
    console.log("--------------");
    console.log(addres,subres,mulres,divres);   
}
cal();






