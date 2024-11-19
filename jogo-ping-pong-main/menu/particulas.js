for (let i = 0; i < 100; i++) {
    criarElementoAleatorio();
}
 
function criarElementoAleatorio() {
    const elemento = document.createElement('div');
    elemento.className = 'particulas';
 
    const largura = ((window.innerWidth / document.documentElement.clientWidth) * 100) - 10; // - 10 é o valor q eu coloqueo pra funcionar o programa sem as estrelas interferirem no tamanho horizontal do site
    const altura = ((window.innerHeight / document.documentElement.clientHeight) * 100) - 10;
    console.log(largura)
    console.log(altura)
 
    const posicaoX = Math.random() * largura;
    const posicaoY = Math.random() * altura;
 
    elemento.style.left = `${posicaoX}vw`;
    elemento.style.top = `${posicaoY}vh`;
 
    elemento.style.animationDelay = `${Math.random() * 5}s`;
 
    document.body.appendChild(elemento);
}