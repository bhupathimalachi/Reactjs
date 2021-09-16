console.log("\n first program \n");
var sub1 = "ReactJS";
var sub2 = "NodeJS";
var sub3 = "MongoDB";
var mernstack = " \nMEARN STACK DEVELOPMENT MEANS\n******************************\nFRONT-END====> " + sub1 + "\nBACK-END=====> " + sub2 + "\nDATABASE=====> " + sub3 + "\n******************************* ";
console.log(mernstack);
console.log("\n second program \n");
var numberData = 100;
console.log(numberData); //100
var booleanData = true;
console.log(booleanData); //true
var globalData = "welcome to global datatype";
console.log(globalData); //welcome to global datatype
var numArray1 = [10, 20, 30, 40, 50];
console.log(numArray1); //[ 10, 20, 30, 40, 50 ]
var numArray2 = [60, 70, 80, 90, 100];
console.log(numArray2); //[ 60, 70, 80, 90, 100 ]
var strArr1 = ["hello_1", "hello_2", "hello_3", "hello_4"];
console.log(strArr1); //[ 'hello_1', 'hello_2', 'hello_3', 'hello_4' ]
var strArr2 = ["welcome_1", "welcome_2", "welcome_3", "welcome_4"];
console.log(strArr2); //[ 'welcome_1', 'welcome_2', 'welcome_3', 'welcome_4' ]
strArr1.forEach(function (element, index) {
    console.log(strArr1, strArr2); //[ 'hello_1', 'hello_2', 'hello_3', 'hello_4' ] [ 'welcome_1', 'welcome_2', 'welcome_3', 'welcome_4' ]
});
var booarr1 = [true, false, true, true, false];
console.log(booarr1); //[ true, false, true, true, false ]
var booarr2 = [false, true, false, false, true];
console.log(booarr2); //[ false, true, false, false, true ]
var anyarray1 = ["welcome", 100, true];
console.log(anyarray1); //[ 'welcome', 100, true ]
var obj1 = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": "value4"
};
console.log(obj1);
var product = [
    { "pid": 1001, "pname": "lux", "pcost": 5000 },
    { "pid": 1002, "pname": "santoor", "pcost": 10000 },
    { "pid": 1003, "pname": "rexona", "pcost": 20000 },
    { "pid": 1005, "pname": "lifeboy", "pcost": 30000 }
];
for (var key in product) {
    console.log(product[key]());
}
;
