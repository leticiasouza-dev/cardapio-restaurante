import React from "react";
import style from './Categorias.module.css'
import iconeEntrada from '@/assets/entrada.png';
import iconeMassas from '@/assets/massa.png';
import iconeCarnes from '@/assets/carne.png'
import iconeBebidas from '@/assets/bebidas.png';
import iconeSaladas from '@/assets/salada.png';
import iconeSobremesas from '@/assets/sobremesa.png';

import Image from "next/image";

function Categorias(){
    return(
        <div className={style.containerCategorias}>
            <button>
                <Image src={iconeEntrada} alt="" />
                Entradas
            </button>

            <button>
                <Image src={iconeMassas}/>
                Massas
            </button>

            <button>
                <Image src={iconeCarnes}/>
                Carnes
            </button>

            <button>
                <Image src={iconeBebidas}/>
                Bebidas
            </button>

            <button>
                <Image src={iconeSaladas}/>
                Saladas
            </button>

            <button>
                <Image src={iconeSobremesas}/>
                Sobremesas
            </button>
        </div>
    )
}

export default Categorias;