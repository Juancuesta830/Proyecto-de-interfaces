// Subprograma principal: Calcular Pintura
function calcularPintura() {
    const superficie = parseFloat(document.getElementById('superficieMuro').value);

    if (isNaN(superficie) || superficie <= 0) {
        alert("Por favor, ingresa una superficie válida mayor a cero.");
        return;
    }

    // Calcula los litros exactos dividiendo por el rendimiento (6 m² por litro)
    const litrosPintura = superficie / 6;

    const listaMateriales = [
        { nombre: "Superficie a cubrir", cantidad: superficie.toFixed(2), unidad: "m²" },
        { nombre: "Pintura necesaria", cantidad: litrosPintura.toFixed(2), unidad: "L" }
    ];

    const dimensionesTexto = `Superficie: ${superficie} m²`;

    localStorage.setItem("tipoCalculo", "Pintura de muro");
    localStorage.setItem("dimensiones", dimensionesTexto);
    localStorage.setItem("origenCalculo", "pintura.html");
    localStorage.setItem("materiales", JSON.stringify(listaMateriales));

    window.location.href = "resultado-pintura.html";
}