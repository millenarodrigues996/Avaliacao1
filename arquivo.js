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

//3. Sequência de Fibonacci: 

//for (let i = 0; i <=34; i**) {

//4. Simulador de Bateria: 
//const nivelDaBateria = 100


//5. Função para Calcular Dias de Vida:

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


