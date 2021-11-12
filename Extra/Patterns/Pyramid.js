export default function pyramidPattern(type, size){
    
    let pyramid = '';

    if(type == 'halfPyramid'){
        for (let row = 1; row <= size; row++){
            for(let col = 1; col <= row; col++){
                pyramid += col+' ';
            }
            pyramid += '\n';
        }
        console.log(pyramid);
    }

    pyramid = '';

    if(type == 'fullPyramid'){
        if(size % 2 == 1){
            for (let row = 1; row <= size; row++) {
                for (let col = 1; col <= size - row; col++) {
                    pyramid += "  ";
                 }
                let m = row;
                let r = 2*row-2;
                for (let k = 1; k <= 2 * row - 1; k++) {
                    if(k <= row){
                        pyramid += `${m} `;
                        m += 1;
                    }else{
                        pyramid += `${r} `;
                        r = r-1;
                    }
                }
                pyramid += "\n";
            }
            console.log(pyramid);
        }else{
            console.log("Please enter odd size");
        }   
    }

    pyramid = '';

    if(type == 'diffPyramid'){
        for (let row = 1; row <= size; row++){
            for (let col = 1; col <= size + 4 - row; col++) {
              process.stdout.write("*");
            }
            for (let star = 0; star <  row ; star++) {
              process.stdout.write(row+"*");
            }
            for(let col = 1; col <= size + 3 - row; col++){
                process.stdout.write("*");
            }
            process.stdout.write("\n");
        }
    }
    
}
