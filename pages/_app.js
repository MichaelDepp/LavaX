import Head from "next/head"
import "../styles/style.css"
import React, { useState } from "react"
import localStorage from "local-storage-fallback"
import { Job, FavJob } from "../models/Job"
import { onSnapshot } from "mobx-state-tree"
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

    const [value, setValue] = useState(
        localStorage.getItem('favjobs') || ''
    );
    const [list, setList] = useState(() => {
        if (value === "") {
            console.log("new list created")
            return FavJob.create()
        } else {
            return FavJob.create(JSON.parse(value))
        }
    });

    onSnapshot(list, snapshot => {
        console.log("list changed updated")
        localStorage.setItem("favjobs", JSON.stringify(snapshot))
    })

    return (
        <div>
            <Head>
                <title>LavaX</title>
                <link rel="shortcut icon" href="./assets/favicon.png" />
            </Head>
            <ApolloProvider client={client}>
                <Component {...pageProps} list={list} />
            </ApolloProvider>
        </div>
    )
}

export default App;