function birthdayCakeCandles(candles) {
    let heighestCandle = 0;
    let aux = 0;
    
    candles.sort((a,b) => b - a);
    heighestCandle = candles[0];
    
    candles.forEach((candle)=>{
        if(candle == heighestCandle){
            aux++
        }
    })
        return aux;
    }