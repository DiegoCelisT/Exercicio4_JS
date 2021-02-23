function Ingressar_Time () {
    let Time = {}
    Time.Nome = prompt ("Ingresse o nome de um time:")
    Time.Origem = prompt ("Qual o país de origem desse time?")
    let Titulos = prompt ("Quantos titulos de liga ele têm?")
    Time.Titulos = Number (Titulos)
    return Time
}

let times_no_torneio = []

while (true){
    times_no_torneio.push (Ingressar_Time ())
    if (prompt ("Quer adicionar mais um time no torneio? y/n")==="n"){
        break
    }
}


console.log (`Temos ${times_no_torneio.length} times em nosso torneio, e eles são:`)
console.table (times_no_torneio)

//Com o seguinte vou selecionar os times com mais titulos e fazer um grupo especial com eles:

let mais_ganhador = 0;

for (let i=0; i<times_no_torneio.length;i++){ //Aqui determino qual o valor máximo de títulos que algum time alguma vez atingiu
    if(times_no_torneio[i].Titulos>mais_ganhador){
        mais_ganhador=times_no_torneio[i].Titulos
    }
}

let grupo_dos_mais_ganhadores = []; //e aqui faço um array com o grupo dos mais ganhadores (caso tenha mais do que um)

for (let i=0; i<times_no_torneio.length;i++){ 
    if(times_no_torneio[i].Titulos===mais_ganhador){
        grupo_dos_mais_ganhadores.push (times_no_torneio[i].Nome)
    }
}

//Agora vamos imprimir esses resultados, tem duas possibilidades, que só exista um time mais ganhador, ou um grupo deles
let lista_ganhadora = ""

if(grupo_dos_mais_ganhadores.length===1){
    console.log (`O time com mais títulos é ${grupo_dos_mais_ganhadores[0]} com ${mais_ganhador} títulos`) //Só um time
}
else{
    for (let i=0; i<grupo_dos_mais_ganhadores.length-1;i++){
    lista_ganhadora = lista_ganhadora + `${grupo_dos_mais_ganhadores[i]}, ` //poderia imprimir aqui, mas vou arrumar para que se veja melhor
    }
}

    //Arrumadinha para visualização final:
    if ((grupo_dos_mais_ganhadores.length>1)){
    lista_ganhadora = lista_ganhadora.slice(0, -2) + ` e ${grupo_dos_mais_ganhadores[grupo_dos_mais_ganhadores.length-1]}` 
    //com aquele slice estou retirando o último espaço e a última vírgula
    console.log (`Os times com mais títulos são: `+lista_ganhadora+ ` com ${mais_ganhador} títulos`)
    }


    //MENSAGENS PARA MEU HTML

    function Mensagens_no_HTML () {
    var Mensagens = document.querySelector ('div')
    var Mensagem1 = document.createElement ('p')
    Mensagem1.textContent = `Vamos ter ${times_no_torneio.length} times em nosso torneio, e eles são:`
    Mensagens.appendChild (Mensagem1)
    
    //Lista de times
    var Mensagem_times = document.createElement ('p')
    let lista_de_times = ""
    for (let i=0; i<times_no_torneio.length-1;i++){
    lista_de_times = lista_de_times + `${times_no_torneio[i].Nome}, `
    }
    lista_de_times = lista_de_times.slice(0, -2) + ` e ${times_no_torneio[times_no_torneio.length-1].Nome}` //Aquela concertadinha do último item
    Mensagem_times.textContent = lista_de_times
    Mensagens.appendChild (Mensagem_times)

    //Time(s) mais ganhador(es)

    if (grupo_dos_mais_ganhadores.length===1){ //Só um time
        var Mensagem3 = document.createElement ('p')
        Mensagem3.textContent = `O time com mais títulos é ${grupo_dos_mais_ganhadores[0]} com ${mais_ganhador} títulos`
        Mensagens.appendChild (Mensagem3) 
    }
    else{
        var Mensagem4 = document.createElement ('p')
        Mensagem4.textContent = `Os times com mais títulos são: `+lista_ganhadora+ ` com ${mais_ganhador} títulos`
        Mensagens.appendChild (Mensagem4) 
    }
           
    }

