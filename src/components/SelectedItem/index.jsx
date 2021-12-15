import imgTest from "../../assets/tenis1.png";
import styles from "./styles.module.scss";

export default function SelectedItem() {
    return (
        <div className={styles.itemCart}>
            <img src={imgTest} alt="Sapato" />
            <div className={styles.controls}>
                <p className={styles.shoeTitle}>Sapato Nike</p>
            </div>
        </div>
    );
}