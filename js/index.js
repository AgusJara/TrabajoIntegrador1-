fetch ('https://fakestoreapi.com/products')
    .then(function (res) {
        return res .json();
    })
    .then(function (data) {
        // console.log(data);

//<---------------------Seccion Accesorios-------------------->//

let arrayDeProductos = data;
let divSeccionAcc = document.querySelector('.subcontainer');
let accesorios = [];
        // console.log(arrayDeProductos);

    for (let i = 4; i < 8; i++) {
            accesorios += `<div>
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}">
                        <h4>${arrayDeProductos[i].title}</h4>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                        </div>`
    }     

        divSeccionAcc.innerHTML = accesorios;

//<---------------------Seccion Tecnologia-------------------->//

        

//<---------------------Seccion Ropa Hombre-------------------->//

let divSeccionRopaH = document.querySelector('.subcontainer3');
        let ropaH = [];
        console.log(arrayDeProductos);

        for (let i = 0; i < 4; i++) {
            ropaH += `<div>
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}">
                        <h4>${arrayDeProductos[i].title}</h4>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                        </div>`
    }     

        divSeccionRopaH.innerHTML = ropaH;

//<---------------------Seccion Ropa mujer-------------------->//

let divSeccionRopaM = document.querySelector('.subcontainer4');
let ropaM = [];
console.log(arrayDeProductos);

for (let i = 14; i < 20; i++) {
    ropaM += `<div>
                <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}">
                <h4>${arrayDeProductos[i].title}</h4>
                <p>${arrayDeProductos[i].description}</p>
                <p>Precio: $${arrayDeProductos[i].price}</p>
                <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                </div>`
    }

        divSeccionRopaM.innerHTML = ropaM;

let ulHeader = document.querySelector('.ulheader');
    ulHeader.innerHTML = `<li><a href="./category.html?categories=${arrayDeProductos.category="jewelery"}">Accesorios</a></li>
                          <li><a href="./category.html?categories=${arrayDeProductos.category="electronics"}">Electronica</a></li>
                          <li><a href="./category.html?categories=${arrayDeProductos.category="men's clothing"}">Ropa hombre</a></li>
                          <li><a href="./category.html?categories=${arrayDeProductos.category="women's clothing"}">Ropa mujer</a></li>`


    })
    .catch(function(e){
        console.log(e);
    })