import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oibyzj0alg01xle3a7ge6c/master",
  cache: new InMemoryCache(),
});
