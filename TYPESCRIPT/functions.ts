console.log("\n first program");
let fun_one=():any=>{
    return "welcome to arrow function"
}
console.log(fun_one());

console.log("\n second program");
let mern=(arg1:string,arg2:string,arg3:string):void=>{
    console.log(arg1,arg2,arg3);
};
mern("reactjs","nodejs","mongodb");
mern("angularjs","nodejs","mongodb");
 
console.log("\n third program");
let fun_two=():any=>{
    return ():any=>{
        return{"key1":"hello_1"};
    };
};
console.log(fun_two()().key1);

console.log("\n fourth program");
let outer=():any=>{
    return ():any=>{
        return ():any=>{
            return {"key":()=>{return "hello"}};
        }
    }
};
console.log(outer()()().key());

console.log("\n fifth program");
let mern1=(arg1:any,arg2:any,arg3:any):any=>{
    console.log(arg1(),arg2(),arg3());
};
mern1(()=>{return "reactjs"},()=>{return "nodejs"},()=>{return "MonogoDB"});


console.log("\n sixth program");
let arr1:any=[];
for(let i:number=0;i<10;i++)
{
    arr1.push(():any=>{return "hello"});
}
for(let i:number=0;i<arr1.length;i++){
    console.log(arr1[i]());
}