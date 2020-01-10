const graphql = require('graphql');
const _ = require('lodash');

const movies= [
    {
        id: '1',
        title: 'The Godfather',
        description: 'The aging patriarch of an organized',
        year: 1972
    },
    {
        id:'2',
        title:'Scarface',
        description: 'In Miami in 1980, a determined Cuban',
        year: 1980
    },
    {
        id:'3',
        title: 'Pult Fiction',
        description: 'The lives of two mob hitmen, a boxer, ..',
        year: 1994
    }
]

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        year: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movie:{
            type: MovieType,
            args: {id:{type: GraphQLString}},
            resolve(parent,args){
                //get data
                return _.find(movies, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});