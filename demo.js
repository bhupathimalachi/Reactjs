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



 let fun_one=()=>console.log("hello");
    fun_one();



//array concept

let arr=[10,20,30,40,50,60];
console.log(arr[0]);
console.log(arr[0],arr[1],arr[2]);
console.log(arr[-1]);
console.log(arr[6]);
console.log(arr.length);
arr.length=3;// to display first three elements
console.log(arr);
console.log(arr[0]);
console.log(arr[4],arr[5]);// result is undefined undefined
console.log(arr[1],arr[2],arr[4],arr[5]);
arr.push(40);// to add the element at end of an array
console.log(arr);
arr.unshift(5);//to add the element at First an array
console.log(arr);
arr.push(50,60,70,80,90,100);//to add the elements at end of an array
console.log(arr);
arr.pop();//to delete the elements at end of an array
console.log(arr);
arr.shift();// to delete the elements at first of an array
console.log(arr);
arr.splice(5,3);//this function is used to delete 
                //where we want to delete of an array will give index and number of elements to delete 
console.log(arr);
arr.splice(3,1);//this line tells that i have to delete 3 index and that element to delete(only element to delete)
console.log(arr);
arr.splice(1,1);// i want to delete 20 index is 1 and only that element to delete 
console.log(arr);

arr.splice(1,0,200);//inseting th element at index 1 ,0 indicate nothing deleting,adding 200 number
console.log(arr);

arr.splice(2,1,300,400);//delete and inserting the elements , insertin at 2 indes, deleteing that index and adding another number along with the number
console.log(arr);

arr.splice(5,0,600,700,800);
console.log(arr);
arr.splice(9,0,1000);
console.log(arr);


//find index function 
console.log(
    arr.findIndex((element,index)=>{
        return element==10
    })
);



console.log(arr.findIndex((element,index)=>{
    return element==50;
})
);



console.log(
    arr.findIndex((element,index)=>{
        return element===90;
    })
);



console.log(
    arr.findIndex((element,index)=>{
        return element==700;
    })

);

//how do get the index  dynamically


arr.splice(
        arr.findIndex((element,index)=>{
            return element===600;
        }),1   
);
console.log(arr);

arr.splice(arr.findIndex((element,index)=>{
    return element===700;
}),1);
console.log(arr);


arr.splice(arr.findIndex((element,indes)=>{
    return element===800;
}),2);
console.log(arr);

//spread operator(...)
let arr1=[600,700,800,900]
let arr2=[...arr,...arr1]//spread operatio is used to combine the numbers of arrays in single array
console.log(arr2);


let str1="welcome"
console.log(Array.from(str1));//converts the string into an array
console.log(Array.from(str1).reverse());// to reverse the array string
console.log(Array.from(str1).reverse().join(""));//converts the array into string
console.log(Array.from(str1).join("  "));











