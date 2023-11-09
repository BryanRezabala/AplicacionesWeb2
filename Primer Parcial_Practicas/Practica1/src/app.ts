import { IEvento } from "./interfaces/IEvento";
import { datosEvento } from "./scripts/datosEvento";

//Definimos datos del arreglo
const datos: IEvento[] =
[
    //datos
    {
    id_evento: 1,
    fecha_evento: "2023-01-05",
    hora_ini_evento: "19:00 PM",
    hora_fin_evento: "23:00 PM",
    descripcion_evento: "Anime"
    },
];
//Se llama la funcion que tiene los datos del arreglo
datosEvento(datos);