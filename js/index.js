fetch ('https://fakestoreapi.com/products')
    .then(function (res) {
        return res .json();
    })
    .then(function (data) {
        // console.log(data);
        let arrayDeAccesorios = data;
        let divSeccionAcc = document.querySelector('.subcontainer');
        let accesorios = [];
        console.log(arrayDeAccesorios);

        for (let i = 5; i < 8; i++) {
            accesorios += `<div>
                        <img src="${arrayDeAccesorios[i].image}" alt="${arrayDeAccesorios[i].title}">
                        <h4>${arrayDeAccesorios[i].title}</h4>
                        <p>${arrayDeAccesorios[i].description}</p>
                        <p>Precio: ${arrayDeAccesorios[i].price}</p>
                        <a href="./producto.html">Ver más</a>
                        </div>`
        }     

        divSeccionAcc.innerHTML = accesorios;
    })
    .catch(function(e){
        console.log(e);
    })