/*
  Warnings:

  - Added the required column `clienteId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoeventoId` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "clienteId" INTEGER NOT NULL,
ADD COLUMN     "tipoeventoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TipoEvento" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "recaudacion" TEXT NOT NULL,

    CONSTRAINT "TipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "nombre_cliente" TEXT NOT NULL,
    "direccion_cliente" TEXT NOT NULL,
    "numero_cliente" TEXT NOT NULL,
    "correo_cliente" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_tipoeventoId_fkey" FOREIGN KEY ("tipoeventoId") REFERENCES "TipoEvento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
