import { varone } from "./module1";
console.log(varone);

//import vartwo from "./module1";
//console.log(vartwo);


import { varthree,varfour,varfive } from "./module1";
console.log(varthree,varfour,varfive);

import * as myvar from "./module1";
console.log(myvar.varthree,myvar.varfour,myvar.varfive);



import { fun_one } from "./module1";
console.log(fun_one());
console.log(fun_one().key1)


import { fun_two } from "./module1";
console.log(fun_two());
console.log(fun_two().key2);



import { fun_three,fun_four,fun_five } from "./module1";
console.log(fun_three(),fun_four(),fun_five());

import * as myfun from "./module1";
console.log(myfun.fun_three(),myfun.fun_four(),myfun.fun_five());








import { classone } from "./module1";
let obj:classone=new classone("hello_11","hello_12","hello_13");
console.log(obj.arg1,obj.arg2,obj.arg3);











import interface1 from "./module1";
let obj2:interface1={
    "sub1":"reactjs",
    "sub2":"nodejs",
    "sub3":"mongodb"
};
export default obj2;


