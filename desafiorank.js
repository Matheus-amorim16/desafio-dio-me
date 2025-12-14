
let nomeheroi = ("Zakarim")
let saldoVitoria
let vitorias = 65
let derrotas = 5
rankear(vitorias, derrotas)
function rankear (vitorias, derrotas) {
saldoVitoria = (vitorias - derrotas)
if (saldoVitoria <= 10)
{console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível FERRO! ")}
else if ((saldoVitoria >= 11) && (saldoVitoria <= 20)){
    console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível BRONZE! ")}
else if ((saldoVitoria >= 21) && (saldoVitoria <= 50)){
    console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível PRATA! ")}
else if ((saldoVitoria >= 51) && (saldoVitoria <= 80)){
    console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível OURO! ")}
else if ((saldoVitoria >= 81) && (saldoVitoria <= 90)){
    console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível DIAMANTE! ")}
else if ((saldoVitoria >= 91) && (saldoVitoria <= 100)){
    console.log(" O Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível Lendário!! ")} 
else { 
    console.log(" O Incrível Herói "+nomeheroi+" Tem um saldo de "+saldoVitoria+ " Partidas ganhas e por isso está no nível Imortal!!! Parabéns, você é incrívelmente Poderoso!")   
}
}