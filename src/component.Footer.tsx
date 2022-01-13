import FooterStyles from "../styles/component.Footer.module.scss";
import Avatar from "./component.Avatar";
import HeartIcon from "./icon.Heart";
import NextJSIcon from "./icon.NextJS";
import ReactIcon from "./icon.React";

const { container, attributionText } = FooterStyles;

function Footer() {
    return (
        <footer className={container}>
            <Avatar />
            <p className={attributionText}>
                created with
                <span style={{ marginLeft: 4, height: 24 }}>
                    <HeartIcon />
                </span>
                <span style={{ margin: "0 4px", height: 24 }}>
                    <ReactIcon />
                </span>
                and
                <span style={{ marginLeft: 4, height: 24 }}>
                    <NextJSIcon />
                </span>
            </p>
        </footer>
    );
}

export default Footer;
