let queryCat = location.search;
// console.log(queryCat);
let queryStringCat = new URLSearchParams(queryCat);
let category = queryStringCat.get("categories");
console.log(category);

fetch(`https://fakestoreapi.com/products/category/${category}`)
.then(function(response){
    return response .json();
})
.then(function(data){
    console.log(data);
    let arrayCategorias = data;
    let categoriaProductos = document.querySelector('.subcontainerCategory')
    let productosCategoria = [];

    for (let i = 0; i < arrayCategorias.length; i++) {
        productosCategoria += `<div>
                               <img src="${arrayCategorias[i].image}" alt="${arrayCategorias[i].title}">
                               <h4>${arrayCategorias[i].title}</h4>
                               <p>${arrayCategorias[i].description}</p>
                               <p>Precio: $${arrayCategorias[i].price}</p>
                               <a href="./producto.html?id=${arrayCategorias[i].id}">Ver más</a>
                               </div>`
    }

    categoriaProductos.innerHTML = productosCategoria;

    let ulHeaderCat = document.querySelector('.ulheader');
    ulHeaderCat.innerHTML = `<li><a href="./category.html?categories=${arrayCategorias.category="jewelery"}">Accesorios</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="electronics"}">Electronica</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="men's clothing"}">Ropa hombre</a></li>
                          <li><a href="./category.html?categories=${arrayCategorias.category="women's clothing"}">Ropa mujer</a></li>`


})
.catch(function(e){
    console.log(e);
})
