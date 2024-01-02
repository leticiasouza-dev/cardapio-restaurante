import React from "react";
import styles from './Cards.module.css'
import imagemTeste from '../../assets/img/carpaccio.jpg';

import Image from "next/image";

function Cards (props){
    return(
        <article className={styles.Card}>
            <Image src={props.imagem} className={styles.imagem}/>

            <div className={styles.textos}>
                <h4>{props.nome}</h4>
                <span>{props.categoria}</span>
                <p>{props.descricao}</p>
                <p className={styles.valor}>{props.valor}</p>
            </div>
        </article>
    )
}

export default Cards