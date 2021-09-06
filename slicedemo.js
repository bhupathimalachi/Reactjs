console.log("*** first program  slice function***");
let arr=[10,20,30,40,50,60,70,80,90,100];
console.log(arr);
console.log(arr.slice(4,9));
console.log("index 4 is included index 9 is excluded")
console.log(arr.slice(7,9));
console.log("index 7 is included index 9 is excluded")
console.log(arr.slice(0,2));
console.log(arr.slice(9));
console.log(arr.slice(4,5));
console.log(arr.slice(8));
console.log("reverse of an array")
console.log(arr.slice(-3,-1));
console.log(arr.slice(5,10),arr.slice(0,5));
console.log("combine the two lices")
console.log(...arr.slice(5,10),...arr.slice(0,5));
console.log("prints length of the array")
console.log(arr.length);

console.log(" \n ***second program map and filter function***")
let arr1=[1,2,3,4,5]
console.log(arr1.map((element,index)=>{return element *100}));
console.log(arr1.map((element,indes)=>{return element*4}));
console.log(arr1.map((element,index)=>{return element*5}));
console.log("map is used to manipulate the each and every element in an array");
console.log(arr1.filter((element,index)=>{return element>=3}));

console.log("\n ***third program map and fillter***")
let arr2=[1,2,3,4,5,6,7,8,9,10]
console.log(arr2.map((element,index)=>{return element*100}).filter((element,index)=>{return element>=500}));
console.log("fillter:- fillter is used to apply the condition ");
console.log(arr2.map((element,index)=>{return element*10}).filter((element,index)=>{return element>70}));


console.log("\n ***** fourth program reduce,map,filter function*****")
console.log("reduce:is used to summation of an array")
let arr3=[1,2,3,4,5,6,7,8,9,10];
console.log(arr3.reduce((accumilator,nextvalue)=>{return accumilator+nextvalue}));
console.log(arr3.map((element,index)=>{return element*100}).reduce((accumilator,nextvalue)=>{return accumilator+nextvalue}));
console.log(arr3.filter((element,index)=>{return element<=5 }).reduce((accumilator,nextvalue)=>{return accumilator+nextvalue}));
console.log(arr3.filter((element,index)=>{return element>5}).reduceRight((accumilator,nextvalue)=>{return accumilator+nextvalue}));



console.log(" \n ");
console.log("**** fifth program  reduceRight function****")
let arr4=["mongoDB","NodeJS","ReactJS"]
console.log(arr4.reduceRight((accumilator,nextvalue)=>{return accumilator+" <===> "+nextvalue}));
arr4.push("AngularJS");
console.log(arr4);
console.log(arr4.reduceRight((accumilator,nextvalue)=>{return accumilator+"<====>"+nextvalue}));



console.log("\n **** sixth prigram sort function****")
let arr5=[100,50,40,30,20,70,90,10,60,80]
console.log(arr5.sort((number1,number2)=>{return number1-number2;}));//assending order
console.log(arr5.filter((element,index)=>{return element>=50}).sort((num1,num2)=>{return num2-num1}));//decending order


console.log("\n **** seventh program sort function in string array ****")
let s1=" hello " ;
console.log(s1.length);// display length of the string
console.log(s1.trim().length);//remove the white space
console.log(s1.trimStart().length);//remove the white space at starting point
console.log(s1.trimEnd().length);//remove the white space at end point
console.log(s1.padStart(10,"*"));// it print the stars at starting point insted of white space
                                    //10 declares total number of caharacter 
console.log(s1.padEnd(10,"*"));
console.log(Array.from(s1));
console.log(Array.from(s1).reverse());
console.log(Array.from(s1).reverse().toString());
console.log(Array.from(s1).reverse().toString().replace("h","hi"));
