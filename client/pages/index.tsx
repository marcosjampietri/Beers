import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import BeerCards from "../components/home/BeerCards";
import SearchBar from "../components/Search";

const Home: NextPage = () => {
    return (
        <div data-test="comp-home">
            <Head>
                <title>HTE FABULOUS BEERS</title>
                <meta name="description" content="Generated for the goods" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <SearchBar />
                <BeerCards />
            </main>
        </div>
    );
};

export default Home;
