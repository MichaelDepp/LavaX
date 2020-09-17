import Head from "next/head"
import "../styles/style.css"
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://api.graphql.jobs/"
    })
})

function App({ Component, pageProps }) {
    console.log("Hello from APP")

    return (
        <div>
            <Head>
                <title>LavaX</title>
                <link rel="shortcut icon" href="./assets/favicon.png" />
            </Head>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    )
}

export default App;