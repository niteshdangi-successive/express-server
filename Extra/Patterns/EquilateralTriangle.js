export default function EquilateralTriangle(size){

  console.log("Print a Diamond with Rows ",size);

  for (let row = 1; row <= size; row++){
    for (let col = 1; col <= size - row; col++) {
      process.stdout.write(" ");
    }
    for (let star = 0; star <  row ; star++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }

}
