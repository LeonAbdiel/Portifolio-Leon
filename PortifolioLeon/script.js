const nome = "Leon Abdiel Silva dos Santos"
const area = "Engenharia de software"
let cidade = "Salvador na Bahia"
let idade = 18
let projetos = Number(prompt("quantos projetos tem ?"))
let concluidos = Number(prompt("quantos projetos estão concluidos ?"))
let andamento = Number(prompt("quantos projetos estão em andamento ?"))
let disponibilidade = true
if (projetos < 0) {
    console.log("Não tem como ter numero negativo de projetos")
} else if (projetos == 0) {
    console.log("não tem projetos cadastrados")
} else if (projetos <= 2) {
    console.log("portifolio em construção")
} else {
    console.log("portifolio com varios projetos")
}
console.log("Meu nome é: " + nome + "\nSou da area de " + area + "\nAtualmente moro em: " + cidade +
    "\nTenho " + idade + " anos de idade\nTenho " + projetos +
    " projetos feitos que podem ser visualizados na pagina X\nEstado de disponibilidade: " + disponibilidade)
if (projetos == 0 || disponibilidade == false) {
    console.log("Não pode ir ao mercado de trabalho")
} else {
    console.log("Pode ir ao mercado de trabalho")
}
function apresentarPerfil(nome, area) {
    return "Oi, meu nome é " + nome + " e sou da area de " + area
}
function resumirProjetos(concluidos, andamento) {
    return concluidos + andamento
}
console.log(apresentarPerfil(nome, area))
console.log("total de projetos: " + resumirProjetos(concluidos, andamento))
