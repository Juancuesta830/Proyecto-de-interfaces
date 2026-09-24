// Subprogramas auxiliares (internos)
function calcularSuperficie(largo, ancho) {
    return largo * ancho;
}

function calcularVolumen(largo, ancho, espesor) {
    return calcularSuperficie(largo, ancho) * espesor;
}

// Subprograma principal: Calcular Contrapiso
function calcularContrapiso() {
    const largo = parseFloat(document.getElementById('largoContrapiso').value);
    const ancho = parseFloat(document.getElementById('anchoContrapiso').value);
    const espesorCm = parseFloat(document.getElementById('espesorContrapiso').value);

    // Validación
    if (isNaN(largo) || isNaN(ancho) || isNaN(espesorCm) || largo <= 0 || ancho <= 0 || espesorCm <= 0) {
        alert("Por favor, ingresa valores válidos mayores a cero.");
        return;
    }

    // Convertir espesor de cm a metros
    const espesorM = espesorCm / 100;

    // Uso de la función auxiliar para calcular el volumen
    const volumen = calcularVolumen(largo, ancho, espesorM);

    // Cálculos según especificación (por m³):
    // 105 kg Cemento | 0.45 m³ Arena | 0.9 m³ Piedra
    const cementoKg = volumen * 105;
    const arenaM3 = volumen * 0.45;
    const piedraM3 = volumen * 0.9;

    // Arreglo de materiales para la tabla
    const listaMateriales = [
        { nombre: "Volumen del contrapiso", cantidad: volumen.toFixed(3), unidad: "m³" },
        { nombre: "Cemento", cantidad: cementoKg.toFixed(2), unidad: "kg" },
        { nombre: "Arena", cantidad: arenaM3.toFixed(3), unidad: "m³" },
        { nombre: "Piedra", cantidad: piedraM3.toFixed(3), unidad: "m³" }
    ];

    // Texto de dimensiones para la tarjeta resumen
    const dimensionesTexto = `Espesor: ${espesorCm} cm, Ancho: ${ancho} m, Largo: ${largo} m`;

    // Guardar datos en localStorage
    localStorage.setItem("tipoCalculo", "Contrapiso de hormigón");
    localStorage.setItem("dimensiones", dimensionesTexto);
    localStorage.setItem("origenCalculo", "contrapiso.html");
    localStorage.setItem("materiales", JSON.stringify(listaMateriales));

    // Redirección a la vista de resultados
    window.location.href = "resultado-contrapiso.html";
}