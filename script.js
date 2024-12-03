//CARRUSEL DE PRODUCTOS DESTACADOS
const carouselTrack = document.querySelector(".carousel-track");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-track .featured-product").length;

function updateCarousel() {
  const width = carouselTrack.clientWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
  updateCarousel();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Ajusta el carrusel en caso de redimensionar la ventana
window.addEventListener("resize", updateCarousel);



//Script de Slider de productos---------------------------------------------------------------------


//SLIDER 1 (HELADOS)---------------

// Seleccion del contenedor del slider
const sliderContainer = document.querySelector(".productos-scroll");

let isDragging = false; // Estado de arrastre
let startX;             // Posición inicial del mouse al hacer clic
let scrollLeft;         // Posición inicial de desplazamiento del contenedor

// Evento al hacer clic y comenzar a arrastrar
sliderContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  sliderContainer.classList.add("active"); // Agrega una clase para efectos visuales (opcional)
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

// Evento al mover el mouse mientras se arrastra
sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // Sale si no se está arrastrando
  e.preventDefault();      // Evita la selección de texto u otros comportamientos no deseados
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // Ajusta la velocidad del desplazamiento
  sliderContainer.scrollLeft = scrollLeft - walk;
});

// Evento para finalizar el arrastre al soltar el botón
sliderContainer.addEventListener("mouseup", () => {
  isDragging = false;
  sliderContainer.classList.remove("active");
});

// Evento para detener el arrastre si el mouse sale del contenedor
sliderContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderContainer.classList.remove("active");
});



//SLIDER 2 (PAPELERIA)-----------------------


// Seleccion del contenedor del slider
const sliderContainer2 = document.querySelector(".productos-scroll2");

/*
let isDragging = false; // Estado de arrastre
let startX;             // Posición inicial del mouse al hacer clic
let scrollLeft;         // Posición inicial de desplazamiento del contenedor
*/

// Evento al hacer clic y comenzar a arrastrar
sliderContainer2.addEventListener("mousedown", (e) => {
  isDragging = true;
  sliderContainer2.classList.add("active"); // Agrega una clase para efectos visuales (opcional)
  startX = e.pageX - sliderContainer2.offsetLeft;
  scrollLeft = sliderContainer2.scrollLeft;
});

// Evento al mover el mouse mientras se arrastra
sliderContainer2.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // Sale si no se está arrastrando
  e.preventDefault();      // Evita la selección de texto u otros comportamientos no deseados
  const x = e.pageX - sliderContainer2.offsetLeft;
  const walk = (x - startX) * 1.5; // Ajusta la velocidad del desplazamiento
  sliderContainer2.scrollLeft = scrollLeft - walk;
});

// Evento para finalizar el arrastre al soltar el botón
sliderContainer2.addEventListener("mouseup", () => {
  isDragging = false;
  sliderContainer.classList.remove("active");
});

// Evento para detener el arrastre si el mouse sale del contenedor
sliderContainer2.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderContainer2.classList.remove("active");
});

//COMPORTAMIENTO DEL MODAL-------------------------------------------------------------------------

//variables
const reservationButton = document.getElementById('reservationButton');
const reservationModal = document.getElementById('reservationModal');
const closeModal = document.querySelector('.close');

// Abrir modal
reservationButton.addEventListener('click', () => {
  reservationModal.style.display = 'block';
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  reservationModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === reservationModal) {
      reservationModal.style.display = 'none';
  }
});


// REQUERIMIENTO DE EMAIL O TELEFONO---------------------------------------------------

const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('phone');

reservationModal.addEventListener('submit', (event) => {
  if (!emailInput.value && !telefonoInput.value) {
    event.preventDefault();
    alert('Por favor, ingresa tu correo electrónico o tu número de teléfono para recibir información acerca de su reservación.');
  }
});


