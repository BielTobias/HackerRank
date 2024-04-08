function miniMaxSum(arr) {
    let array = arr.sort((a,b)=> a - b);
    let arrmin = array.slice(0, 4).reduce((a,b) => a + b, 0);
    
    let arrmax = array.slice(arr.length -4).reduce((a,b) => a + b, 0); 
    
    console.log(arrmin + " " + arrmax);
}