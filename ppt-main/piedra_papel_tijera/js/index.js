var rondas = 0;
var victoriasUsuario = 0;
var victoriasMaquina = 0;
var opciones = {
  'piedra': {
    'piedra': 'Empate',
    'papel': 'Perdiste',
    'tijera': 'Ganaste'
  },
  'papel': {
    'piedra': 'Ganaste',
    'papel': 'Empate',
    'tijera': 'Perdiste'
  },
  'tijera': {
    'piedra': 'Perdiste',
    'papel': 'Ganaste',
    'tijera': 'Empate'
  }
}


function jugada(eleccionUsuario) {
    var elecciones = ['piedra', 'papel', 'tijera'];
    var eleccionMaquina = elecciones[Math.floor(Math.random() * 3)];
    var resultado = opciones[eleccionUsuario][eleccionMaquina];
    document.getElementById('mensaje').textContent = `Elegiste ${eleccionUsuario}. La máquina eligió ${eleccionMaquina}. ${resultado}!`;
    rondas++;
    if(rondas == 5) {
      document.getElementById('mensaje2').textContent += " Se llegó a 5 rondas, El juego ha terminado.";
      rondas = 0; // resetea el contador de rondas
      mostrarGanadorFinal();

      rondas = 0; // resetea el contador de rondas
  
      victoriasUsuario = 0; // resetea el contador de victorias del usuario
  
      victoriasMaquina = 0; // resetea el contador de victorias de la máquina
  
    }
  
  if(resultado.includes('Ganaste')) {
    victoriasUsuario++;
  } else if(resultado.includes('Perdiste')) {
    victoriasMaquina++;
  }
}

function mostrarGanadorFinal() {
  if(victoriasUsuario > victoriasMaquina) {
    document.getElementById('mensaje3').textContent += " Has ganado el juego!";
  } else if(victoriasMaquina > victoriasUsuario) {
    document.getElementById('mensaje3').textContent += " La máquina ha ganado el juego.";
  } else {
    document.getElementById('mensaje3').textContent += " El juego es un empate.";
  }
}


