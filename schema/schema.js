const graphQL = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphQL;

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

            }
        }
    }
})