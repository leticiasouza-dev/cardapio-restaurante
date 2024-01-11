import React from "react";
import style from './Categorias.module.css'
import iconeEntrada from '@/assets/entrada.png';
import iconeMassas from '@/assets/massa.png';
import iconeCarnes from '@/assets/carne.png'
import iconeBebidas from '@/assets/bebidas.png';
import iconeSaladas from '@/assets/salada.png';
import iconeSobremesas from '@/assets/sobremesa.png';


import Image from "next/image";

function Categorias({handleFiltro, botaoClicado}){
    return(
        <div className={style.containerCategorias}>
            <button className={botaoClicado === "Entradas" ? style.acenderBtn : style.apagarBtn}
                onClick={() => handleFiltro("Entradas")}>
                <Image src={iconeEntrada} alt="" />
                Entradas
            </button>

            <button  className={botaoClicado === "Massas" ? style.acenderBtn : style.apagarBtn}
            onClick={() => handleFiltro("Massas")}>
                <Image src={iconeMassas}/>
                Massas
            </button>

            <button className={botaoClicado === "Carnes" ? style.acenderBtn : style.apagarBtn}
            onClick={() => handleFiltro("Carnes")}>
                <Image src={iconeCarnes}/>
                Carnes
            </button>

            <button className={botaoClicado === "Bebidas" ? style.acenderBtn : style.apagarBtn}
            onClick={() => handleFiltro("Bebidas")}>
                <Image src={iconeBebidas}/>
                Bebidas
            </button>

            <button className={botaoClicado === "Saladas" ? style.acenderBtn : style.apagarBtn}
            onClick={() => handleFiltro("Saladas")}> 
                <Image src={iconeSaladas}/>
                Saladas
            </button>

            <button className={botaoClicado === "Sobremesas" ? style.acenderBtn : style.apagarBtn}
            onClick={() => handleFiltro("Sobremesas")}>
                <Image src={iconeSobremesas}/>
                Sobremesas
            </button>
        </div>
    )
}

export default Categorias;