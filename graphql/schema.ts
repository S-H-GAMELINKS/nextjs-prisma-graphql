import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    scalar DateTime

    type Post {
        id: Int
        title: String
        content: String
        author: User
        authorId: Int
        createdAt: DateTime
        updatedAt: DateTime
    }

    input PostInput {
        title: String!
        content: String!
        authorId: Int!
    }

    type User {
        id: Int
        name: String
        posts: [Post]
        createdAt: DateTime
        updatedAt: DateTime
    }

    input UserInput {
        name: String!
    }

    type Query {
        getUsers: [User]!
        getPosts: [Post]!
    }

    type Mutation {
        createUser(input: UserInput): User!
        createPost(input: PostInput): Post!
    }
`