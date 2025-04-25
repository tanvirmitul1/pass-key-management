// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
      password: 'securepassword123',
      posts: {
        create: [
          {
            title: 'Alice Post 1',
            content: 'Alice’s first blog post',
            published: true,
          },
          {
            title: 'Alice Post 2',
            content: 'Another post by Alice',
            published: false,
          },
        ],
      },
    },
  });

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob',
      password: 'bobsecurepassword',
      posts: {
        create: [
          {
            title: 'Bob Post',
            content: 'Bob’s only post',
            published: true,
          },
        ],
      },
    },
  });

  console.log('Seeding complete 🚀');
  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
