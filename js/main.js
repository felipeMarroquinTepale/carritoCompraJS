// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1010
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 900
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 2000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1500
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 600
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1500
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 2100
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 2300
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 500
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 100
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 100
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 500
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 500
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 600
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 600
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 700
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 800
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1300
    }
];





const AllProducts = document.getElementById("All-products");
const global = document.getElementById("global");
const abrigos_products = document.getElementById("abrigos-products");
const pantalones_products = document.getElementById("pantalones-products");
const camiseta_products = document.getElementById("camiseta-products");
const numero_products = document.getElementById("numero-products");



let carrito = [];



function cargarAllProducts () {
    AllProducts.classList.add("active");
    abrigos_products.classList.remove("active");
    camiseta_products.classList.remove("active");
    pantalones_products.classList.remove("active")


    let dato = JSON.parse(localStorage.getItem('productos'));
    console.log("dato recuperados del localstorage",dato);


   const html = productos.map(product => {
    return (
        `
        <div class="col">
            <div class="card h-100">
                <img src="${product.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.titulo}</h5>
                    <h6>Categoria: <span>${product.categoria.nombre}</span></h6>
                    <h6>Precio: <span>$ ${product.precio}</span></h6>

                    <div class="d-grid gap-2">
                        <button class="btn shadow" id="id-producto" data-id=${product.id} style="background-color: #f5f5f5; type="button">Comprar</button>
                    </div>

                </div>
            </div>
        </div>
        `
    )
   });

   global.innerHTML = html.join('');

   const id_producto = document.querySelectorAll("#id-producto");
   id_producto.forEach(button => {
        button.addEventListener("click",e =>{
            e.preventDefault()
            const id = button.getAttribute("data-id");
            console.log("id: ", id)


            guardarProducto(id);
        })
   })
}


function cargarAbrigos (){
    abrigos_products.classList.add("active");
    AllProducts.classList.remove("active")
    camiseta_products.classList.remove("active");
    pantalones_products.classList.remove("active")


    const html = productos.map(product => {

        if(product.categoria.nombre === "Abrigos"){
            return (
                `
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.titulo}</h5>
                            <h6>Categoria: <span>${product.categoria.nombre}</span></h6>
                            <h6>Precio: <span>$ ${product.precio}</span></h6>

                            <div class="d-grid gap-2">
                                <button class="btn shadow" id="id-producto" data-id=${product.id} style="background-color: #f5f5f5; type="button">Comprar</button>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
        }
       });

       global.innerHTML = html.join('');

       const id_producto = document.querySelectorAll("#id-producto");
       id_producto.forEach(button => {
            button.addEventListener("click",e =>{
                e.preventDefault()
                const id = button.getAttribute("data-id");
                console.log("id: ", id)
                guardarProducto(id);
            })
       })


}

function cargarCamisetas(){


    abrigos_products.classList.remove("active");
    AllProducts.classList.remove("active")
    camiseta_products.classList.add("active");
    pantalones_products.classList.remove("active")



    const html = productos.map(product => {

        if(product.categoria.nombre === "Camisetas"){
            return (
                `
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.titulo}</h5>
                            <h6>Categoria: <span>${product.categoria.nombre}</span></h6>
                            <h6>Precio: <span>$ ${product.precio}</span></h6>

                            <div class="d-grid gap-2">
                             <button class="btn shadow" id="id-producto" data-id=${product.id} style="background-color: #f5f5f5; type="button">Comprar</button>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
        }
       });

       global.innerHTML = html.join('');

       const id_producto = document.querySelectorAll("#id-producto");
       id_producto.forEach(button => {
            button.addEventListener("click",e =>{
                e.preventDefault()
                const id = button.getAttribute("data-id");
                console.log("id: ", id);
                guardarProducto(id);


            })
       })


}


function cargarPantalones(){

    abrigos_products.classList.remove("active");
    AllProducts.classList.remove("active")
    camiseta_products.classList.remove("active");
    pantalones_products.classList.add("active")


    const html = productos.map(product => {

        if(product.categoria.nombre === "Pantalones"){
            return (
                `
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.titulo}</h5>
                            <h6>Categoria: <span>${product.categoria.nombre}</span></h6>
                            <h6>Precio: <span>$ ${product.precio}</span></h6>

                            <div class="d-grid gap-2">
                                <button class="btn shadow" id="id-producto" data-id=${product.id} style="background-color: #f5f5f5; type="button">Comprar</button>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
        }
    });

    global.innerHTML = html.join('');

    const id_producto = document.querySelectorAll("#id-producto");
    id_producto.forEach(button => {
        button.addEventListener("click",e =>{
            e.preventDefault()
            const id = button.getAttribute("data-id");
            console.log("id: ", id);
            guardarProducto(id);
        })
    })
}


function cargarNumeroCarrito(){
    let dato = JSON.parse(localStorage.getItem('productos'));
    if(JSON.stringify(dato)!='null'){

        const numeroP = dato.reduce((total,item) => {
            return total + item.numeroUnidades;
        },0);
        numero_products.innerHTML= numeroP;
    }
    // localStorage.clear();
}


function guardarProducto(id){

    Toastify({
        text: "Producto agregado",
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


    if(carrito.length === 0){
        //recupero los datos guardados en el localStorage
        // let datoStorage = JSON.stringify(localStorage.getItem('productos'));
        let dato = JSON.parse(localStorage.getItem('productos'));
        console.log("dato recuperados del localstorage",dato);
        if(JSON.stringify(dato)==='null'){
            //si no hay datos guardados en el localStorage empieze a guardar el contenido del carrito en el local storage
            const productoAgregado = productos.find(producto => producto.id === id);

            //guardo el producto agregado en el array carrito
            if(carrito.some(producto => producto.id === id)){
                //el id tiene duplicado
                //aumentare el numeroUnidades
                const indexSimilar = carrito.findIndex(producto => producto.id === id);
                carrito[indexSimilar].numeroUnidades ++;
            }else{
                productoAgregado.numeroUnidades = 1;
                carrito.push(productoAgregado)
            }


            console.log("carrito: ", carrito);

            //guardo en el local storage el producto almacenado
            localStorage.setItem('productos',JSON.stringify(carrito));
            cargarNumeroCarrito();

        }else{
            //los datos del localstorage los guardo en el array para que no se resete en 0 al cargar la pagina
            carrito = dato;
            const productoAgregado = productos.find(producto => producto.id === id);
            //guardo el producto agregado en el array carrito

            if(carrito.some(producto => producto.id === id)){
                //el id tiene duplicado
                //aumentare el numeroUnidades
                const indexSimilar = carrito.findIndex(producto => producto.id === id);
                carrito[indexSimilar].numeroUnidades ++;
            }else{
                productoAgregado.numeroUnidades = 1;
                carrito.push(productoAgregado)
            }


            console.log("carrito: ", carrito);


            //esto es para no tener duplicados
            let set = new Set(carrito.map(JSON.stringify));
            let arrSinDuplicados = Array.from(set).map(JSON.parse);
            console.log("dato no repetidos: ", arrSinDuplicados);

            //guardo en el local storage los productos almacenado
            localStorage.setItem('productos',JSON.stringify(arrSinDuplicados));
            cargarNumeroCarrito();
        }

    }else{


        const productoAgregado = productos.find(producto => producto.id === id);
        //guardo el producto agregado en el array carrito

        if(carrito.some(producto => producto.id === id)){
            //el id tiene duplicado
            //aumentare el numeroUnidades
            const indexSimilar = carrito.findIndex(producto => producto.id === id);
            carrito[indexSimilar].numeroUnidades ++;
        }else{
            productoAgregado.numeroUnidades = 1;
            carrito.push(productoAgregado)
        }

        console.log("carrito: ", carrito);


        //esto es para no tener duplicados
        let set = new Set(carrito.map(JSON.stringify));
        let arrSinDuplicados = Array.from(set).map(JSON.parse);
        console.log("dato no repetidos: ", arrSinDuplicados);
        //guardo en el local storage los producto almacenado
        localStorage.setItem('productos',JSON.stringify(arrSinDuplicados));
        cargarNumeroCarrito();
    }

    // localStorage.clear();
}




document.addEventListener("DOMContentLoaded", cargarAllProducts);
abrigos_products.addEventListener("click",cargarAbrigos);
AllProducts.addEventListener("click",cargarAllProducts);
camiseta_products.addEventListener("click",cargarCamisetas);
pantalones_products.addEventListener("click",cargarPantalones);


document.addEventListener("DOMContentLoaded", cargarNumeroCarrito);
