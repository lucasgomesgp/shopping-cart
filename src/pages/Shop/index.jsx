import Item from "../../components/Item";
import styles from "./styles.module.scss";
import { listAllBoots } from "../../utils/boots";
import { useRef } from "react";

export default function Shop() {
    const allShoes = useRef(null);

    function moveInitial() {
        allShoes.current.scrollLeft = 0;
    }
    function moveRight() {
        allShoes.current.scrollLeft += allShoes.current.clientWidth;

    }
    return (
        <>
            <main className={styles.items} ref={allShoes}>
                {listAllBoots.map((book) => (
                    <Item key={book.id} title={book.title} srcImg={book.endImg} imgAlt={book.alt} priceDanger={book.priceBefore} priceCurrent={book.priceCurrent} />
                ))};
            </main>
            <div className={styles.circles}>
                <span className={styles.circle} onClick={moveInitial}></span>
                <span className={styles.circle} onClick={moveRight}></span>
                <span className={styles.circle} onClick={moveRight}></span>
            </div>
        </>
    );
}