// Importa las funciones desde funciones.js
const { buscarPorId, mostrarElementosReserva } = require('./src/scripts/buscarElemento');

// Ejemplo de uso de la función con un arreglo de elementos
const datos = [
    {
        id_evento: 1,
        fecha_evento: "2023-01-05",
        hora_ini_evento: "19:00 PM",
        hora_fin_evento: "23:00 pm",
        descripcion_evento: "Anime"
      },
    // Puedes agregar más objetos aquí si lo deseas
  ];
  
  // Llama a la función buscarElementoPorId con un ID y el callback de mostrarElemento
  buscarPorId(datos, 1, mostrarElementosReserva);