import SettingsIcon from "./icon.Settings";
import ButtonStyles from "./../styles/component.Button.module.scss";

function Settings() {
    return (
        <button className={ButtonStyles.round} type="button">
            <SettingsIcon />
        </button>
    );
}

export default Settings;
