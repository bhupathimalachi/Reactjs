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


var tbl_name="employess";
var sal=50000;
var sql_query=`select * from ${tbl_name} where sal > ${sal}`;
console.log(sql_query);

var usernaem="bhupathi";
var upwd="malachi"
var login_query=`select * from ${tbl_name} where usernaem="${usernaem}" and upwd="${upwd}`;
console.log(login_query);


var sub_one="react js";
var sub_two="node js";
var sub_three="magoDB";
var mearn=`
           MERN stact Development
           **********************
           front end ==>${sub_one}
           back end  ==>${sub_two}
           data base ==>${sub_three}`;
console.log(mearn);// templet litterial is called as backtrick 







