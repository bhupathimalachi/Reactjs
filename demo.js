console.log("welcome to javascript");
console.log(10+10);//20
console.log(20-10);//10
/*** */
console.log(20 - "10");// string data "10 " is automatical converts into numbrs ans:10  ****
console.log(10 +  "10");//concatination the sting for +  ans:1010 ****
console.log(10 + +"10");//adding the two data converts string into number ans=20***
console.log(10 *"10");//mulutipiyng the numers ans=100 ****
console.log(25/ "5");// - * / the arthamatic operators  are automatically converts string in to nunbers****
console.log("10" + 10);
console.log("20" + 30 - 10);// 30 -10 =20 then concat with string 20 we will get ans:2020 ****
/* == is a assignment operator
//it is used to compare the only content(data)
//it compare left side with right side of the value */
console.log(10=="10");
console.log(10==10);
console.log(100 == 10); // 100 is not equall to 10 we have to check only data 
/*  === is also as assignment operator 
it is used to compare the data and datatype*/
console.log(10===10);
console.log(100===10);
/* in above line 100 is not equal to 10  so it is false
same as compare with data type it  true */
console.log(10=="ten")
console.log(10===10);
console.log("ten"==="ten");
console.log("ten"=="ten");


const var1="reactjs"
//var1="node js";   //get eror assignment ot constant varable
console.log(var1);

//in array
const arr_one=[10,20,30,40,50];
arr_one[0]=100
arr_one[4]=500
for (let i=0;i<arr_one.length;i++)
    console.log(arr_one[i]);


    // in json
const json_object= {key1:"react js",
key2:"node js",
key3:"mangodb"
};
json_object.key1="angular js"
json_object.key2="malachi"
    console.log(json_object);


