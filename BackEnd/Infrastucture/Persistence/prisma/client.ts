
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // 👈 solo se crea una vez

export default prisma; // 👈 podés importarlo donde quieras
