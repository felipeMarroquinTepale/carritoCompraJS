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
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
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
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
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
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];





const AllProducts = document.getElementById("All-products");
const global = document.getElementById("global");
const abrigos_products = document.getElementById("abrigos-products");
const pantalones_products = document.getElementById("pantalones-products");
const camiseta_products = document.getElementById("camiseta-products");

const numero_products = document.getElementById("numero-products");


let productsGuardados = [];


function cargarAllProducts () {

    AllProducts.classList.add("active");
    abrigos_products.classList.remove("active");
    camiseta_products.classList.remove("active");
    pantalones_products.classList.remove("active")



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


function guardarProducto(id){
    console.log("localstorage",localStorage.getItem("productos"))
    productsGuardados.push(id)
    localStorage.setItem("productos",productsGuardados);
    console.log("productosGuardadosArray: ",productsGuardados);
}




document.addEventListener("DOMContentLoaded", cargarAllProducts);
abrigos_products.addEventListener("click",cargarAbrigos);
AllProducts.addEventListener("click",cargarAllProducts);
camiseta_products.addEventListener("click",cargarCamisetas);
pantalones_products.addEventListener("click",cargarPantalones);
