import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.URL,
  cache: new InMemoryCache(),
  headers:{
    "Athorization": "Bearer"
  },
});
