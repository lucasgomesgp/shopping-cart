import Item from "../../components/Item";
import styles from "./styles.module.scss";
import { listAllBoots } from "../../utils/boots";

export default function Shop() {
    return (
        <>
            <main className={styles.items}>
                {listAllBoots.map((book) => (
                    <Item key={book.id} title={book.title} srcImg={book.endImg} imgAlt={book.alt} priceDanger={book.priceBefore} priceCurrent={book.priceCurrent} />
                ))};
            </main>
        </>
    );
}