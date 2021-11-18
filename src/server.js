require('dotenv').config();
const express = require('express');
const app = express();

export class Server{
    constructor(config){
        app.listen(config);
        this.run();
    }

    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        });
    }
    bootstrap(){
        this.setupRoutes();
    }

    run(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
    }
}
