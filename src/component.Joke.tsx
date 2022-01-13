import styles from "../styles/component.Joke.module.scss";
import HorizontalSpacer from "./component.HorizontalSpacer";

function Joke({ category }: { category: string }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>{category}</p>
                <HorizontalSpacer space={6} />
                <p className={styles.delivery}>
                    Why do programmers prefer using the dark mode?
                </p>
                <HorizontalSpacer space={4} />
                <p className={styles.setup}>Because light attracts bugs.</p>
            </div>
        </div>
    );
}

export default Joke;
