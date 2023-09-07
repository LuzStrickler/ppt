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
  }
  