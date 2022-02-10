import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    scalar DateTime

    type Post {
        id: Int
        title: String
        content: String
        auther: User
        autherId: Int
        createdAt: DateTime
        updatedAt: DateTime
    }

    type User {
        id: Int
        name: String
        posts: [Post]
        createdAt: DateTime
        updatedAt: DateTime
    }

    type Query {
        getUsers: [User]!
        getPosts: [Post]!
    }
`