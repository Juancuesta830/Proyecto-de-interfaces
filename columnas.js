function calcularColumna() {
    const input = document.getElementById("largoColumna");
    const largo = Number(input.value);

    if (!input.value || largo <= 0 || isNaN(largo)) {
        alert("Por favor ingresa un largo válido.");
        return;
    }

    // 1. Borrar datos viejos de la memoria (para eliminar cualquier cálculo previo de muro)
    localStorage.clear();

    // 2. Coeficientes de cálculo por metro lineal de columna
    const cemento = largo * 7.5;
    const arena = largo * 0.016;
    const piedra = largo * 0.016;
    const hierro10 = largo * 6;
    const hierro4 = largo * 3;

    // 3. Guardar los datos específicos de la COLUMNA
    localStorage.setItem("tipoCalculo", "Columna de hormigón");
    localStorage.setItem("dimensiones", `Largo: ${largo} m`);
    localStorage.setItem("origenCalculo", "columnas.html");

    // 4. Guardar la lista de materiales
    const listaMateriales = [
        { nombre: "Cemento", cantidad: cemento.toFixed(2), unidad: "kg" },
        { nombre: "Arena", cantidad: arena.toFixed(3), unidad: "m³" },
        { nombre: "Piedra", cantidad: piedra.toFixed(3), unidad: "m³" },
        { nombre: "Hierro del 10", cantidad: hierro10.toFixed(2), unidad: "m" },
        { nombre: "Hierro del 4", cantidad: hierro4.toFixed(2), unidad: "m" }
    ];

    localStorage.setItem("materiales", JSON.stringify(listaMateriales));

    // 5. Redirigir a la página de resultados
    window.location.href = "resultado-columnas.html";
}