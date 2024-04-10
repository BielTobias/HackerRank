function PegarEmenta(){
let objementa = document.querySelectorAll('h4+p'); //h4 + p pega todos os "p" que são irmãos adjascentes de "h4"

let ementa = []; 

for (let i = 0; i < objementa.length; i++){
    if(i % 2 !=  0){                                    
        ementa.push(objementa[i].innerHTML.trim()); //coloca dentro do array toda posição que não tiver resto, ou seja, 
    }                                               //apenas as ementas, pois são o segundo índice após os ibjetivos.
  }
  return ementa;
}

