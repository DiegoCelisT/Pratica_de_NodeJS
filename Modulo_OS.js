//CHAMADA AO MÓDULO PRECONSTRUIDO DE SISTEMA OPERATIVO:
const os = require('os'); //é "costume" usar um nome para a constante igual ao nome do módulo que se chama (não é necessario)


// CHAMADA A MÉTODOS PRECONSTRUIDOS DE SO:

console.log ("Sistema Operativo: ", os.version()) //Returns a string identifying the kernel version.

console.log ("Versão: ", os.release()) //Returns the operating system as a string.

console.log ("Arquitetura: ", os.arch()) //Returns the operating system CPU architecture for which the Node.js binary was compiled

// console.log (os.cpus()) //Returns an array of objects containing information about each logical CPU core.

console.log ("Memoria Total: ", os.totalmem(), 'bytes') //Returns the total amount of system memory in bytes as an integer.

console.log ("Memoria Livre: ", os.freemem(),'bytes') //Returns the free amount of system memory in bytes as an integer.

console.log ("Memoria Total em GB: ", os.totalmem()/(1024*1024*1024))

console.log ("Memoria Livre em GB: ", os.freemem()/(1024*1024*1024))

