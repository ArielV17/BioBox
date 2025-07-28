function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Cierra modal al hacer clic fuera del contenido
window.onclick = function (e) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
};

function abrirVentana(id) {
  document.getElementById(id).style.display = 'block';
}
function cerrarVentana(id) {
  document.getElementById(id).style.display = 'none';
}