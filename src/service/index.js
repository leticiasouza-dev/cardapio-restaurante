import {produtos} from '@/data/data-produtos';

export const buscarProdutos = (textoDigitado) => {  // função para a busca de produtos
    return produtos.filter(
        (produto) => 
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}

export const filtrarProdutos = (categoria) => { //  função para a filtragem de produto de acordo com, sua categoria
    return produtos.filter((produto) => produto.categoria === categoria);
}

export const produtosEntradas = filtrarProdutos("Entradas"); // função para os produtos de entrada;