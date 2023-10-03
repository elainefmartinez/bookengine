import {gql} from'apollo-server-express';

export const GET_ME = gql`
    query me {
        _id
    }
`;



//queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.
