

function pedra(){
    
    let pedra = document.getElementById('pedra')
    let papel = document.getElementById('papel')
    let tesoura = document.getElementById('tesoura') 
    let resultado = document.getElementById('resultado')
    let enviar = document.getElementById('enviar')
    enviar.addEventListener('click' , enviou)
    function enviou() {
        resultado.innerHTML = ''
        let escolha = [pedra, papel, tesoura]
        let indiceEscolha = Math.floor(Math.random() * escolha.length)
        let escolhaFinal = escolha[indiceEscolha]
        if(pedra == escolhaFinal){
            resultado.innerHTML = 'empate'
        } else if(papel == escolhaFinal){
            resultado.innerHTML = 'Computador ganhou'
        } else{
            resultado.innerHTML = 'Jogador ganhou'
        }
        

    }
}



function papel(){
    
    let pedra = document.getElementById('pedra')
    let papel = document.getElementById('papel')
    let tesoura = document.getElementById('tesoura') 
    let resultado = document.getElementById('resultado')
    let enviar = document.getElementById('enviar')
    enviar.addEventListener('click' , enviou)
    function enviou() {
        resultado.innerHTML = ''
        let escolha = [pedra, papel, tesoura]
        let indiceEscolha = Math.floor(Math.random() * escolha.length)
        let escolhaFinal = escolha[indiceEscolha]
        if(papel == escolhaFinal){
            resultado.innerHTML = 'empate'
        } else if(tesoura == escolhaFinal){
            resultado.innerHTML = 'Computador ganhou'
        } else{
            resultado.innerHTML = 'Jogador ganhou'
        }

    }

}




function tesoura(){
    
    let pedra = document.getElementById('pedra')
    let papel = document.getElementById('papel')
    let tesoura = document.getElementById('tesoura') 
    let resultado = document.getElementById('resultado')
    let enviar = document.getElementById('enviar')
    enviar.addEventListener('click' , enviou)
    function enviou() {
        resultado.innerHTML = ''
        let escolha = [pedra, papel, tesoura]
        let indiceEscolha = Math.floor(Math.random() * escolha.length)
        let escolhaFinal = escolha[indiceEscolha]
        if(tesoura == escolhaFinal){
            resultado.innerHTML = 'empate'
        } else if(pedra == escolhaFinal){
            resultado.innerHTML = 'Computador ganhou'
        } else{
            resultado.innerHTML = 'Jogador ganhou'
        }
        

    }
}