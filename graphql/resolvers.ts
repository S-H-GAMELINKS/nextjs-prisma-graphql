export const resolvers = {
    Query: {
        getUsers: (parent, args, context) => {
            return context.prisma.user.findMany({
                include: {
                    posts: true
                }
            });
        },
        getPosts: async (parent, args, context) => {
            return context.prisma.post.findMany({ 
                include: {
                    author: true
                }
            });
        }
    },
    Mutation: {
        createUser: (parent, args, context) => {
            console.log(args.input.name);
            return context.prisma.user.create({
                data: {
                    name: args.input.name,
                }
            });
        },
        createPost: (parent, args, context) => {
            return context.prisma.post.create({
                data: {
                    title: args.input.title,
                    content: args.input.content,
                    authorId: args.input.authorId,
                }
            })
        }
    }
}