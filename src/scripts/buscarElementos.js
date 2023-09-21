//Funcion para buscar el elemento por id utilizando un callback
function buscarPorId(datos, id_Eventos, callback) {
    const elementoEncontrado = datos.find(elemento => elemento.id_Eventos === id_Eventos);
    callback(elementoEncontrado);
}
  
//Funcion de callback que muestra los elementos que encuentra
  function mostrarElementosReserva(elemento) {
    if (elemento) {
      console.log("----------------------");
      console.log("Elementos encontrados:");
      console.log("----------------------");
      console.log("-ID:", elemento.id_Eventos);
      console.log("-fecha del evento:", elemento.fecha_evento);
      console.log("-Inicio del evento:",elemento.hora_ini_evento);
      console.log("-Fin del evento:",elemento.hora_fin_evento);
      console.log("-Descripción del evento:",elemento.descripcion_evento);
      console.log("----------------------");
    } else {
      console.log("Ningun elemento encontrado!!!!!!!");
    }
  }
  
  // Exporta las funciones para que estén disponibles para otros archivos
  module.exports = {
    buscarPorId,
    mostrarElementosReserva
  };
  