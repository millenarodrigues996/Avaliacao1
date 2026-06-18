//1. Cálculo de Desconto Progressivo: 
    
//2. Sistema de Pontos de Fidelidade: 
const pontuação = 20
let categoria = pontuação
switch (pontuação) {
    case 20:
        categoria = "Ouro"
        break
    case 15:
        categoria = "Prata"
        break
    case 10:
        categoria = "Bronze"
    break
    default:
        pontuação = "Categoria inválida"
}
console.log(`A categoria é ${categoria}`)



