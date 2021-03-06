import styles from "./styles.module.scss";

export default function Item({ srcImg, imgAlt, title, priceDanger, priceCurrent }) {
    return (
        <>
            <section className={styles.item}>
                <img src={srcImg} alt={imgAlt} className={styles.boot} />
                <div className={styles.fixItems}>
                    <h2 className={styles.titleItem}>{title}</h2>
                    <span>
                        De:<p className={styles.priceMutted}>{priceDanger}</p>
                    </span>

                    <span>
                        Por:
                        <h3 className={styles.priceGreen}>{priceCurrent}</h3>
                    </span>
                    <button className={styles.addCart}>
                        Adicionar
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.875 20.25C6.6375 20.25 5.63625 21.2625 5.63625 22.5C5.63625 23.7375 6.6375 24.75 7.875 24.75C9.1125 24.75 10.125 23.7375 10.125 22.5C10.125 21.2625 9.1125 20.25 7.875 20.25ZM1.125 2.25V4.5H3.375L7.425 13.0387L5.90625 15.795C5.72625 16.11 5.625 16.4812 5.625 16.875C5.625 18.1125 6.6375 19.125 7.875 19.125H21.375V16.875H8.3475C8.19 16.875 8.06625 16.7512 8.06625 16.5937L8.1 16.4587L9.1125 14.625H17.4938C18.3375 14.625 19.08 14.1637 19.4625 13.4662L23.49 6.165C23.58 6.0075 23.625 5.81625 23.625 5.625C23.625 5.00625 23.1188 4.5 22.5 4.5H5.86125L4.80375 2.25H1.125ZM19.125 20.25C17.8875 20.25 16.8863 21.2625 16.8863 22.5C16.8863 23.7375 17.8875 24.75 19.125 24.75C20.3625 24.75 21.375 23.7375 21.375 22.5C21.375 21.2625 20.3625 20.25 19.125 20.25Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}