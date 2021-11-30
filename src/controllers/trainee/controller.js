export class TraineeController{

    constructor(){}

    traineeGetRoute = function(req,res){
        res.send('This is get response');
    };

    traineePostRoute = function(req,res){
        res.send('successfully passed all validation of post response');
    };

    traineePutRoute = function(req,res){
        res.send('This is put response');
    };

    traineeDeleteRoute = function(req,res){
        res.send('This is delete response');
    };
}