console.log("\n first program \n");
let sub1:string="ReactJS";
let sub2:string="NodeJS";
let sub3:string="MongoDB";
let mernstack:string=` 
MEARN STACK DEVELOPMENT MEANS
******************************
FRONT-END====> ${sub1}
BACK-END=====> ${sub2}
DATABASE=====> ${sub3}
******************************* `
console.log(mernstack);

console.log("\n second program \n");
let numberData:number=100;
console.log(numberData);    //100

let booleanData:boolean=true;
console.log(booleanData);   //true

let globalData:any="welcome to global datatype";
console.log(globalData);    //welcome to global datatype

let numArray1:Array<number>=[10,20,30,40,50];
console.log(numArray1);     //[ 10, 20, 30, 40, 50 ]

let numArray2:number[]=[60,70,80,90,100];
console.log(numArray2);     //[ 60, 70, 80, 90, 100 ]

let strArr1:string[]=["hello_1","hello_2","hello_3","hello_4"];
console.log(strArr1);           //[ 'hello_1', 'hello_2', 'hello_3', 'hello_4' ]

let strArr2:Array<string>=["welcome_1","welcome_2","welcome_3","welcome_4"];
console.log(strArr2);           //[ 'welcome_1', 'welcome_2', 'welcome_3', 'welcome_4' ]

strArr1. forEach((element:string,index:number)=>{
    console.log(strArr1,strArr2)    //[ 'hello_1', 'hello_2', 'hello_3', 'hello_4' ] [ 'welcome_1', 'welcome_2', 'welcome_3', 'welcome_4' ]
});

let booarr1:Array<boolean>=[true,false,true,true,false];
console.log(booarr1);       //[ true, false, true, true, false ]

let booarr2:boolean[]=[false,true,false,false,true];
console.log(booarr2);       //[ false, true, false, false, true ]

let anyarray1:Array<any>=["welcome",100,true];
console.log(anyarray1);         //[ 'welcome', 100, true ]

let obj1:any={
    "key1":"value1",
    "key2":"value2",
    "key3":"value3",
    "key4":"value4"
}
console.log(obj1);

let product:Array<any>=[
    {"pid":1001,"pname":"lux","pcost":5000},
    {"pid":1002,"pname":"santoor","pcost":10000},
    {"pid":1003,"pname":"rexona","pcost":20000},
    {"pid":1005,"pname":"lifeboy","pcost":30000}
];
for(let key in product){
    console.log(product[key])
};
