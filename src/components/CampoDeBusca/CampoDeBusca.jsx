import React from "react";
import styles from './CampoDeBusca.module.css';

import Image from "next/image";

import lupaBusca from '@/assets/lupa.png'

function CampoDeBusca(){
    return(
        <div className={styles.campoDeBusca}>
            <Image src={lupaBusca}/>

            <input 
            placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    )
}

export default CampoDeBusca;