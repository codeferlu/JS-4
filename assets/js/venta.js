const propiedades_venta = [ 
    {
    nombre: 'Apartamento 1',
    src: 'src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: 'Bustamante 82, London',
    habitaciones: 2,
    costo: 0,
    precio: 3000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento 2',
    src: 'src="https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona comercial',
    ubicacion: 'Calle el espejo bonito 1234, Miami',
    habitaciones: 5,
    costo: 0,
    precio: 2000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento 3',
    src: 'src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona de catastrofe',
    ubicacion: 'Ovnis 2435, Santiago',
    habitaciones: 3,
    costo: 0,
    precio: 5000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento 4',
    src: 'src="./assets/img/departamento2.jpg""',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona apocaliptica',
    ubicacion: 'Santa mamita, Tijuana',
    habitaciones: 4,
    costo: 0,
    precio: 1000,
    smoke: false,
    pets: true,
    },
    
]
var NewArray = propiedades_venta.slice(0,4);
var nav = document.getElementById("nav");
nav.classList.add("main-section");


const contenedorCards = document.getElementById('propiedades');
let cardsHTML = '';

NewArray.forEach((propiedad) => {
    let petsHTML = '';
    let smokeHTML = '';

    if (propiedad.pets) {
        petsHTML = `<i class="fa-solid fa-dog"></i><p class="si">Mascotas permitidas</p>`;
    } else {
        petsHTML = `<i class="fa-solid fa-ban"></i><p class="no">No se permiten mascotas</p>`;
    }

    if (propiedad.smoke) {
        smokeHTML = `<i class="fa-solid fa-smoking"></i><p class="si">Se permite fumar</p>`;
    } else {
        smokeHTML = `<i class="fa-solid fa-ban-smoking"></i><p class="no">No se permite fumar</p>`;
    }

    cardsHTML += `
    <div class="card">
    <img ${propiedad.src}/>
    <div class="card-body">
    <h5 class="card-title">
        ${propiedad.nombre}
    </h5>
    <p class="card-text">
        ${propiedad.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
    </p>
    <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones 
        
    </p>
    <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
            ${petsHTML} ${smokeHTML}
        </div>
        </div>
    `;
});


contenedorCards.innerHTML = cardsHTML;

