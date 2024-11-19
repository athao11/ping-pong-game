let tabela = document.getElementById('tabela')
let tabela2 = document.getElementById('tabela2')
let pontoVerde = document.getElementById('pontoVerde')
let pontoRoxo = document.getElementById('pontoRoxo')

let posY = 400
let posX = 400
let movimento = 20

let jogoAtivo = true
let player1Score = 0; 
let player2Score = 0; 


let botoes = document.getElementById('botoes')
let reiniciarBtn = document.getElementById('reiniciar')
let menuBtn = document.getElementById('voltarMenu')


document.addEventListener('keydown', (event) => {
    if(!jogoAtivo) return;


    if (event.key === 'w') {
        posY -= movimento
        if (posY < 0) {
            posY = 0
        }
    } else if (event.key === 's') {
        posY += movimento
        if (posY > 750) {
            posY = 750
        }
    }

    console.log(event.key)
    if (event.key === 'ArrowUp') {
        posX -= movimento
        if (posX < 0) {
            posX = 0
        }
    } else if (event.key === 'ArrowDown') {
        posX += movimento
        if (posX > 750) {
            posX = 750
        }
    }
    tabela2.style.top = posX + 'px'
    tabela.style.top = posY + 'px'
 
        
   
    
});

function colisaoDetectada(el1, el2){
    const rect1 = el1.getBoundingClientRect()
    const rect2 = el2.getBoundingClientRect()
    
    if(rect1.top > rect2.bottom){
        return false
    }
    if(rect1.bottom < rect2.top){
        return false
    }
    if(rect1.left > rect2.right){
        return false
    }
    if(rect1.right < rect2.left){
        return false
    }
    return true
}

let bola = document.getElementById('bola')

let posicaoXbola = 50
let posicaoYbola = 50
let velX = 0.2
let velY = 0.2



function bolaDirecaoAleatoria(){
    let velocidade = 0.2;

    velX = -0.2

    velY = (Math.random() < 0.5 ? -1 : 1) * velocidade; 

    velY = 0.2
}
function moverBola() {
    posicaoXbola += velX
    posicaoYbola += velY
    
    if (posicaoXbola <= 0) {
        
        player2Score++;
       alert("Jogador 2 marcou!!")
        resetarBola(); 
    } else if (posicaoXbola >= 97) {
        
        player1Score++;
       alert("Jogador 1 marcou!!")
        resetarBola(); 
    }

    if(posicaoXbola <= 0 || posicaoXbola >= 97){
        velX *= -1
    } 
    if(posicaoYbola <= 0 || posicaoYbola >= 97) {
        velY *= -1
    }
    
    bola.style.left = `${posicaoXbola}%`
    bola.style.top = `${posicaoYbola}%`

    pontoVerde.innerText = `Jogador 2: ${player2Score}`;
    pontoRoxo.innerText = `Jogador 1: ${player1Score}`
    
 if (colisaoDetectada(tabela, bola) || colisaoDetectada(tabela2, bola)) {
    velX *= -1;
    velX += 0.05;  
}
    if (player1Score >= 5) {
        vitoria('Jogador 1 venceu!!');
    } else if (player2Score >= 5) {
        vitoria('Jogador 2 venceu!!');
    } else {
        requestAnimationFrame(moverBola);
    }

}

function resetarBola() {
    posicaoXbola = 50; 
    posicaoYbola = 50;
    velX = -0.1
    velY = 0.1

    bola.style.left = `${posicaoXbola}%`;
    bola.style.top = `${posicaoYbola}%`;

    
}

function vitoria(mensagem) {
    alert("O jogo acabou!!");
    alert(mensagem);  // Mostra a mensagem de quem venceu
    jogoAtivo = false;  // Para o jogo
    pontoRoxo.innerText = `Jogador 1: ${player1Score}`;
    pontoVerde.innerText = `Jogador 2: ${player2Score}`;

    botoes.style.display = 'block';
}

reiniciarBtn.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    pontoRoxo.innerText = `Jogador 1: ${player1Score}`;
    pontoVerde.innerText = `Jogador 2: ${player2Score}`;

    posicaoXbola = 50;
    posicaoYbola = 50;
    velX = -    0.2;
    velY = 0.2;

    bola.style.left = `${posicaoXbola}%`;
    bola.style.top = `${posicaoYbola}%`;

    jogoAtivo = true; 
    botoes.style.display = 'none'; 

    moverBola(); 
});



bolaDirecaoAleatoria()
moverBola()


