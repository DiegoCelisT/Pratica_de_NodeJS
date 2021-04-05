//MÓDULO FILE SYSTEM (Permite interatuar com os arquivos do Sistema Operativo)
const fs = require('fs');

//Criar um novo arquivo:
fs.writeFile ('./Meu-novo-arquivo-usando-NodeJS.txt', 'Este é um arquivo criado por Dieguito Maradona', function (ERROR){
    if (ERROR){
        console.log ('Che, temos um ERRO: ', ERROR);
    } else {
        console.log ('Arquivo criado!')
    }
})

//o último parâmetro é um callback (uma função que se executa quando o processo termina, para ver se tudo foi OK ou temos um erro)
//Esse tipo de código é chamado como "Código Assíncrono" ...essa a razão de ser de NodeJS, pois não é ele quem vai criar o arquivo, ele simplesmente leva a tarefa para que alguém mais faça, neste caso o arquivo vai ser criado pelo Sistema e nunca pelo NodeJS, acontece o mesmo com as BD, etc.

//Perceber a diferença de ter criado uma constante e guardar nela o código e função:
//const Resultado = fs.writeFile ('./adsasd', '345345', function ...
//Daquela maneira primeiro se fazem as coisas e depois se guarda, em ordem, para depois continuar com o código abaixo (Código Síncrono)


//Ler um arquivo:
fs.readFile ('./Meu-novo-arquivo-usando-NodeJS.txt', function (err, data){
    if (err){
        console.log ("O erro foi o seguinte: ", err);
    }
    console.log(data.toString()); //Método para convertir os dados a String legível
})


console.log ('Última linha de código') // Seguindo aquele raciocio de código assincrono, primeiro vamos ver esta linha e depois a do arquivo criado!


//TEMOS ENTÃO QUE:
//NodeJS não é mais do que um DELEGADOR DE TAREFAS, ele envia para que outros façam e fica esperando o resultado 