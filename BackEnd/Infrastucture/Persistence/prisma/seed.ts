import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Roles base
  await prisma.role.createMany({
    data: [
      { nombre: 'ADMIN' },
      { nombre: 'NEGOCIO' },
      { nombre: 'EMPLEADO' },
    ],
  });

  // Módulos base
  await prisma.modulo.createMany({
    data: [
      { nombre: 'Inventario', clave: 'inventario' },
      { nombre: 'Soporte', clave: 'soporte' },
      { nombre: 'Reportes', clave: 'reportes' },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
