import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const URL = import.meta.env.VITE_URL;

const client = new ApolloClient({
  uri: `${URL}graphql`,
  cache: new InMemoryCache({ addTypename: false }),
});

const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
