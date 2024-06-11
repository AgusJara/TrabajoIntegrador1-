let queryString = location.search;
console.log(queryString);
let queryStringObjeto = new URLSearchParams(queryString);
let id = queryStringObjeto.get("id");
console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function(res){
        return res .json();
})
    .then(function(data){
    console.log(data);
    
    let nombreProducto = document.querySelector('.container_producto h1');
    let imagenProducto = document.querySelector('.container_producto img');
    let descripcionProducto = document.querySelector('.detalle1 h4');
    let precioProducto = document.querySelector('.detalle2 h2');
    let categoriaProducto = document.querySelector('.detalle2 a');

    nombreProducto.innerText = data.title;
    imagenProducto.src = data.image;
    imagenProducto.alt = `Imagen de producto${data.title}`;
    descripcionProducto.innerText += data.description;
    precioProducto.innerText = `Precio: $${data.price}`;
    categoriaProducto.innerText = data.category;
    categoriaProducto.href = `./category.html?categories=${data.category}`;
})
    .catch(function(e){
        console.log(e);
    })

fetch('https://fakestoreapi.com/products')
.then(function (response) {
    return response .json();
})
.then(function(data){
    console.log(data);
    let arrayCategoriasProductos = data;
    let ulHeader = document.querySelector('.ulheader');
        ulHeader.innerHTML = `<li><a href="./category.html?categories=${arrayCategoriasProductos.category="jewelery"}">Accesorios</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="electronics"}">Electronica</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="men's clothing"}">Ropa hombre</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="women's clothing"}">Ropa mujer</a></li>`
})

//==================CATEGORIAS-------------------//

