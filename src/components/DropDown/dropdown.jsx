import { useState } from "react";
import styles from "./dropdown.module.scss";
export default function DropDown({ children, title }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdownContainer}>
            <h2 className={styles.dropdownContainer_title} onClick={toggleDropdown}>
                {title}
                <div className={`${styles.dropdownContainer_title_button} ${isOpen ? styles.open : ""}`}></div>
            </h2>
            <div className={`${styles.dropdownContainer_content} ${isOpen ? styles.open : ""}`}>
                {children}
            </div>
        </div>
    );
}
