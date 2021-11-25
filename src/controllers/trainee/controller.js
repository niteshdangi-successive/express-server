export class traineeController{

    constructor(){}

    trainee_get_route = function(req,res){
        res.send('This is get response');
    };

    trainee_post_route = function(req,res){
        res.send('This is post response');
    };

    trainee_put_route = function(req,res){
        res.send('This is put response');
    };

    trainee_delete_route = function(req,res){
        res.send('This is delete response');
    };
}