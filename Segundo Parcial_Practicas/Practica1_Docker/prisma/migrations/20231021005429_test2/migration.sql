/*
  Warnings:

  - You are about to drop the column `general_central` on the `Tipoentradas` table. All the data in the column will be lost.
  - You are about to drop the column `general_derecho` on the `Tipoentradas` table. All the data in the column will be lost.
  - You are about to drop the column `general_izquierdo` on the `Tipoentradas` table. All the data in the column will be lost.
  - You are about to drop the column `vip` on the `Tipoentradas` table. All the data in the column will be lost.
  - You are about to drop the `Ventaentrada` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ventaentradaId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Tipoentradas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Tipoentradas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ubicacion_entrada` to the `Tipoentradas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "ventaentradaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tipoentradas" DROP COLUMN "general_central",
DROP COLUMN "general_derecho",
DROP COLUMN "general_izquierdo",
DROP COLUMN "vip",
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "ubicacion_entrada" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ventaentrada";

-- CreateTable
CREATE TABLE "VentaEntrada" (
    "id" SERIAL NOT NULL,
    "precio" TEXT NOT NULL,
    "metodo_pago" TEXT NOT NULL,
    "reserva" TEXT NOT NULL,
    "precio_total" TEXT NOT NULL,
    "tipoentradaId" INTEGER NOT NULL,

    CONSTRAINT "VentaEntrada_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_ventaentradaId_fkey" FOREIGN KEY ("ventaentradaId") REFERENCES "VentaEntrada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentaEntrada" ADD CONSTRAINT "VentaEntrada_tipoentradaId_fkey" FOREIGN KEY ("tipoentradaId") REFERENCES "Tipoentradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
