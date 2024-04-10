function digito(i){
    if(i <= 9){
        return "0" + i
    }
    return "" + i;
}

function ObterDisciplina(){
    let alunos = [];

    for(let i = 0; i <= 25; i++){
        alunos.push(document.querySelector("#span_vACD_DISCIPLINANOME_00" + digito(i)).innerHTML);
    }
    return alunos;
}