export let varone:string="hello_1";


//let vartwo:string="hello_2";
//export default vartwo;


export let varthree:string="hello_3";
export let varfour:string="hello_4";
export let varfive:string="hello_5";





export function fun_one():any{
    return {"key1":"hello_6"};
}


export  function fun_two():any{
    return {"key2":"hello_7"}
}



export function fun_three():any{
    return {"key3":"hello_8"};
}
export function fun_four():any{
    return {"key4":"hello_9"}
}
export function fun_five():any{
    return {"key5":"hello_10"}
}




export class classone{
    constructor(public arg1:any,
                public arg2:any,
                public arg3:any){}
}



interface interface1{
    sub1:string;
    sub2:string;
    sub3:string;
}

export default interface1;
