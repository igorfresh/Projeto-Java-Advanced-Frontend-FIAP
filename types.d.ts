interface Categoria {
    id: number,
    nome: string,
    icone: string
}

interface Movimentacao {
    categoria: any
    id: number,
    descricao: string,
    valor: number,
    data: string,
    tipo: "ENTRADA" | "SAIDA"
    
}