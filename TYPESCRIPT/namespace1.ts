namespace namespace1{   
     export let var_one:string="hello_1";
}


namespace namespace2{
    export let var_two:string="reactjs";
    export let var_three:string="nodejs";
    export let var_four:string="mongodb";
}


namespace namespace3{
    export let obj:any={
        key1:funone(),
        key2:funtwo(),
        key3:funthree()
    }
    function funone(){
        return "hello_2";
    }
    function funtwo(){
        return "hello_3";
    }
    function funthree(){
        return "hello_4";
    }
}


namespace namespace4{
    export function funfour():any{
        return {
            "key1":"hello_5",
            "key2":"hello_6",
            "key3":"hello_7"
        }
    
    }
}


namespace namespace5{
    export class classone{
        constructor(public arg1:any,
            public arg2:any,
            public arg3:any){

            }
    }
}


namespace namespace6{
    export interface interface1{
        fun_one():any;
        fun_two():any;
        fun_three():any;
    }
}