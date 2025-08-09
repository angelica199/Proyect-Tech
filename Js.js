// Función para formatear a moneda colombiana
function formatoCOP(valor) {
    return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}

// Escuchar el envío del formulario
document.getElementById('solarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores
    const consumo = parseFloat(document.getElementById('consumo').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const horasSol = parseFloat(document.getElementById('horasSol').value);

    // Calcular el costo mensual y estimación de paneles
    const costoMensual = consumo * precio;
    const energiaDiaria = consumo / 30;
    const paneles = Math.ceil(energiaDiaria / (horasSol * 0.3)); // 0.3 kW por panel típico

    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        💰 Costo mensual: <b>${formatoCOP(costoMensual)}</b><br>
        ☀️ Necesitarías aproximadamente <b>${paneles}</b> paneles solares.
    `;
    resultadoDiv.classList.remove('d-none');
});
