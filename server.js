const http = require('http'); // ca importe le package http

const server = http.createServer((req, res) => { // req = request , res = response 
    res.end('Voilà la réponse du serveur Fenitra!'); // end() return response de type string
});

server.listen(process.env.PORT || 3000); // configuration du server pour qu'il écoute