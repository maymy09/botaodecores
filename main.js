
  function alterarCorEMostrarMensagem() {
    const elemento = document.getElementById('meuElemento');
    const cores = ['red', 'green', 'blue', 'orange', 'purple'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    elemento.style.backgroundColor = corAleatoria;
    
    const mensagem = document.createElement('p');
    mensagem.textContent = `A cor de fundo foi alterada para ${corAleatoria}.`;
    
    const corpo = document.querySelector('body');
    corpo.appendChild(mensagem);
    
    setTimeout(function() {
      corpo.removeChild(mensagem);
    }, 3000); // Remove a mensagem após 3 segundos
  }