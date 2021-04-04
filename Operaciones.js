function SUMAR (X, Y){
    return (X+Y);
}

function RESTAR (X,Y){
    return (X-Y);
}

function MULTIPLICAR (X,Y){
    return (X*Y);
}

function DIVIDIR (X,Y){
    if (Y==0){
        console.log("No se puede dividir por cero!!!");
    } else{
    return (X/Y);
    }
}

console.log (DIVIDIR(11,-4));