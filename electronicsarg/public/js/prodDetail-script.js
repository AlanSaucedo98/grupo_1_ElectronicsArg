window.addEventListener("load", function () {

    


    let btnElim = document.getElementById("btnElim")
    let formElim = document.getElementById("formElim")

    

   
        

    formElim.addEventListener("submit",function(ev){
        
        ev.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Seguro que desea eliminar este producto?',
            text: "Esta accion no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si,Destruyelo >:)!',
            cancelButtonText: 'No, cancelalo T.T!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                
                
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'Tu Producto se elimino correctamente.',
                    'success'
                );
               
                setTimeout(() => {
                    this.submit();
                }, 2000); 

            


            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu Producto esta a salvo! :)',
                    'error'
                )
            }
        })

    
})

})