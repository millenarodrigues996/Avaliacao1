//1. Cálculo de Desconto Progressivo: 
let valorCompra = 750
if (valorCompra >= 1000) {
    desconto = 0.20
} else if (valorCompra >= 500){
    desconto = 0.10
} else
    desconto = 0.00
    
let valorFinal = valorCompra * (1 - desconto);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)

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

//3. Sequência de Fibonacci: 

//for (let i = 0; i <=34; i**) {

//4. Simulador de Bateria: 
let nivelBateria = 100
let hora = 1
while (nivelBateria > 0) {
    console.log(`Hora ${hora}: Bateria em ${nivelBateria}%`)
    nivelBateria -= 10
    hora++
}
console.log(`Hora ${hora - 1}: Bateria esgotada`)

//5. Função para Calcular Dias de Vida: 
function calcularDiasDeVida(idadeEmAnos) {
    let diasDeVida = idadeEmAnos * 365;
    return diasDeVida;
}
let idade = 25;

let totalDias = calcularDiasDeVida(idade);

console.log(`Uma pessoa de ${idade} anos viveu aproximadamente ${totalDias} dias.`);

//6. Verificador de Aprovação Escolar: 
const frequencia = 75
let nota1 = 8
let nota2 = 5
let nota3 = 7
let nota4 = 5
const media = (nota1 + nota2 + nota3 + nota4 /4)
if (media < 6 && frequencia < 75) {
    console.log("Reprovado")
} else if (media >= 6 && frequencia < 75) {
    console.log("Reprovado")
} else if (media >=6 && frequencia >= 75) {
    console.log("Aprovado")
}

//7. Menor Número da Lista: 
