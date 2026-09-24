// Subprogramas auxiliares (internos)
function calcularSuperficie(largo, ancho) {
    return largo * ancho;
}

// Subprograma principal: Calcular Techo
function calcularTecho() {
    const largo = parseFloat(document.getElementById('largoTecho').value);
    const ancho = parseFloat(document.getElementById('anchoTecho').value);
    const espesor = parseFloat(document.getElementById('espesorTecho').value); // Leído directamente en metros (m)

    // Validación
    if (isNaN(largo) || isNaN(ancho) || isNaN(espesor) || largo <= 0 || ancho <= 0 || espesor <= 0) {
        alert("Por favor, ingresa valores válidos mayores a cero.");
        return;
    }

    // Cálculo de la superficie del techo (m²)
    const superficie = calcularSuperficie(largo, ancho);

    // Cálculos según especificación por m²
    const cementoKg = superficie * 33;
    const arenaM3 = superficie * 0.072;
    const piedraM3 = superficie * 0.072;
    const hierro8M = superficie * 7;
    const hierro6M = superficie * 4;

    // Arreglo de materiales para la tabla
    const listaMateriales = [
        { nombre: "Superficie del techo", cantidad: superficie.toFixed(2), unidad: "m²" },
        { nombre: "Cemento", cantidad: cementoKg.toFixed(2), unidad: "kg" },
        { nombre: "Arena", cantidad: arenaM3.toFixed(3), unidad: "m³" },
        { nombre: "Piedra", cantidad: piedraM3.toFixed(3), unidad: "m³" },
        { nombre: "Hierro del 8", cantidad: hierro8M.toFixed(2), unidad: "m" },
        { nombre: "Hierro del 6", cantidad: hierro6M.toFixed(2), unidad: "m" }
    ];

    // Texto de dimensiones expresado todo en metros
    const dimensionesTexto = `Espesor: ${espesor} m, Ancho: ${ancho} m, Largo: ${largo} m`;

    // Guardar datos en localStorage
    localStorage.setItem("tipoCalculo", "Techo de hormigón");
    localStorage.setItem("dimensiones", dimensionesTexto);
    localStorage.setItem("origenCalculo", "techo.html");
    localStorage.setItem("materiales", JSON.stringify(listaMateriales));

    // Redirección a la vista de resultados
    window.location.href = "resultado-techo.html";
}