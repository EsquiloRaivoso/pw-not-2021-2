let nota = 7.3
let situacao

// if (nota >= 6) {
//     situacao = "aprovado"
// }else{
//     situacao = "reprovado"
// }

situacao = nota >= 6 ? 'aprovado' : 'reprovado'
console.log(`nota ${nota}, situação ${situacao}`)

let msg = user == 'admin' ? 'pode logar' : 'não pode logar'