import { Fragment } from "react";
import styles from "../styles/component.Joke.module.scss";
import HorizontalSpacer from "./component.HorizontalSpacer";

function SingleLineJoke({ text }: { text: string }) {
    const transformedJoke = text.split("\n");
    return (
        <>
            {transformedJoke.map((jokeText, index) => {
                if (transformedJoke.length - 1 === index) {
                    return (
                        <p key={index} className={styles.delivery}>
                            {jokeText}
                        </p>
                    );
                }
                return (
                    <Fragment key={index}>
                        <p className={styles.delivery}>{jokeText}</p>
                        <HorizontalSpacer space={4} />
                    </Fragment>
                );
            })}
        </>
    );
}

const TwoPartJoke = function ({
    setup,
    delivery,
}: {
    setup: string;
    delivery: string;
}) {
    return (
        <>
            <p className={styles.delivery}>{setup}</p>
            <HorizontalSpacer space={4} />
            <p className={styles.setup}>{delivery}</p>
        </>
    );
};

function Joke({ joke }: any) {
    const { category, type, setup, delivery, joke: singleLineJoke } = joke;
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>{category}</p>
                <HorizontalSpacer space={6} />
                {type === "twopart" ? (
                    <TwoPartJoke setup={setup} delivery={delivery} />
                ) : (
                    <SingleLineJoke text={joke.joke} />
                )}
            </div>
        </div>
    );
}

export default Joke;
