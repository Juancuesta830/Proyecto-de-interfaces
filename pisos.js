// Subprograma auxiliar
function calcularSuperficie(largo, ancho) {
    return largo * ancho;
}

// Subprograma principal: Calcular Piso (nombre corregido en singular)
function calcularPiso() {
    const largo = parseFloat(document.getElementById('largoPiso').value);
    const ancho = parseFloat(document.getElementById('anchoPiso').value);

    // Validación
    if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
        alert("Por favor, ingresa valores válidos mayores a cero.");
        return;
    }

    // 1. Superficie base (m²)
    const superficieBase = calcularSuperficie(largo, ancho);

    // 2. 10% extra por recortes
    const desperdicio = superficieBase * 0.10;
    const superficieTotal = superficieBase * 1.10;

    // Arreglo de datos para la tabla
    const listaMateriales = [
        { nombre: "Superficie neta", cantidad: superficieBase.toFixed(2), unidad: "m²" },
        { nombre: "Extra por recortes (10%)", cantidad: desperdicio.toFixed(2), unidad: "m²" },
        { nombre: "Total de piso necesario", cantidad: superficieTotal.toFixed(2), unidad: "m²" }
    ];

    // Texto de dimensiones
    const dimensionesTexto = `Ancho: ${ancho} m, Largo: ${largo} m`;

    // Guardar datos en localStorage
    localStorage.setItem("tipoCalculo", "Colocación de piso");
    localStorage.setItem("dimensiones", dimensionesTexto);
    localStorage.setItem("origenCalculo", "pisos.html");
    localStorage.setItem("materiales", JSON.stringify(listaMateriales));

    // Redirección a la vista de resultados
    window.location.href = "resultado-pisos.html";
}