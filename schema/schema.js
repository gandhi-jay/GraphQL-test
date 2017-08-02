const graphQL = require("graphql");
const _ = require("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphQL;

const users = [
    { id: "123", firstName: "Max Payne", age: 23 },
    { id: "987", firstName: "Vaas", age: 32 },
    { id: "159", firstName: "Wolfgang Mozzart", age: 45 },
];

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            // Goes to DB and find data
            resolve(parentValue, args) {
                console.log(parentValue);
                return _.find(users, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});