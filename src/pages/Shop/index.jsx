import Item from "../../components/Item";
// import tenis1Img from "../../assets/tenis1.png";

import styles from "./styles.module.scss";
import { listAllBoots } from "../../utils/boots";

export default function Shop() {
    console.log(listAllBoots);

    return (
        <>
            <main className={styles.items}>
                {listAllBoots.map((book) => (
                    <Item key={book.id} title={book.title} srcImg="https://via.placeholder.com/400" imgAlt={book.alt} priceDanger={book.priceBefore} priceCurrent={book.priceCurrent} />
                ))};
            </main>
        </>
    );
}