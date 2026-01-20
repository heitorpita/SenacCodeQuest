
import pkg from '@prisma/client'
import { Prismapg } from '@prisma/adapter-pg'
import { connectionString } from 'pg/lib/defaults'
const { PrismaClient } = pkg

const pgAdapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

const prisma = new PrismaClient({

    adapter: pgAdapter,


})

export default prisma;