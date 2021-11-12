export default function createDimondShape(size){

    console.log("Print a Diamond with Rows ",size);

    for(var row = 1; row <= size; row++){
       for(var space = size-1; space >= row; space--){
          process.stdout.write(" ");
       }
       for(var col = 1; col <= row; col++){
          process.stdout.write("* ")
       }
    }

    if(row == size+1){
       for(var row = 1; row <= size-1; row++){
          for(var space = 1; space <= row; space++){
             process.stdout.write(" ");
          }
          for(var col = row; col <= size-1; col++){
             process.stdout.write("* ");
          }
       }
    }
 }
