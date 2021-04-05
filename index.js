const Matematicas = require ('./Operações-Matemáticas');

//Para ver o que é que estou realmente chamando! (SPOILER: É um objeto com os exports que fiz no arquivo 'Operações-Matemáticas')
console.log(Matematicas);

//Exemplos de chamadas de funções
console.log (Matematicas.SOMAR(10,4));
console.log (Matematicas.RESTAR(10,4));
console.log (Matematicas.MULTIPLICAR(10,4));
console.log (Matematicas.DIVIDIR(10,4));
// console.log (Matematicas.DIVIDIR(10,0));

