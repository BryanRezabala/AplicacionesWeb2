import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//crear evento para ingresar los datos a las tablas
const createEvento = async () => {
  const evento = await prisma.evento.create({
    data: {
      fechaEvento: new Date(),
      horaEvento: '15:00',
      descripcionEvento: 'Descripción del evento',
      asientosEvento: 100,
      estadoEvento: 'Activo',
      tipoEvento: {
        create: {
          nombreTipoEvento: 'Concierto',
          descripcionTipoEvento: 'Concierto en vivo',
        },
      },
      reservas: {
        create: {
          fechaReserva: new Date(),
          horaReserva: '14:30',
          descripcionReserva: 'Reserva para el evento',
          asientosReserva: 2,
          precioReserva: 50.0,
        },
      },
    },
  });
  console.log(evento);
};
//mostrar el query de los eventos ingresados
const queryEventos = async () => {
  const eventos = await prisma.evento.findMany({
    include: {
      reservas: true,
      tipoEvento: true,
    },
  });
  console.log(eventos);
};
//actualizar las tablas
const updateEvento = async () => {
  const updatedEvento = await prisma.evento.update({
    where: {
      id: 1,
    },
    data: {
      descripcionEvento: 'Nueva descripción del evento',
    },
  });
  console.log(updatedEvento);
};
//borrar el evento con id 1
const deleteEvento = async () => {
   const deletedEvento = await prisma.evento.delete({
     where: {
       id: 1,
     },
   });
   console.log(deletedEvento);
 };

(async () => {
  // await createEvento();
  await queryEventos();
})();
