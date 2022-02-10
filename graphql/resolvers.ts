export const resolvers = {
    Query: {
        getUsers: (parent, args, context) => {
            return context.prisma.user.findMany();
        },
        getPosts: (parent, args, context) => {
            return context.prisma.post.findMany();
        }
    }
}