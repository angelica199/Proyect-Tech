const navGeneral = `
  <div class="navbar">
    <img class="img-logo" src="../Recursos/icono.jpg" alt="logo">
    <button class="btn-abrir" id="abrir"><i class="bi bi-menu-app-fill"></i></button>
    <div class=menu-cont id="menu">
      <button class="btn-cerrar" id="cerrar"><i class="bi bi-x"></i></button>    
      <ul class="nav-list">
        <li><a href="../Inicio/Proyecto Final.html">Inicio</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="../Feedback/feedback.html">Feedback</a></li>
        <li class="btn-calculadora"><a href="../Inicio/Proyecto Final.html#calculadora">Calculadora</a></li>
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