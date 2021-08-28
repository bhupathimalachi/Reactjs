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


let arr1=[1,2,3,4,5]
console.log(arr1.map((element,index)=>{return element *100}));
console.log(arr1.map((element,indes)=>{return element*4}));
console.log(arr1.map((element,index)=>{return element*5}));
console.log("map is used to manipulate the each and every element in an array")



