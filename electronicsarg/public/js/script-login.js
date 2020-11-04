window.addEventListener("load", function () {
    
    let formulario = document.getElementById("FormuC")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    
    formulario.addEventListener("submit", function (e) {



        let errores = []


        //VALIDO NOMBRE
        let email = document.getElementById("correo");
        if (!regexEmail.test(email.value)) {
            errores.push("El email no es un formato valido")
        }
        


        //VALIDO CONTRASEÑAS
        let pass1 = document.getElementById("Contraseña")
       
        if (pass1.value.length < 6) {
            errores.push("La contraseñas debe tener entre 6 y 12 caracteres  ")
        }
        if (pass1.value.length > 12) {
            errores.push("La contraseñas debe tener entre 6 y 12 caracteres  ")
        }
        if(pass1.value == ""){
            errores.push("El campo no puede estar vacio")
        }
        

        /*inputEmail.addEventListener('change',() =>{
        fetch(`${window.location.origin}/api/emails`)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                if (user.email == inputEmail.value){
                    errorEmail.innerHTML = "Este email ya está registrado";
                    inputEmail.classList.toggle('is-invalid')
                }
               })
            
        })
    })*/






        //COMPRUEBO LOS ERRORES PARA VALIDAR
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