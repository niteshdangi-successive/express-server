import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import  mainRoutes  from './router';
import Database from './libs/database';

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');

export class Server{
    constructor(config){
        this.run(config);
    }

    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        });
        app.use(mainRoutes);
        app.use(errorHandler);
        app.use(notFound);
    }
    bootstrap(){
        this.initBodyParser();
        this.setupRoutes();
    }

    async run(config){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
        let dbCon = await Database.open(config.mongoUrl);
        if(dbCon){
            app.listen(config.port);
        }
        
    }

    initBodyParser(){
        
        app.use(bodyParser.urlencoded({ extended: true }));
    }

}
