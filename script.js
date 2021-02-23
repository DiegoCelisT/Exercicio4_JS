let times_no_torneio = []
let mais_ganhador = 0;
let lista_ganhadora = ""

function Cadastrar_Time (){
    
    //Cadastrando Nome
    let input_nome = document.querySelector ('#Nome');
    let Lista_de_participantes = document.querySelector ('#Lista_de_participantes');

    let Novo_Nome = input_nome.value;
    input_nome.value = ''; //isso para quando ingresar o dado volte ser zero

    //Cadastrando Origem
    let input_origem = document.querySelector ('#Origem');
    //let Lista_de_participantes = document.querySelector ('#Lista_de_participantes');

    let Novo_Origem = input_origem.value;
    input_origem.value = ''; //isso para quando ingresar o dado volte ser zero

    //Cadastrando Títulos
    let input_titulos = document.querySelector ('#Titulos');
    //let Lista_de_participantes = document.querySelector ('#Lista_de_participantes');

    let Novo_Titulos = input_titulos.value;
    input_titulos.value = ''; //isso para quando ingresar o dado volte ser zero


    let time_na_lista = document.createElement ('li');
    time_na_lista.textContent = `${Novo_Nome} de ${Novo_Origem} com ${Novo_Titulos} títulos`;
    Lista_de_participantes.appendChild (time_na_lista);
    event.preventDefault();
    
    function Ingressar_Time () {
    let Time = {}
    Time.Nome = Novo_Nome;
    Time.Origem = Novo_Origem;
    let Titulos = Novo_Titulos;
    Time.Titulos = Number (Titulos)
    return Time
    }
    times_no_torneio.push (Ingressar_Time ())

    //Com o seguinte vou selecionar os times com mais titulos e fazer um grupo especial com eles:

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
   
    var Mensagens = document.querySelector ('#info')
    document.querySelector ('#info').textContent = ""

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

document.querySelector('#Botão_Adicionar_Time').addEventListener('submit' /*ação*/, Cadastrar_Time)