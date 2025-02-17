//cuale son los numeros pares 

let i = 10;
//se evalua primero la condicion y despues se ejecuta la porcion 
while (i<10){
    //aqui va la logica 
    if(i % 2 == 0){
        console.log('numero par', i)
    }
    
i++;
}

// ejecuta primero la porcion de codigo y luego la condicion 
do{
    if(i % 2 == 0){
        console.log('numeros par', i);
    }
    i++;
} while (i<10);



