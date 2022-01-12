import Head from "next/head";
import colors from "../../styles/_dg.Colors.module.scss";

function Jokes({ post }: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p style={{ color: colors.primary }}>Jokes</p>
      <pre>{JSON.stringify(post)}</pre>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://v2.jokeapi.dev/info");
  const info = await res.json();
  const englishJokesUpperLimit = 5 || info.jokes.idRange.en[1];
  const jokeIdArray = Array.from(Array(englishJokesUpperLimit).keys());

  const paths = jokeIdArray.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://v2.jokeapi.dev/joke/Any?idRange=${params.id}`
  );
  const post = await res.json();

  return { props: { post }, revalidate: 10 };
}

export default Jokes;