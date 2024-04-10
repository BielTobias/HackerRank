//Implemente uma função que receba uma lista de alunos de ISW-008 (nome, ra, notaP1, notaP2).
//Exemplo: {nome: "Diego", ra: "005832311004", notaP1: 10, notaP2: 8}.
//Essa função deverá:

//a) Mostrar na tela os alunos em uma tabela. (FEITO)
//b) Notas menores que 6 em vermelho, maiores ou iguais em azul. (FEITO)
//c) A média da PI da turma. (FEITO)
//d) A média da P2 da turma. (FEITO)
//e) A média de cada aluno. (FEITO)
//f) A quantidade de aprovados. (FEITO)
//g) A quantidade de reprovados. (FEITO)

//Obs: Para teste colocar de 5-10 alunos.

function tabelaAlunos(listaAlunos){
    var tabela   = "<table> <thead> <tr>"
                    +  "<th> Nome </th>"
                    +  "<th> RA </th>"
                    +  "<th> Nota P1 </th>"
                    +  "<th> Nota P2 </th>"
                    +  "<th> Média individual</th>"
                    +  "</tr>"
                    +  "</thead>"   
                    +  "<tbody>"
    for (let i=0; i < listaAlunos.length; i++){
         tabela = tabela
         + "<tr> <td>" + listaAlunos[i].nome + "</td>"//a) Mostra na tela os alunos em uma tabela.
         + "<td>" + listaAlunos[i].ra + "</td>"
         + "<td class = 'notaP1'>" + listaAlunos[i].p1 + "</td>"
         + "<td class = 'notaP2'>" + listaAlunos[i].p2 + "</td>"
         + "<td class = 'media'>" + (listaAlunos[i].p1+listaAlunos[i].p2)/2 + "</td> </tr>" //e) A média de cada aluno.
    }         

//

    var mediaP1 = 0;
    var mediaP2 = 0;
 
    for (let i=0; i < listaAlunos.length; i++){
         mediaP1 += listaAlunos[i].p1; //c) A média da PI da turma.
         mediaP2 += listaAlunos[i].p2; //d) A média da P2 da turma.
    }
 
    mediaP1 = mediaP1/listaAlunos.length;
    mediaP2 = mediaP2/listaAlunos.length;
    

    let aprovados = 0;
    let reprovados = 0;

    for(let i = 0; i<listaAlunos.length; i++){
        if(((listaAlunos[i].p1+listaAlunos[i].p2)/2) >= 6){
            aprovados++;
        }
        else{
            reprovados++;
        }
    }

    tabela = tabela 
        + "<tr><td> Média P1 da turma:</td>"
        + "<td class = 'mediaP1'>" + mediaP1 + "</td>"
        + "<td> Aprovado </td>"
        + "<td>" + aprovados + "</td></tr>"
        + "<tr><td> Média P2 da turma:</td>"
        + "<td class = 'mediaP2'>" + mediaP2 + "</td>"
        + "<td> Reprovado</td>"
        + "<td>" + reprovados + "</td> </tr>"

//

    tabela = tabela + "</tbody> </table>";
    document.write(tabela); 

    let color = document.querySelectorAll('td.notaP1, td.notaP2, td.media, td.mediaP1, td.mediaP2')

    console.log(color);

    for (let i = 0; i < color.length; i++){
        if (parseInt(color[i].innerText, 10) < 6){
            color[i].classList.add("reprovado");
        }
        else{
            color[i].classList.add("aprovado");
        }
    }   
}   