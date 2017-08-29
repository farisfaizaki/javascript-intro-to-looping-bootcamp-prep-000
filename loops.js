function forLoop(array){
  for(let counter=0;counter<25;counter++){
    if(counter===1){
      array.push("I am 1 strange loop.");
    }else{
      array.push(`I am ${counter} strange loops.`);
    }
  }
  return array;
}

function whileLoop(counter){
  while(counter>0){
    console.log(counter);
    counter--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  do{
    array.pop();
    return array;
  }while(array.length>0 && maybeTrue());
}
