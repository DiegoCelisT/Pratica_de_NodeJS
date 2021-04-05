const HTTPZINHO = require ('http');
const colors = require ('colors'); //Chamando o módulo colors procurado no npmjs.com e já instalado no meu computador
//com o protocolo http posso receber petições no servidor e enviar respostas desde ele


// req = request
// res = response

//Conteúdo gestor do server:
const handleServer = function (req, res) {
    res.writeHead (200, {'Content-type': 'text/html'}); //Por default o 'Content-type': é 'text/html mas pode variar a text/plain por exemplo
    res.write('<h1>Hola Mundo desde NodeJS</h1>');
    res.end('<h2>batatinha com ketchup</h2>');
}

//Criando o server e trazendo o conteúdo declarado previamente (posso declarar aqui mesmo tudo, mas fiz assim para modificar mais fácil depois e fazer testes com diferentes configurações)
const Meu_server = HTTPZINHO.createServer (handleServer)


//Para visualizar no localserver:#### no porto ####
// Meu_server.listen(4200); 
Meu_server.listen(4200, function (){
    console.log('Server funcionando no porto 4200'.inverse) //Exemplo do módulo colors procurado no npmjs.com (PRIMEIRA MANEIRA)
    console.log(colors.rainbow('Server funcionando no porto 4200')) // SEGUNDA MANEIRA DE USAR o Exemplo do módulo colors procurado no npmjs.com
});