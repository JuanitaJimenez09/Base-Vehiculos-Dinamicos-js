
/*CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES*/

const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const km = document.getElementById('km');
const precio = document.getElementById('precio');
const addbtn = document.getElementById('add-btn');
const contCards = document.getElementById('cont-card');
const form = document.getElementById('form');
/*CREAMOS LA FUNCION QUE NOS PERMITE CREAR UNA NAUEVA TAREA A PARTIR DEL FORMULARIO*/

function createVehicle(fotoInp,nombreInp,marcaInp,modeloInp,kmInp,precioInp){
    const item = document.createElement('div');
    item.classList.add('col-md-6' , 'item-vehiculos');

    const div2 = document.createElement('div');
    div2.classList.add('car' , 'h-100');

    const img =document.createElement('img');
    img.setAttribute('src', fotoInp);
    img.classList.add('card-img-top' , 'w-100');
    img.setAttribute('alt', 'Foto vehículo')

    const div3 = document.createElement('div');
    div3.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = nombreInp;

    const h4N = document.createElement('h4');
    h4N.classList.add('card-subtitle',  'text-muted');
    h4N.textContent = marcaInp;

    const h4M = document.createElement('h4');
    h4M.classList.add('card-text');
    h4M.textContent = modeloInp;
    
    const h4K = document.createElement('h4');
    h4K.classList.add('card-text');
    h4K.textContent =kmInp;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = precioInp;

    const div4 = document.createElement('div');
    div4.classList.add('d-flex' ,'justify-content-between' , 'mt-3');

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('btn' , 'btn-success');
    buyBtn.textContent ='comprar';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.textContent = 'eliminar';

    /*ESMABLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TARJETA */
    item.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div3.appendChild(h3),
    div3.appendChild(h4N);
    div3.appendChild(h4M);
    div3.appendChild(h4K);
    div3.appendChild(h2);
    div3.appendChild(div4)
    div4.appendChild(buyBtn);
    div4.appendChild(deleteBtn);

    return item;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const fotoInp= foto.value.trim();
    const nombreInp= nombre.value.trim();
    const marcaInp= marca.value.trim();
    const modeloInp= modelo.value.trim();
    const kmInp= km.value.trim();
    const precioInp= precio.value.trim();

    if (fotoInp == "" || nombreInp == "" || marcaInp == "" || modeloInp == "" || kmInp == "" || precioInp == "") {
        alert('No se puede crear una tarjeta vacia')
       
    } else {
        const newCard = createVehicle(fotoInp, nombreInp, marcaInp, modeloInp, kmInp, precioInp);

        contCards.appendChild(newCard);

        foto.value = "";
        nombre.value = "";
        marca.value = "";
        modelo.value = "";
        km.value = "";
        precio.value = "";

        

        

        
        
    }

});
