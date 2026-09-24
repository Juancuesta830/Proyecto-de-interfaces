function calcularViga() {

    // Obtener el largo ingresado

    const largo = Number(
        document.getElementById("largo").value
    );


    // Validar el largo

    if (largo <= 0) {

        alert("Por favor ingresa el largo de la viga.");

        return;
    }


    // Calcular materiales

    const cemento = largo * 9;

    const arena = largo * 0.02;

    const piedra = largo * 0.02;

    const hierro8 = largo * 4;

    const hierro4 = largo * 3;


    // Guardar los datos

    localStorage.setItem("largoViga", largo);

    localStorage.setItem("cementoViga", cemento);

    localStorage.setItem("arenaViga", arena);

    localStorage.setItem("piedraViga", piedra);

    localStorage.setItem("hierro8Viga", hierro8);

    localStorage.setItem("hierro4Viga", hierro4);


    // Pasar a la página de resultados

    window.location.href = "resultado-viga.html";

}


/* =================================
   CARGAR RESULTADOS
================================= */

function cargarResultadosViga() {

    const largo =
        Number(localStorage.getItem("largoViga"));

    const cemento =
        Number(localStorage.getItem("cementoViga"));

    const arena =
        Number(localStorage.getItem("arenaViga"));

    const piedra =
        Number(localStorage.getItem("piedraViga"));

    const hierro8 =
        Number(localStorage.getItem("hierro8Viga"));

    const hierro4 =
        Number(localStorage.getItem("hierro4Viga"));


    // Mostrar largo

    document.getElementById("resultadoLargo").textContent =
        largo;


    // Mostrar cemento

    document.getElementById("tablaCemento").textContent =
        cemento.toFixed(2);


    // Mostrar arena

    document.getElementById("tablaArena").textContent =
        arena.toFixed(3);


    // Mostrar piedra

    document.getElementById("tablaPiedra").textContent =
        piedra.toFixed(3);


    // Mostrar hierro del 8

    document.getElementById("tablaHierro8").textContent =
        hierro8.toFixed(2);


    // Mostrar hierro del 4

    document.getElementById("tablaHierro4").textContent =
        hierro4.toFixed(2);

}


/* =================================
   EJECUTAR SOLO EN RESULTADOS
================================= */

if (document.querySelector(".resultado-page")) {

    cargarResultadosViga();

}