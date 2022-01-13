import Colors from "../styles/_dg.Colors.module.scss";

const HeartIcon = () => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 8.4A5.4 5.4 0 0 1 7.5 3 5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"
            fill={Colors.secondary}
        />
    </svg>
);

export default HeartIcon;
