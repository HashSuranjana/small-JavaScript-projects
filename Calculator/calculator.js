let operation ;
let value_1;

function fn0(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 0 ;

}

function fn1(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 1 ;
}

function fn2(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 2 ;
}

function fn3(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 3 ;
}

function fn4(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 4 ;
}

function fn5(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 5 ;
}

function fn6(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 6 ;
}

function fn7(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 7 ;
}

function fn8(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 8 ;
}

function fn9(){
    let value = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = value + 9 ;
}


function fnAD(){
    value_1 = document.getElementById('screen').innerHTML ;
    document.getElementById('screen').innerHTML = 0 ;
    operation = "add";
}

function fnSB(){
    value_1 = document.getElementById('screen').innerHTML ;
    document.getElementById('screen').innerHTML = 0 ;
    operation = "subs";
}

function fnMP(){
    let value_1 = document.getElementById('screen').innerHTML ;
    document.getElementById('screen').innerHTML = 0 ;
    operation = "multiply";
}

function fnDV(){
    let value_1 = document.getElementById('screen').innerHTML ;
    document.getElementById('screen').innerHTML = 0 ;
    operation = "divide";
}

function fnC(){
    let value = document.getElementById('screen').innerHTML;
    let delvalue = value.slice(0 , -1);      // deleting a number from the end
    document.getElementById('screen').innerHTML = delvalue ;
}

function fnEQ(){
    let value_2 = document.getElementById('screen').innerHTML;

    if (operation == "add"){
        document.getElementById('screen').innerHTML = parseFloat(value_1) + parseFloat(value_2);
    }
}



