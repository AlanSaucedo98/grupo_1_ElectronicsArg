window.addEventListener("load", function () {


    let formularioB = document.getElementById("FormularioB");
    formularioB.addEventListener("submit", function (e) {



        let errores = []

        let nombre = document.getElementById("nombreP");
        if (nombre.value == "") {
            errores.push("Nombre Obligatorio")

        }
        let precio = document.getElementById("precioP");
        if (precio.value == "") {
            errores.push("Especificar Precio")
        }

        /*let plataforma = document.getElementById("Plataforma");
        if (plataforma.value == "") {
            errores.push("Eliga al menos 1 plataforma")
        }

        let categoria = document.getElementById("categoria");
        if (categoria.value == "") {
            errores.push("Eliga al menos 1 categoria")
        }*/

        let idiomas = document.getElementById("idiomas");
        if (idiomas.value == "") {
            errores.push("Espesificar idomas")
        }

        let desarollador = document.getElementById("desarrollador");
        if (desarollador.value == "") {
            errores.push("Falta nombre de Desarrollador")
        }

        let procesador = document.getElementById("pro");
        if (procesador.value == "") {
            errores.push("Espesificar Procesador")
        }


        let memoria = document.getElementById("memoria");
        if (memoria.value == "") {
            errores.push("Espesificar memoria RAM")
        }


        let disco = document.getElementById("disco");
        if (disco.value == "") {
            errores.push("Espesificar espacio de disco duro")
        }

        let graficos = document.getElementById("graficos");
        if (graficos.value == "") {
            errores.push("Espesificar Graficos")
        }

        let trailer = document.getElementById("trailer");
        if (trailer.value == "") {
            errores.push("Trailer obligatorio")
        }

        let resumen = document.getElementById("resumen");
        if (resumen.value == "") {
            errores.push("Falta un Resumen")
        }

        let fecha = document.getElementById("datebirth");

        if (fecha.value == "") {
            errores.push("El campo fecha no puede estar vacio")

        }


        







        if (errores.length > 0) {
            e.preventDefault();



            let ulErrores = document.querySelector("div.errores ul")

            ulErrores.innerHTML = ""

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"


            }

        }

    })
})