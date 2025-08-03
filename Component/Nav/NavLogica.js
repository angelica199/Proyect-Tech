const navGeneral = `
  <div class="navbar">
    <img class="img-logo" src="Recursos/icono.jpg" alt="logo">
    <button class="btn-abrir" id="abrir"><i class="bi bi-menu-app-fill"></i></button>
    <div class=menu-cont id="menu">
      <button class="btn-cerrar" id="cerrar"><i class="bi bi-x"></i></button>    
      <ul class="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Calculadora</a></li>
        <li><a href="#">Proyecto</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
`;
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("nav-logica");
  navbarContainer.insertAdjacentHTML("afterbegin",navGeneral);

  const nav = document.getElementById('menu');
  const abrir = document.getElementById('abrir');
  const cerrar = document.getElementById('cerrar');

  abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
  });

  cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
  })
});