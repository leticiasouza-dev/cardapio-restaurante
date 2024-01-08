import React from "react";
import styles from './Cards.module.css'

import Image from "next/image";

function Cards (produto){
    return(
        <article className={styles.Card}>
            <Image src={produto.imagem} className={styles.imagem}/>

            <div className={styles.textos}>
                <h4>{produto.nome}</h4>
                <span>{produto.categoria}</span>
                <p>{produto.descricao}</p>
                <p className={styles.valor}>{produto.valor}</p>
            </div>
        </article>
    )
}

export default Cards