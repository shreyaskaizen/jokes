import Link from "next/link";
import { forwardRef } from "react";
import ButtonStyles from "./../styles/component.Button.module.scss";

const Button = forwardRef(({ onClick, href, children }: any, ref: any) => {
    return (
        <a
            href={href}
            onClick={onClick}
            ref={ref}
            className={ButtonStyles.link}
        >
            {children}
        </a>
    );
});

export default Button;
