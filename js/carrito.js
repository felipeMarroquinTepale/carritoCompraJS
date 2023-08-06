const numero_products = document.getElementById("numero-products");
const global = document.getElementById("global");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const precio_total = document.getElementById("precio-total");

const comprar = document.getElementById("comprar");

function recargarProductosCarrito(){
    let dato = JSON.parse(localStorage.getItem('productos'));
    console.log("dato: ",dato);



    if(JSON.stringify(dato)!='null'){

        //Sacamos datos duplicados
        // let set = new Set(dato.map(JSON.stringify));
        // let arrSinDuplicados = Array.from(set).map(JSON.parse);
        // console.log("dato no repetidos: ", arrSinDuplicados);

        //calculamos el total de todos los productos
        const numeroP = dato.reduce((total,item) => {

            return total + item.numeroUnidades;

        },0);

        const eliminarNumeroUnidadesCero = dato.filter(produc => produc.numeroUnidades != 0);

        localStorage.setItem('productos',JSON.stringify(eliminarNumeroUnidadesCero));

        numero_products.innerHTML= numeroP;

        if(numeroP ===0){
            localStorage.clear()
        }


        // //Se indica el numero de unidades por producto
        // dato.forEach(product => {
        //     let item = product.id;
        //     const numeroUnidadesItem = dato.reduce((total, itemId) => {
        //         // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo
        //         return itemId.id === item ? total += 1 : total;
        //     }, 0);
        //     //console.log(product.titulo, "unidades : ",numeroUnidadesItem)
        //     product.numeroUnidades = numeroUnidadesItem;
        //     console.log("producto: ", product.titulo, "numeroUni: ",product.numeroUnidades)
        // });



        const html = eliminarNumeroUnidadesCero.map(product => {
            return (
                `
                <div class="row align-items-center mt-2 text-center rounded-3 shadow"  style=" height: 100px;">
                    <div class="col ">
                        <img src="./img/abrigos/01.jpg" class="card-img-top" alt="..." style="max-width: 40%;">
                    </div>
                    <div class="col">
                        <strong>Titulo:</strong>
                        <p>${product.titulo}</p>
                    </div>
                    <div class="col">
                        <strong>Cantidad: </strong>
                        <p>${product.numeroUnidades}</p>
                    </div>
                    <div class="col">
                        <strong>Precio</strong>
                        <p>$ ${product.precio}</p>
                    </div>

                    <div class="col">
                        <strong>Subtotal</strong>
                        <p>${(product.precio )*(product.numeroUnidades)}</p>
                    </div>

                    <div class="col">
                        <button type="button" class="btn btn-danger" id="delete-producto"  data-id="${product.id}"><i class="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                `
            )
        });

        global.innerHTML = html.join('');
        //calculamos el total de todos los productos
        const total = dato.reduce((total,item) => {
            return total + item.precio* item.numeroUnidades;
        },0)


        console.log("precio total: ", total);
        precio_total.innerHTML = `$ ${total}`;

        //Cuando se presiona el boton eliminar de un producto
        const delete_producto = document.querySelectorAll("#delete-producto");
        delete_producto.forEach(button => {
            button.addEventListener("click", e => {
                e.preventDefault();
                const id = button.getAttribute("data-id");

                const productoIndex = dato.findIndex(dato => dato.id === id);
                dato[productoIndex].numeroUnidades -- ;
                console.log("numero de unidades",dato[productoIndex].numeroUnidades,"del producto: ",dato[productoIndex].titulo);
                console.log("productos: ",dato);
                localStorage.setItem('productos',JSON.stringify(dato));


                Toastify({
                    text: "Producto eliminado",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #4b33a8, #785ce9)",
                      borderRadius: "2rem",
                      textTransform: "uppercase",
                      fontSize: ".75rem"
                    },
                    offset: {
                        x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
                      },
                    onClick: function(){} // Callback after click
                }).showToast();


                recargarProductosCarrito();
                // let dato = JSON.parse(localStorage.getItem('productos'));
                // console.log("dato recuperados del localstorage",dato);
            })
        });


    }else if(JSON.stringify(dato) === 'null'){
        global.classList.add("d-flex");
        global.classList.add("justify-content-center");
        global.classList.add("align-items-center");
        global.innerHTML="Su carrito esta vacio";
        numero_products.innerHTML= '0'
        precio_total.innerHTML = `$ 0`;
    }
}



function vaciarCar(){
    Toastify({
        text: "Ningun producto en el carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    localStorage.clear();
    recargarProductosCarrito();
}



function comprarProductos(){
    let dato = JSON.parse(localStorage.getItem('productos'));
    console.log("dato: ",dato);

    if(JSON.stringify(dato)!='null'){
        global.innerHTML = "Gracias por su compra :)"
        localStorage.clear();
    }else{
        Toastify({
            text: "No puede comprar si no hay productos",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #4b33a8, #785ce9)",
              borderRadius: "2rem",
              textTransform: "uppercase",
              fontSize: ".75rem"
            },
            offset: {
                x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
            onClick: function(){} // Callback after click
          }).showToast();
    }

}


document.addEventListener("DOMContentLoaded", recargarProductosCarrito);
vaciarCarrito.addEventListener("click",vaciarCar);
comprar.addEventListener("click", comprarProductos);