/*
  Warnings:

  - A unique constraint covering the columns `[correo]` on the table `Organizadores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Organizadores_correo_key" ON "Organizadores"("correo");
