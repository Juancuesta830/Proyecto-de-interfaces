function calcularMuro() {

    // Obtener los datos del formulario
    const espesor = Number(document.getElementById("espesor").value);
    const largo = Number(document.getElementById("largo").value);
    const alto = Number(document.getElementById("alto").value);


    // Validar largo y alto
    if (largo <= 0 || alto <= 0) {

        alert("Por favor ingresa el largo y el alto del muro.");

        return;
    }


    // Calcular superficie
    const superficie = largo * alto;


    let cemento;
    let arena;
    let ladrillos;


    // Muro de 20 cm
    if (espesor === 20) {

        cemento = superficie * 10.9;
        arena = superficie * 0.09;
        ladrillos = superficie * 90;

    }


    // Muro de 30 cm
    else if (espesor === 30) {

        cemento = superficie * 15.2;
        arena = superficie * 0.115;
        ladrillos = superficie * 120;

    }


    // Guardar los datos
    localStorage.setItem("espesor", espesor);
    localStorage.setItem("largo", largo);
    localStorage.setItem("alto", alto);

    localStorage.setItem("superficie", superficie);
    localStorage.setItem("cemento", cemento);
    localStorage.setItem("arena", arena);
    localStorage.setItem("ladrillos", ladrillos);


    // Pasar a la página de resultados
    window.location.href = "resultado.html";

}


/* =================================
   CARGAR RESULTADOS
================================= */

function cargarResultados() {

    const espesor =
        Number(localStorage.getItem("espesor"));

    const largo =
        Number(localStorage.getItem("largo"));

    const alto =
        Number(localStorage.getItem("alto"));

    const superficie =
        Number(localStorage.getItem("superficie"));

    const cemento =
        Number(localStorage.getItem("cemento"));

    const arena =
        Number(localStorage.getItem("arena"));

    const ladrillos =
        Number(localStorage.getItem("ladrillos"));


    // Mostrar espesor
    document.getElementById("resultadoEspesor").textContent =
        espesor + " cm";


    // Mostrar dimensiones
    document.getElementById("resultadoLargo").textContent =
        largo;

    document.getElementById("resultadoAlto").textContent =
        alto;


    // Mostrar superficie
    document.getElementById("tablaSuperficie").textContent =
        superficie.toFixed(2);


    // Mostrar cemento
    document.getElementById("tablaCemento").textContent =
        cemento.toFixed(2);


    // Mostrar arena
    document.getElementById("tablaArena").textContent =
        arena.toFixed(3);


    // Mostrar ladrillos
    document.getElementById("tablaLadrillos").textContent =
        Math.round(ladrillos);

}


/* =================================
   EJECUTAR SOLO EN RESULTADOS
================================= */

if (document.querySelector(".resultado-page")) {

    cargarResultados();

}