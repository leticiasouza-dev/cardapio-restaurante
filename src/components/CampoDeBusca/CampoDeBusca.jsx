import React from "react";
import styles from './CampoDeBusca.module.css';

import Image from "next/image";

import lupaBusca from '@/assets/lupa.png'

function CampoDeBusca({textoBuscaDigitada, handleBusca}){
    return(
        <div className={styles.campoDeBusca}>
            <Image src={lupaBusca}/>

            <input 
                type="text"
                value={textoBuscaDigitada}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                onChange={(event) => handleBusca(event.target.value)}
            />
        </div>
    )
}

export default CampoDeBusca;