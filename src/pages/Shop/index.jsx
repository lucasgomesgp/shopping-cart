import { useEffect, useRef } from "react";
import Item from "../../components/Item";
import styles from "./styles.module.scss";
import cartImg from "../../assets/shopping_cart_bg.svg";
import doneImg from "../../assets/done.svg";
import { listAllBoots } from "../../utils/boots";
import SelectedItem from "../../components/SelectedItem";

export default function Shop() {
    const allShoes = useRef(null);
    const cartRef = useRef(null);
    useEffect(() => {
        moveInitial();
    });

    function moveInitial() {
        allShoes.current.scrollLeft = 0;
    }
    function moveSecond() {
        if (allShoes.current.scrollLeft === 1826) {
            allShoes.current.scrollLeft = 913;
        } else {
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

    function openWidthCart() {
        cartRef.current.style.width = "40%";
    }
    function closeWidthCart() {
        cartRef.current.style.width = 0;
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
            <div className={styles.cartCurrent}>
                <button className={styles.cartBtn} onClick={openWidthCart}>
                    <img src={cartImg} alt="Carrinho de compras" />
                </button>
                <div className={styles.cartArea} ref={cartRef}>
                    <div className={styles.btnClose} onClick={closeWidthCart}>
                        <span></span>
                        <span></span>
                    </div>
                    <h3 className={styles.cartTitle}>Bem vindo ao carrinho de compras!</h3>
                    <p className={styles.cartSubTitle}>Você tem x sapato(s) selecionados.</p>
                    <div className={styles.listShoes}>
                        <SelectedItem />
                        
                        <button className={styles.sendSale}>
                            <img src={doneImg} alt="Icone de finalização" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}