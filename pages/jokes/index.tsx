import randomJokeIdGenerator from "../../utils/randomJokeIdGenerator";

function Jokes() {
    return;
}

export async function getServerSideProps({ params }: any) {
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
            permanent: true,
        },
    };
}

export default Jokes;
