import { prisma } from './lib/prisma'

const main = async () => {
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: `user_name_${i}`
            }
        })
    }
    for (let i = 0; i < 10; i++) {
        await prisma.post.create({
            data: {
                title: `HALO${i}`,
                content: `Awesome HALO${i}!`,
                authorId: i + 1,       
            }
        })    
    }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
