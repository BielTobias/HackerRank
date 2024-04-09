function breakingRecords(scores) {
    let compare = 0;
    let max = scores[0];
    let min = scores[0];
    let breakmax = 0;
    let breakmin = 0;
    for(let i = 0; i < scores.length; i++){
        compare = scores[i]
        if(max > compare){
            max = compare
            breakmax++;
        }
        else if(min < compare){
            min = compare
            breakmin++;
        }
    }
    return [breakmin, breakmax];
}