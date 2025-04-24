/*
  Warnings:

  - Added the required column `direccion` to the `Comercio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comercio" ADD COLUMN     "direccion" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ComercioModulo" ADD COLUMN     "activadoPorId" TEXT;

-- AlterTable
ALTER TABLE "Modulo" ADD COLUMN     "descripción" TEXT NOT NULL DEFAULT 'Sin descripción';

-- AddForeignKey
ALTER TABLE "ComercioModulo" ADD CONSTRAINT "ComercioModulo_activadoPorId_fkey" FOREIGN KEY ("activadoPorId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
