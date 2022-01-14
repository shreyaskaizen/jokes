import styles from "../styles/component.Joke.module.scss";
import HorizontalSpacer from "./component.HorizontalSpacer";

function Joke({ joke }: any) {
    const { category, type, setup, delivery, joke: singleLineJoke } = joke;
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>{category}</p>
                <HorizontalSpacer space={6} />
                {type === "twopart" ? (
                    <>
                        <p className={styles.delivery}>{setup}</p>
                        <HorizontalSpacer space={4} />
                        <p className={styles.setup}>{delivery}</p>
                    </>
                ) : (
                    <p className={styles.delivery}>{singleLineJoke}</p>
                )}
            </div>
        </div>
    );
}

export default Joke;
