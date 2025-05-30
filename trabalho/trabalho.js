
export function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
    // Considera que idade >= 1 e porte 'M' (médio) pode ser adotado
    return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    // Retorna 300g por kg de peso
    return Math.round(peso * 300);
}

export function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno') return 'brincar dentro de casa';
    if (porte === 'médio') return 'passeios moderados';
    if (porte === 'grande') return 'exercícios ao ar livre';
    return 'atividade desconhecida';
}

export async function buscarDadoAsync() {
    // Simula busca assíncrona
    return Promise.resolve('Pipoca');
}

