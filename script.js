document.getElementById('btn').addEventListener('click', function(){
  const msg = document.getElementById('msg');
  msg.textContent = 'Commit simulado: "Actualización de contenido" — (solo demo)';
  console.log('Commit simulado: Actualización de contenido');
  setTimeout(()=>{ msg.textContent += ' ✔'; },700);
});
