window.addEventListener("load", function () {

    let formulario = document.getElementById("Formu")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let email = document.getElementById("correo");
    formulario.addEventListener("submit", function (e) {



        let errores = []

        let nombre = document.getElementById("nombres");
        if (nombre.value == "") {
            errores.push("El campo Nombre no puede estar vacio")

        }
        let apellido = document.getElementById("apellidos");
        if (apellido.value == "") {
            errores.push("El campo Apellido no puede estar vacio")
        }

        if (!regexEmail.test(email.value)) {
            errores.push("El email no es un formato valido")

        }


        let usuario = document.getElementById("usuarios");
        if (usuario.value == "") {
            errores.push("El campo no puede estar vacio")
        }

        let fecha = document.getElementById("datebirth");

        if (fecha.value == "") {
            errores.push("El campo fecha no puede estar vacio")

        }

        let pass1 = document.getElementById("Contraseña1")
        let pass2 = document.getElementById("Contraseña2")
        
        if(pass1.value > 12 || pass1.value < 6){
            errores.push("La contraseñas debe tener entre 6 y 12 caracteres  ")
        }
        
        if (pass1.value != pass2.value) {
            errores.push("Las contraseñas no coinciden ")
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