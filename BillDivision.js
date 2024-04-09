function bonAppetit(bill, k, b) {
    let soma = 0;
    let dinheiro = 0;
    for(let i = 0; i < bill.length; i++){
        soma += bill[i];
    }
    soma -= bill[k];
    dinheiro = soma/2;
    if(dinheiro == b){
        console.log("Bon Appetit");
    }
    else{
        console.log(b - dinheiro);
    }
}