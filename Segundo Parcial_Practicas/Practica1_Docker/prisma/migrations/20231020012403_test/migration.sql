-- CreateTable
CREATE TABLE "Organizadores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Organizadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TEXT,
    "horaini" TEXT NOT NULL,
    "horafin" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "finalidad" TEXT NOT NULL,
    "organizadorId" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipoentradas" (
    "id" SERIAL NOT NULL,
    "vip" TEXT NOT NULL,
    "general_derecho" TEXT NOT NULL,
    "general_central" TEXT NOT NULL,
    "general_izquierdo" TEXT NOT NULL,

    CONSTRAINT "Tipoentradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ventaentrada" (
    "id" SERIAL NOT NULL,
    "precio" TEXT NOT NULL,
    "metodo_pago" TEXT NOT NULL,
    "reserva" TEXT NOT NULL,
    "tipo_entrada" TEXT NOT NULL,
    "precio_total" TEXT NOT NULL,

    CONSTRAINT "Ventaentrada_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_organizadorId_fkey" FOREIGN KEY ("organizadorId") REFERENCES "Organizadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
