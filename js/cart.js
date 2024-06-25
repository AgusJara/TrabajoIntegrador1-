let recuperoStorage = localStorage.getItem("miCarrito");
let storageToParse = JSON.parse(recuperoStorage);
let contenedor = document.querySelector('main')
let contenedor_cart = document.querySelector('.container_producto')
let finalizar = document.querySelector('.finalizar')

console.log(recuperoStorage);


// if (recuperoStorage !== null){
//     storageToParse.forEach(id => {
//         fetch(`https://fakestoreapi.com/products/${id}`)
//                 .then(res=>res.json())
//                 .then(json=>{
//                     let product = `
//                     <div class="productocart">
//                         <img src="${json.image}" alt="">
//                         <div class='subproductocart'>
//                             <h1>${json.title}</h1>
//                             <p>precio: ${json.price}</p>
//                         </div>
//                     </div>
//                     `;
    
//                     contenedor_cart.innerHTML += product
//                 })
//     })
//     finalizar.addEventListener('click', () => {
//         localStorage.removeItem('miCarrito')
//         contenedor_cart.innerHTML = 'Su carrito esta vacio';
//         alert('Gracias por su compra')
//     })
// } else {
//     contenedor_cart.innerHTML = 'Su carrito esta vacio'
// }



if (recuperoStorage !== null) {
    for (let i = 0; i < storageToParse.length; i++) {
        let id = storageToParse[i];
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(json) {
                var product = `
                <div class="productocart">
                    <img src="${json.image}" alt="">
                    <div class='subproductocart'>
                        <h1>${json.title}</h1>
                        <p>precio: ${json.price}</p>
                    </div>
                </div>
                `;
                contenedor_cart.innerHTML += product;
            });
    }

    finalizar.addEventListener('click', function() {
        localStorage.removeItem('miCarrito');
        contenedor_cart.innerHTML = 'Su carrito esta vacio';
        alert('Gracias por su compra');
    });
} else {
    contenedor_cart.innerHTML = 'Su carrito esta vacio';
}



fetch('https://fakestoreapi.com/products')
.then(function (response) {
    return response .json();
})
.then(function(data){
    console.log(data);
    let arrayCategoriasProductos = data;
    let ulHeaderCat = document.querySelector('.ulheader');
    ulHeaderCat.innerHTML = `<li><a href="./category.html?categories=${arrayCategoriasProductos.category="jewelery"}">Accesorios</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="electronics"}">Electronica</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="men's clothing"}">Ropa hombre</a></li>
                          <li><a href="./category.html?categories=${arrayCategoriasProductos.category="women's clothing"}">Ropa mujer</a></li>`


})
