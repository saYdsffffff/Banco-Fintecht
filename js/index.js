const screens = [
    'pantallaLogin',
    'pantallaPanel',
    'pantallaServicios',
    'pantallaOperaciones',
    'pantallaPerfil'
  ];
  
  function showScreen(id) {
    screens.forEach(s => {
      document.getElementById(s).style.display = 'none';
    });
    document.getElementById(id).style.display = 'flex';
  }
  
  function ingresar() {
    const usuario = document.getElementById('usuario').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    if (!usuario || !contraseña) {
      alert('Por favor, ingresa tu usuario y contraseña.');
      return;
    }
    if (usuario === 'admin' && contraseña === '12345') {
      showScreen('pantallaPanel');
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
  
  function mostrar(idPantalla) {
    showScreen(idPantalla);
  }
  
  function volver() {
    showScreen('pantallaPanel');
  }
  