// short-sircuit

//false
//0
//''
//null
//undefined
//NaN

let nombre = 'JHOER';

let userName = nombre || 'loco';

console.log(userName);

function fn1 (){
    console.log('soy funcion uno')
    return false;
}


function fn2 (){
    console.log('soy funcion 2')
    return true;
}

let x = fn1() && fn2();
