import styles from "../styles/_dg.Spacer.module.scss";

function HorizontalSpacer({ space }: { space: number }) {
    return <div style={{ height: styles[space] }}></div>;
}

export default HorizontalSpacer;
