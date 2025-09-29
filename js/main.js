// Creamos las constantes globales para los elementos principales
const foto = document.getElementById('foto-url');
const nombre = document.getElementById('nombre');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const km = document.getElementById('km-car');
const precio = document.getElementById('precio');
const contCards = document.getElementById('cont-card');
const form = document.getElementById('vehiculo-form');
const sideBar = document.getElementById('side-bar');
const btnCar = document.getElementById('btn-shop');
const contShop = document.getElementById('content-cars');
const total = document.getElementById('total-carrito');

// Creamos la funcion que nos permite crear una nueva tarjeta a partir del formulario
// Toda etiqueta que vamos a crear es a partir de la etiqueta pre-existente
function createVehicleCard(fotoInp, nombreInp, marcaInp, modeloInp, kmInp, precioInp) {
    // Creamos el nodo padre
    const item = document.createElement('div');
    item.classList.add('col-md-6', 'item-vehiculo');

    const div2 = document.createElement('div');
    div2.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.setAttribute('src', fotoInp);
    img.classList.add('card-img-top', 'w-100');
    img.setAttribute('alt', 'Foto vehículo');

    const div3 = document.createElement('div');
    div3.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = nombreInp;

    const h4N = document.createElement('h4');
    h4N.classList.add('card-subtitle', 'text-muted');
    h4N.textContent = marcaInp;

    const h4M = document.createElement('h4');
    h4M.classList.add('card-text');
    h4M.textContent = modeloInp;

    const h4K = document.createElement('h4');
    h4K.classList.add('card-text');
    h4K.textContent = kmInp;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = precioInp;

    const div4 = document.createElement('div');
    div4.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('btn', 'btn-success');
    buyBtn.textContent = 'Añadir al Carriro';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.textContent = 'Eliminar';

    //Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarjeta
    item.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3)
    div3.appendChild(h3);
    div3.appendChild(h4N);
    div3.appendChild(h4M);
    div3.appendChild(h4K);
    div3.appendChild(h2);
    div3.appendChild(div4)
    div4.appendChild(buyBtn);
    div4.appendChild(deleteBtn);

    return item;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fotoInp = foto.value.trim() || 'https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/grsupra/2026/hero-image.png';
    const nombreInp = nombre.value.trim();
    const marcaInp = marca.value.trim();
    const modeloInp = modelo.value.trim();
    const kmInp = km.value.trim();
    const precioInp = precio.value.trim();

    if (nombreInp == "" || marcaInp == "" || modeloInp == "" || kmInp == "" || precioInp == "") {
        alert('No se puede crear una tarjeta vacia');
    } else {
        const newCard = createVehicleCard(fotoInp, nombreInp, marcaInp, modeloInp, kmInp, precioInp);
        
        contCards.appendChild(newCard);

        eventsItemCard(newCard)

        const nuevoCards = {
            nombre: nombreInp,
            marca : marcaInp,
            modelo: modeloInp,
            km: kmInp,
            precio: precioInp

        }
        const carsGuardados = JSON.parse(localStorage.getItem('carros')) || [];
        carsGuardados.push(nuevoCards)

        localStorage.setItem('carros' , JSON.stringify(carsGuardados))
        form.reset();
    }

});

function eventsItemCard(item) {
    const buyBtn = item.querySelector('.btn-success');
    const deleteBtn = item.querySelector('.btn-danger');

    buyBtn.addEventListener('click', () => {
        const fotoInp = item.querySelector('img');
        fotoInp.getAttribute('src');

        const nombreInp = item.querySelector('h3').textContent;

        const marcaInp = item.querySelector('h4').textContent;

        const precioInp = item.querySelector('h2').textContent;

        const newShop = createCarShop(fotoInp, nombreInp, marcaInp, precioInp);

        contShop.appendChild(newShop);

        eventsCard(newShop);

        const precioN = parseFloat(precioInp);

        const suma = precioN;

        finalShop(suma);

        alert('¡Felicidades! Has comprado este vehículo. Pronto nos pondremos en contacto contigo.')
    })

    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}

btnCar.addEventListener('click', () => {
    if (!sideBar.classList.contains('active')) {
        sideBar.classList.add('active');
    } else {
        sideBar.classList.toggle('active');
    }
})

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
function createCarShop(fotoInp, nombreInp, marcaInp,precioInp) {
   

    const item = {
        foto: fotoInp.getAttribute('src'),
        nombre: nombreInp,
        marca: marcaInp,
        precio: precioInp
    };

    carrito.push(item);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const card = document.createElement('div');
    card.classList.add('row');
    card.classList.add('shop')

    const col1 = document.createElement('div');
    col1.classList.add('col-md-4');

    const img = document.createElement('img');
    img.setAttribute('src', fotoInp.getAttribute('src'));
    img.setAttribute('alt', 'Foto Carro');

    const div1 = document.createElement('div');
    div1.classList.add('col-md-8');

    const h3 = document.createElement('h3');
    h3.textContent = nombreInp;

    const h4 = document.createElement('h4');
    h4.textContent = marcaInp;
    
    const div2 = document.createElement('div');
    div2.classList.add('row', 'col-down');

    const div3 = document.createElement('div');
    div3.classList.add('col-md-6');

    const h3P = document.createElement('h3');
    h3P.classList.add('precio-shop');
    h3P.textContent = precioInp;

    const div4 = document.createElement('div');
    div4.classList.add('col-md-6');

    const btnD = document.createElement('button');
    btnD.textContent = 'x';

    card.appendChild(col1);
    card.appendChild(div1);
    col1.appendChild(img);
    div1.appendChild(h3);
    div1.appendChild(h4);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div3.appendChild(h3P);
    div4.appendChild(btnD);

    return card;
}

function eventsCard(card) {
    const btnD = card.querySelector('button');
    btnD.addEventListener('click', () => {
        card.remove()
        const precioText = card.querySelector('.precio-shop').textContent;
        const resta = parseFloat(precioText);
        precioA -= resta;
        total.textContent = '$' + precioA;
    })
}

let precioA = 0;

function finalShop(precioT) {
    precioA += precioT;
    total.textContent = '$' + precioA;
}
