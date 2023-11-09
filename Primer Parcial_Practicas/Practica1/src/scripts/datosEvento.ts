//Acá hacemos la importación de archivos o librerias
import { IEvento } from "../interfaces/IEvento";

//Creamos una función para mostrar el arreglo
export function  datosEvento (evento: IEvento[])
{
    //Usamos el ForIn
    for (let i = 0; i < 3; i++){
        for (const indice in evento){
            const eventos = evento[indice];
            console.log("----------",i)
            console.log("Ciclo forIn #",i)
            console.log("ID del Evento:", eventos.id_evento);
            console.log("fecha del Evento:", eventos.fecha_evento);
            console.log("hora inicio del Evento:", eventos.hora_ini_evento);
            console.log("hora fin del Evento:", eventos.hora_fin_evento);
            console.log("descripcion del Evento:", eventos.descripcion_evento);
            console.log("----------",i);
        }
    }
}
