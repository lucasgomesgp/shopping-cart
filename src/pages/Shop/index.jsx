import Item from "../../components/Item";
import styles from "./styles.module.scss";
import { listAllBoots } from "../../utils/boots";
import { useEffect, useRef } from "react";

export default function Shop() {
    const allShoes = useRef(null);

    useEffect(() => {
        moveInitial();
    });

    function moveInitial() {
        allShoes.current.scrollLeft = 0;
    }
    function moveSecond() {
        if (allShoes.current.scrollLeft === 1826) {
            allShoes.current.scrollLeft = 913;
        }else{
            allShoes.current.scrollLeft = 913;
        }
    }
    function moveLast() {
        if (allShoes.current.scrollLeft === 0) {
            allShoes.current.scrollLeft = 1826;
        }
        if ((allShoes.current.scrollLeft >= 913) && (allShoes.current.scrollLeft !== 1826)) {
            allShoes.current.scrollLeft += allShoes.current.clientWidth;
        }

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
                <span className={styles.circle} onClick={moveSecond}></span>
                <span className={styles.circle} onClick={moveLast}></span>
            </div>
        </>
    );
}