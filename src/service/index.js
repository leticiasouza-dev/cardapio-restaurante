import {produtos} from '@/data/data-produtos';

export const filtrarProdutos = (categoria) =>{
    return produtos.filter((produto) => produto.categoria === categoria);
}

export const produtosEntradas = filtrarProdutos("Entradas");