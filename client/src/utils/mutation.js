import {gql} from '@apollo/client';
// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
    mutation loginUser($username: String!){
        loginUser(username: $username) {
            __id

        }
    }
    `;

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
    mutation addUser($username: String!){
        addUser(username: $username) {
            __id

        }
    }
    `;



// SAVE_BOOK will execute the saveBook mutation.

export const SAVE_BOOK = gql`
    mutation saveBook($username: String!){
        saveBook(username: $username) {
            __id

        }
    }
    `;


// REMOVE_BOOK will execute the removeBook mutation.

export const REMOVE_BOOK = gql`
    mutation removeBook($username: String!){
        removeBook(username: $username) {
            __id

        }
    }
    `;
