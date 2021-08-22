console.log(typeof("welcome to javascript"));
console.log(typeof(100));
console.log(typeof 20n);// any number with sufix with n is called bigint(to store the bulk data)
console.log(typeof undefined);
console.log(typeof null);// null is not datatype it is object
console.log(typeof []);// size of an array is also a object
console.log(typeof 23.5);
console.log(typeof Symbol(100));//symbol  to provide a security for that number




var sub="reactjs";
var wish=`welcome to ${sub}`;
console.log(wish);
/* */

var tbl_name="employess";
var sal=50000;
var sql_query=`select * from ${tbl_name} where sal > ${sal}`;
console.log(sql_query);


