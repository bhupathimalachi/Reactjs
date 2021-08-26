/*HOW TO REPRESENT THE OBJECT IN JSON
------------------------------------
WE CAN REPRESENT THE OBJECT WITH THE HELP OF "{ }"
WE CAN REPRESENT THE ARRAYS WITH THE HELP OF "[]"
WE CAN REPRESENT THE DATA WITH THE HELP OF "KEY & VALUES" PAIRS
KEY & VALUES SEPERATED WITH " : "
KEY & VALUES PAIRS SEPARATED BY USING " , " */

let obj={
    "sub_one":"Reactjs",
    "sub_two":"Nodejs",
    "sub_three":"mongoDB"
};
console.log(obj.sub_one,
    obj.sub_two,
    obj.sub_three);

let obj1={
    "front_end":"Reactjs",
    "back_end":"nodejs",
    "database":"Mongodb"
};
console.log(obj1.front_end,obj1.back_end,obj1.database);


let obj2={
    "frontend":{"sub" :"Reactjs"   },
    "backend":{"sub":"Nodejs"},
    "database":{"sub":"mongodb"}
};
console.log(obj2.frontend.sub,
    obj2.backend.sub,
    obj2.database.sub);

for(let key in obj1){
    console.log(key);// we can itterative the oject we can use for in  it is in es6
                    //display only keys
}

for(let key in obj1){
    console.log(obj1[key]);//to display the values of a key 
}



let obj3={"subone":"reactjs"}
let obj4={"subtwo":"nodejs"}
let obj5={ "subthree":"monogdb"}
let obj6={...obj3,...obj4,...obj5}
console.log(obj6);

obj5.key1="malachi" // adding the key and value in the existing object
/* it is also called as deep cloning
    it is called immutability */
console.log(obj5);

obj6.key2="renuka";
console.log(obj6);

delete obj5.key1;
console.log(obj5);

delete obj6.key2;
console.log(obj6);




