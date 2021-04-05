//MANEIRA ALTERNATIVA: CRIANDO UM OBJETO AO INICIO, INCLUINDO AS PROPIEDADES AO FINAL E EXPORTANDO SÓ O O MÓDULO COM O OBJETO (O RESULTADO É O MESMO)

const MATH = {}

function SOMAR (X, Y){
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
        return console.log("Não é possível dividir por zero!!!");
    } else{
    return (X/Y);
    }
}

//PROPIEDADES DE MEU OBJETO MATH
MATH.SOMAR = SOMAR;
MATH.RESTAR = RESTAR;
MATH.MULTIPLICAR = MULTIPLICAR;
MATH.DIVIDIR = DIVIDIR;

//EXPORTANDO O OBJETO ENTEIRO:
module.exports = MATH; //COM ISSO POSSO EXPORTAT OBJETOS, VARIÁVEIS, FUNÇÕES, ETC



//VERSÃO BÁSICA, FAZENDO EXPORTS DE PROPIEDADES DE OBJETOS:

// function SOMAR (X, Y){
//     return (X+Y);
// }

// function RESTAR (X,Y){
//     return (X-Y);
// }

// function MULTIPLICAR (X,Y){
//     return (X*Y);
// }

// function DIVIDIR (X,Y){
//     if (Y==0){
//         return console.log("Não é possível dividir por zero!!!");
//     } else{
//     return (X/Y);
//     }
// }

//para exportar propiedades de objetos: (SE LIGA...SÓ PARA PROPIEDADES DE OBJETOS. PARA OBJETOS, VARIÁVEIS, FUNÇÕES, ETC SE USA module.exports)
// exports.SOMAR = SOMAR;
// exports.RESTAR = RESTAR;
// exports.MULTIPLICAR = MULTIPLICAR;
// exports.DIVIDIR = DIVIDIR;