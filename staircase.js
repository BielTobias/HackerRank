function staircase(n) {
    let space = '';
    let hash = '#';
    let position = n-1;
    
    for(let lineI = 0; lineI < n; lineI++){
        for (let columnI = 0; columnI < n; columnI++){
            if(columnI < position){
                space += ' ';
            }
            else{
                space += hash;
            }
        }
        console.log(space);
        space = '';
        position --;

    }

}