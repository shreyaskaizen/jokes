import Head from "next/head";
import Header from "../../src/component.Header";
import TopBackground from "../../src/component.TopBackground";
import HorizontalSpacer from "../../src/component.HorizontalSpacer";
import Joke from "../../src/component.Joke";
import Settings from "../../src/component.Settings";
import Footer from "../../src/component.Footer";
import randomJokeIdGenerator from "../../utils/randomJokeIdGenerator";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";

function Jokes() {
    return;
}

export async function getStaticProps({ params }: any) {
    const infoResponse = await fetch("https://v2.jokeapi.dev/info");
    const info = await infoResponse.json();
    const [englishJokesLowerLimit, englishJokesUpperLimit] =
        info.jokes.idRange.en;
    const initialJokeId = randomJokeIdGenerator(
        englishJokesLowerLimit,
        englishJokesUpperLimit
    );

    return {
        redirect: {
            destination: `/jokes/${initialJokeId}`,
            permanent: false,
        },
    };
}

export default Jokes;
