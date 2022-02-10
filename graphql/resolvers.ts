export const resolvers = {
    Query: {
        getUsers: () => {
            return [
                {
                    id: 1,
                    name: 'John',
                    posts: []
                }
            ]
        },
        getPosts: () => {
            return [
                {
                    id: 1,
                    title: 'HALO',
                    content: 'Awesomw HALO',
                    auther: {
                        id: 1,
                        name: 'John',
                    }
                }
            ]
        }
    }
}