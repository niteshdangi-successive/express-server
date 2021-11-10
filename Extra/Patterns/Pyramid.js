

function pyramidPattern(type, rows){
    
    let str = '';
    if(type == 'Half-Pyramid'){
        for (let i = 1; i <= rows; i++){
            for(let j = 1; j <= i; j++){
                str += j+' ';
            }
            str += '\n';
        }
        console.log(str);
    }

    str = '';

    if(type == 'Full-Pyramid'){
        if(rows % 2 == 1){
            for (let i = 1; i <= rows; i++) {
                for (let j = 1; j <= rows - i; j++) {
                    str += "  ";
                 }
                let m = i;
                let r = 2*i-2;
                for (let k = 1; k <= 2 * i - 1; k++) {
                    if(k<=i){
                        str += `${m} `;
                        m+=1;
                    }
                    else{
                        str += `${r} `;
                        r = r-1;
                    }
                }
                str += "\n";
            }
            console.log(str);
        }else{
            console.log("Please enter odd rows");
        }
        
    }


    str = '';

    if(type == 'Diff-Pyramid'){
        for (let i = 1; i <= rows; i++){
            for (let j = 1; j <= rows + 4 - i; j++) {
              process.stdout.write("*");
            }
            for (let k = 0; k <  i ; k++) {
              process.stdout.write(i+"*");
            }
            for(let j = 1; j <= rows + 3 - i; j++){
                process.stdout.write("*");
            }
            process.stdout.write("\n");
        }
    }
    
}

// pyramidPattern('Half-Pyramid', 5);
// pyramidPattern('Full-Pyramid', 5);
pyramidPattern('Diff-Pyramid', 5);

