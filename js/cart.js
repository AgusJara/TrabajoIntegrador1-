let recuperoStorage = localStorage.getItem("miCarrito");
let storageToParse = JSON.parse(recuperoStorage);
let contenedor = document.querySelector('main')
let contenedor_cart = document.querySelector('.container_producto')
let finalizar = document.querySelector('.finalizar')

console.log(recuperoStorage);


if (recuperoStorage !== null){
    storageToParse.forEach(id => {
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>{
                    let product = `
                    <div class="productocart">
                        <img src="${json.image}" alt="">
                        <div class='subproductocart'>
                            <h1>${json.title}</h1>
                            <p>precio: ${json.price}</p>
                        </div>
                    </div>
                    `;
    
                    contenedor_cart.innerHTML += product
                })
    })
    finalizar.addEventListener('click', () => {
        localStorage.removeItem('miCarrito')
        contenedor_cart.innerHTML = 'Su carrito esta vacio';
        alert('Gracias por su compra')
    })
} else {
    contenedor_cart.innerHTML = 'Su carrito esta vacio'
}



