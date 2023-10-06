-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "fechaEvento" TIMESTAMP(3) NOT NULL,
    "horaEvento" TEXT NOT NULL,
    "descripcionEvento" TEXT NOT NULL,
    "asientosEvento" INTEGER NOT NULL,
    "estadoEvento" TEXT NOT NULL,
    "idTipoEvento" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservaEvento" (
    "id" SERIAL NOT NULL,
    "fechaReserva" TIMESTAMP(3) NOT NULL,
    "horaReserva" TEXT NOT NULL,
    "descripcionReserva" TEXT NOT NULL,
    "asientosReserva" INTEGER NOT NULL,
    "precioReserva" DOUBLE PRECISION NOT NULL,
    "idEvento" INTEGER NOT NULL,

    CONSTRAINT "ReservaEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoEvento" (
    "id" SERIAL NOT NULL,
    "nombreTipoEvento" TEXT NOT NULL,
    "descripcionTipoEvento" TEXT NOT NULL,

    CONSTRAINT "TipoEvento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_idTipoEvento_fkey" FOREIGN KEY ("idTipoEvento") REFERENCES "TipoEvento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaEvento" ADD CONSTRAINT "ReservaEvento_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
